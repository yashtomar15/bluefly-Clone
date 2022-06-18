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

export default function CustomizedAccordions({filterData,filterCategory}) {
  const [ expanded, setExpanded] = React.useState('panel1');
const [inputname,setName]=useState("");

const category=filterCategory[0];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
 const handleClick=(e)=>{
  // let inputname=e.target.name;
  setName(e.target.name);
  let checked=e.target.checked;

  // add womens{category) in every query, (additional edit->api only work after new deployment)
{
  if(inputname===filterCategory[2] &&checked){
     axios.get(`https://blueflyapp.herokuapp.com/Data/filter?category=${filterCategory[2]}`)
         .then(({data})=>{filterData(data); console.log("wear   " ,data)})
         .catch((err)=>console.log("error occured: ",err));
  }
  else if(inputname===filterCategory[3] &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?category=${filterCategory[3]}`)
    .then(({data})=>{filterData(data); console.log("jeans  ",data)})
    .catch((err)=>console.log("error occured: ",err));
  }
  //  filter by colors 
  // category=mens||womens
 else if(inputname==="white" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=white`)
    .then(({data})=>{filterData(data); console.log("jeans  ",data)})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="black" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=black`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err)) 
  }
  else if(inputname==="red" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=red`)
       .then(({data})=>{filterData(data); })
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="brown" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=brown`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="green" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=green`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="khaki" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=khaki`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="blue" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=coal`)
    .then(({data})=>{filterData(data); })
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="grey" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=grey`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="skyblue" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}color=skyblue`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  // fliter by sizes
  else if(inputname==="small" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}size=small`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="medium" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}size=medium`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="large" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}size=large`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  // filter by condition
  else if(inputname==="new" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}condition=new`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="old" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}condition=old`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
  else if(inputname==="used" &&checked){
    axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}condition=used`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
  }
// filter by brands
else if(inputname==="polo" &&checked){
  axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}brand=polo`)
  .then(({data})=>{filterData(data);})
  .catch((err)=>console.log("error occured: ",err))
}
else if(inputname==="canvas" &&checked){
  axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}brand=canvas`)
  .then(({data})=>{filterData(data);})
  .catch((err)=>console.log("error occured: ",err))
}
else if(inputname==="nike" &&checked){
  axios.get(`https://blueflyapp.herokuapp.com/Data/filter?${category}brand=nike`)
  .then(({data})=>{filterData(data);})
  .catch((err)=>console.log("error occured: ",err))
}
// filter by price
else if(inputname==="highTlow" &&checked){
  axios.get(`https://blueflyapp.herokuapp.com/Data/sort${category}?price=inc`)
  .then(({data})=>{filterData(data);})
  .catch((err)=>console.log("error occured: ",err))
}
else if(inputname==="lowThigh" &&checked){
  axios.get(`https://blueflyapp.herokuapp.com/Data/sort${category}?price=dec`)
  .then(({data})=>{filterData(data);})
  .catch((err)=>console.log("error occured: ",err))
}
  else{
    axios.get(`https://blueflyapp.herokuapp.com/Data/${filterCategory[1]}`)
    .then(({data})=>{filterData(data);})
    .catch((err)=>console.log("error occured: ",err))
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
        <input type={'checkbox'} onClick={handleClick} name='brown' /> <label className={styles.filterTypes} htmlFor='Brown'>brown (645)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='black' /> <label className={styles.filterTypes} htmlFor='Black'>Black (342)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='khaki' /> <label className={styles.filterTypes} htmlFor='Khaki'>khaki (233)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='blue' /> <label className={styles.filterTypes} htmlFor='Blue'>Blue (676)</label> 
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
          <input type={'checkbox'} onClick={handleClick} name='old' /> <label className={styles.filterTypes} htmlFor='old'>Old (106)</label> 
          <br></br>
          <input type={'checkbox'} onClick={handleClick} name='used' /> <label className={styles.filterTypes} htmlFor='used'>Used (56)</label> 
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