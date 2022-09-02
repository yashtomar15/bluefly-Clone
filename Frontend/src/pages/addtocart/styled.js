import styled from "styled-components";

export const Topcart = styled.div`
  width: 9%;
  margin: auto;
  .p1 {
    font-size: 33px;
    font-weight: light;
    margin-top:10px;
  }

  p {
    font-size: 10px;
  }

  div {
    height: 1px;
    width: 100%;
    background: silver;
  }
  div:hover {
    background: black;
  }
`;

export const Topcart2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2%;

  div {
    width: 15%;
    display: flex;
    justify-content: space-around;
    margin-left: 7%;
  }
`;

export const Totalcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:20%;
  width:30%;
  margin:auto;
`;
export const Br = styled.div`
  height: 1px;
  width: 100%;
  background: silver;
`;

export const Firstcont = styled.div`
height: 100px;
width: 100%;
  display: flex;
  justify-content: space-around;

  .title {
    font-family: Sans-Serif;
    width:350px;
  }
 

`;

export const Forbuttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Forbuttons1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p:first-child {
    margin-right: 40%;
  }
`;
export const Checkoutbutton = styled.button`
  background: black;
  color: white;
  height: 30px;
  width: 100px;
  cursor:pointer;
`;
export const Updatebutton = styled.button`
  background: white;
  color: black;
  height: 30px;
  width: 100px;
  border: 1px solid silver;
  cursor:pointer;
`;

export const Removebutton = styled.button`
  background: white;
  color: black;
  cursor:pointer;
  border: 1px solid grey;
  height: 30px;
  width: 100px;
  letter-spacing: 5px;
  cursor: pointer;
`;

export const Sideinfodiv = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafa;
`;
export const Sideinfodivcont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;
export const Forbuttons2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
`;

export const Maininfopage = styled.div`
  display: flex;
  justify-content: center;
`;

export const Lastbutton = styled.button`
  background: black;
  color: white;
  width: 20%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Backbutton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
