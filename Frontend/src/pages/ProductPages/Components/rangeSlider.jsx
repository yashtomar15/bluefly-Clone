// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Slider, { SliderThumb } from '@mui/material/Slider';
// import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import Box from '@mui/material/Box';


// // const  marks = [
// //   {
// //     value: 0,
// //   },
// //   {
// //     value: 20,
// //   },
// //   {
// //     value: 37,
// //   },
// //   {
// //     value: 100,
// //   },
// // ];
// // console.log(marks);
// const AirbnbSlider = styled(Slider)(({ theme }) => ({
//   color: '#3a8589',
//   height: 3,
//   padding: '13px 0',
//   '& .MuiSlider-thumb': {
//     height: 27,
//     width: 27,
//     backgroundColor: '#fff',
//     border: '1px solid currentColor',
//     '&:hover': {
//       boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
//     },
//     '& .airbnb-bar': {
//       height: 9,
//       width: 1,
//       backgroundColor: 'currentColor',
//       marginLeft: 1,
//       marginRight: 1,
//     },
//   },
//   '& .MuiSlider-track': {
//     height: 3,
//   },
//   '& .MuiSlider-rail': {
//     color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
//     opacity: theme.palette.mode === 'dark' ? undefined : 1,
//     height: 3,
//   },
// }));

// function AirbnbThumbComponent(props) {
//   const { children, ...other } = props;
//   console.log(props);
//   return (
//     <SliderThumb {...other}>
//       {children}
//       <span className="airbnb-bar" />
//       <span className="airbnb-bar" />
//       <span className="airbnb-bar" />
//     </SliderThumb>
//   );
// }

// AirbnbThumbComponent.propTypes = {
//   children: PropTypes.node,
// };
// console.log(AirbnbThumbComponent);

// export default function CustomizedSlider() {
//   return (
//     <Box sx={{ width: 320 }}> 
//       <Box sx={{ m: 3 }} />
//       <Typography gutterBottom>Airbnb</Typography>
//       <AirbnbSlider
//         components={{ Thumb: AirbnbThumbComponent }}
//         getAriaLabel={(index) => (index !== 0 ? 'Minimum price' : 'Maximum price')}
//         defaultValue={[20, 40]}
//       />
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function CustomizedSlider() {
  const [value, setValue] = React.useState([20, 1000]);
console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
