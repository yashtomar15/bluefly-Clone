import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import range slider
// import CustomizedSlider from './rangeSlider';
import styles from './styles/accordian.module.css';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { ADD_MENS_DATA,ADD_WOMENS_DATA } from '../../../Redux/prodcutPages/actiontypes';

// Reusable accordian---> for Men's & womens.
const Accordion = styled((props) => (
  <MuiAccordion  disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : '#ffffff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui- expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// main Component---> 

export default function CustomizedAccordions({filterData,filterCategory}) {
  const [ expanded, setExpanded] = React.useState('panel1');
// const [inputname,setName]=useState("");
  
   const {productsData,mensData,womensData}=useSelector((state)=>state.products);
  //  console.log(mensData,'mesdata data form acoordian');
   const dispatch=useDispatch();

const category=filterCategory[1];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const filterByCategory=(cat)=>{
    let filterData=productsData.filter((item)=>{
      return item.category===cat;
    })
    // console.log(filterData,"filter data by category")
    if(filterCategory[1]==="Men's"){
      dispatch({type:ADD_MENS_DATA,payload:filterData});
    }
    else{
      dispatch({type:ADD_WOMENS_DATA,payload:filterData});
    }
      
  }
  const filterByColors=(color)=>{
    if(filterCategory[1]==="Men's"){
      let pattern=/Men/;
      let filterData=productsData.filter((item)=>{
        return pattern.test(item.category) && item.color1===color;
    })
    dispatch({type:ADD_MENS_DATA,payload:filterData});
    }else{
      let pattern=/Women/;
      let filterData=productsData.filter((item)=>{
        return pattern.test(item.category) && item.color1===color;
    })
    dispatch({type:ADD_WOMENS_DATA,payload:filterData});
    }
  }
  const filterByCondition=(cond)=>{
    if(filterCategory[1]==="Men's"){
      let pattern=/Men/;
      let filterData=productsData.filter((item)=>{
        return pattern.test(item.category) && item.condition===cond;
    })
    dispatch({type:ADD_MENS_DATA,payload:filterData});
    }else{
      let pattern=/Women/;
      let filterData=productsData.filter((item)=>{
        return pattern.test(item.category) && item.condition===cond;
    })
    dispatch({type:ADD_WOMENS_DATA,payload:filterData});
    }
  }
  const filterBybrand=(brand)=>{
    if(filterCategory[1]==="Men's"){
      let pattern=/Men/;
      let filterData=productsData.filter((item)=>{
        return pattern.test(item.category) && item.brand===brand;
    })
    dispatch({type:ADD_MENS_DATA,payload:filterData});
    }else{
      let pattern=/Women/;
      let filterData=productsData.filter((item)=>{
        return pattern.test(item.category) && item.brand===brand;
    })
    dispatch({type:ADD_WOMENS_DATA,payload:filterData});
    }
  }
  
  const sortByPrice=(order)=>{
    if(order==="inc"){
      if(filterCategory[1]==="Men's"){
        let sortMensData=mensData.sort((a,b)=>{return Number(a.price)-Number(b.price)});
        console.log(sortMensData,"sort mensdata by price in inc");
        dispatch({type:ADD_MENS_DATA,payload:sortMensData});
      }
      else{
       let sortWomensData=womensData.sort((a,b)=>{return Number(a.price)-Number(b.price)});
       console.log(sortWomensData,"sort Womensdata by price in inc");
       dispatch({type:ADD_WOMENS_DATA,payload:sortWomensData});
     }
    }else if(order==="dec"){
      if(filterCategory[1]==="Men's"){
        let sortMensData=mensData.sort((a,b)=>{return Number(b.price)-Number(a.price)});
        console.log(sortMensData,"sort mensdata by price in dec");
        dispatch({type:ADD_MENS_DATA,payload:sortMensData});
      }
      else{
       let sortWomensData=womensData.sort((a,b)=>{return Number(b.price)-Number(a.price)});
       console.log(sortWomensData,"sort Womensdata by price in dec");
       dispatch({type:ADD_WOMENS_DATA,payload:sortWomensData});
     }
    }
  }
  const getData=(cat)=>{
    let pattern;
    if(cat==="Men's"){
      pattern=/Men/;
    }else{
      pattern=/Women/;
    }
      const data=productsData.filter((item)=>{
          return pattern.test(item.category);
      })
      if(cat==="Men's"){
        dispatch({type:ADD_MENS_DATA,payload:data});
      }
      else{
        dispatch({type:ADD_WOMENS_DATA,payload:data});
      }
  }

 const handleClick=(e)=>{
  let inputname=e.target.name;
  console.log(inputname,'inputname');
  // setName(e.target.name);
  let checked=e.target.checked;

  // add womens{category) in every query, (additional edit->api only work after new deployment)
{
  if(inputname===filterCategory[2] &&checked){
     filterByCategory(filterCategory[2]);
  }
  else if(inputname===filterCategory[3] &&checked){
    filterByCategory(filterCategory[3]);
  }
  //  filter by colors 
  // category=mens||womens
  else if(inputname==="black" &&checked){
    filterByColors('black');
  }
  else if(inputname==="red" &&checked){
    filterByColors('red');
  }
  else if(inputname==="brown" &&checked){
    filterByColors('brown');
  }
  else if(inputname==="blue" &&checked){
    filterByColors('blue');
  }
  // fliter by sizes

  // filter by condition
  else if(inputname==="new" &&checked){
   filterByCondition('new');
  }
  else if(inputname==="fair" &&checked){
    filterByCondition('fair');
  }
// filter by brands
else if(inputname==="polo" &&checked){
    filterBybrand(inputname);
}
else if(inputname==="canvas" &&checked){
  filterBybrand(inputname);
}
else if(inputname==="nike" &&checked){
  filterBybrand(inputname);
}
// filter by price
else if(inputname==="highTlow" &&checked){
   sortByPrice('dec');
}
else if(inputname==="lowThigh" &&checked){
  sortByPrice('inc');
}else if(!checked){
  getData(filterCategory[1]);
}
 }

}
  return (
    <div>
      <Accordion  expanded={ expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><span className={styles.heading}>Collections</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <input type={'checkbox'} onClick={handleClick} name={filterCategory[1]} /> <label className={styles.filterTypes} htmlFor='womens'>{filterCategory[1]} (267)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='all' /> <label className={styles.filterTypes} htmlFor='all'>all(1056)</label> 
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={ expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><span className={styles.heading}>Category</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
            <input type={'checkbox'} onClick={handleClick} name={filterCategory[2]} /> <label className={styles.filterTypes} htmlFor='womens jeans'>{filterCategory[2]} (876)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name={filterCategory[3]} /> <label className={styles.filterTypes} htmlFor='womens jeans'>{filterCategory[3]} (1056)</label> 
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={ expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography ><span className={styles.heading}>Brands</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <input type={'checkbox'} onClick={handleClick} name='polo' /> <label className={styles.filterTypes} htmlFor='womens'>Polo (667)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='canvas' /> <label className={styles.filterTypes} htmlFor='all'>Canvas (787)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='nike' /> <label className={styles.filterTypes} htmlFor='all'>Nike (297)</label> 
        </AccordionDetails>
        </Accordion>
        <Accordion  expanded={ expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography><span className={styles.heading}>COLOR</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <input type={'checkbox'} onClick={handleClick} name='black' /> <label className={styles.filterTypes} htmlFor='Black'>Black (645)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='blue' /> <label className={styles.filterTypes} htmlFor='Blue'>Blue (342)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='red' /> <label className={styles.filterTypes} htmlFor='red'>Red (233)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='brown' /> <label className={styles.filterTypes} htmlFor='Brown'>Brown (676)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='yellow' /> <label className={styles.filterTypes} htmlFor='Yellow'>Yellow (783)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='white' /> <label className={styles.filterTypes} htmlFor='White'>White (6732)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='green' /> <label className={styles.filterTypes} htmlFor='Green'>Green (745)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='coal' /> <label className={styles.filterTypes} htmlFor='Coal'>Coal (747)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='grey' /> <label className={styles.filterTypes} htmlFor='Grey'>Grey (845)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='skyblue' /> <label className={styles.filterTypes} htmlFor='Skyblue'>Skyblue (745)</label> 
        </AccordionDetails>
        </Accordion>
        <Accordion  expanded={ expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography><span className={styles.heading}>CLOTHING SIZE</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <input type={'checkbox'} onClick={handleClick} name='large' /> <label className={styles.filterTypes} htmlFor='large'>Large (2367)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='medium' /> <label className={styles.filterTypes} htmlFor='medium'>Medium (1056)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='small' /> <label className={styles.filterTypes} htmlFor='small'>Small (1356)</label> 
        </AccordionDetails>
        </Accordion>
        <Accordion  expanded={ expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography> <span className={styles.heading}>PRODUCTION CONDITION</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <input type={'checkbox'} onClick={handleClick} name='new' /> <label className={styles.filterTypes} htmlFor='new'>New (877)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='fair' /> <label className={styles.filterTypes} htmlFor='fair'>Fair (106)</label>
        </AccordionDetails>
        </Accordion>
        <Accordion  expanded={ expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography><span className={styles.heading}>PRICE</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <input type={'checkbox'} onClick={handleClick} name='lowThigh' /> <label className={styles.filterTypes} htmlFor='womens'>Low to High</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='highTlow' /> <label className={styles.filterTypes} htmlFor='all'>High to Low</label> 
         {/* <CustomizedSlider /> */}
        </AccordionDetails>
        </Accordion>
    </div>
  );
}