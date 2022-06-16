import { style } from "@mui/system"
import styled from "styled-components"


export const Topcart=styled.div`

width:9%;
margin:auto;
.p1{
    font-size:33px;
    font-weight:light;
}

p{
    font-size:10px;
}

div{
    height:1px;
    width:100%;
    background:silver;

}
div:hover{
    background:black;
}



`

export const Topcart2=styled.div`
display:flex;
justify-content:space-around;
margin-top:5%;

div{
    width:50%;
    display:flex;
    justify-content:space-around;
    margin-left:5%;



    
}

`

export const Totalcontainer=styled.div`

display:flex;
justify-content:space-between;
margin-top:2%;

`
export const Br=styled.div`
height:1px;
width:100%;
background:silver;

`

export const Firstcont=styled.div`

height:200px;
width:100%;
display:flex;
justify-content:space-around;

.title{
    font-family: Sans-Serif;
}
`

export const Forbuttons=styled.div`
width:100%;
display:flex;
justify-content:space-between;

`
export const Forbuttons1=styled.div`
width:100%;
display:flex;
justify-content:space-between;
p:first-child{
  margin-right:40%;
}
`
export const Checkoutbutton=styled.button`
background:black;
color:white;
height:30px;
width:100px;
`
export const Updatebutton=styled.button`
background:white;
color:black;
height:30px;
width:100px;
border:1px solid silver
`

export const Removebutton=styled.button`
background:white;
color:black;
border:1px solid grey;
height:30px;
width:100px;
letter-spacing:5px;
cursor:pointer
`