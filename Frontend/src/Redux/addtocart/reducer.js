import {
  AddtocartData,
  ToalandQuant,
  Removecart,
  Myaddress,
  Mycoupon,
  SET_USER_TOKEN,
  DELETE_TOKEN,
} from "./actiontypes";
import { Loaddata, Savedata } from "../../utils/localstorage";

const initState = {
  cartdata: Loaddata("cart") || [],
  updateddata: Loaddata("modified") || [],
  total: Loaddata("total") || 0,
  address1: Loaddata("address") || {},
  coupon: Loaddata("coupon") || 0,
  token: null,
};

export const cartreducer = (state = initState, action) => {
  switch (action.type) {
    case AddtocartData: {
      let data = Loaddata("cart") || [];
      action.payload['quant']=1;
      let newData=[...data];
      let flag=false;
      if(data.length>0){
        data.forEach((item,i)=>{
           if(item._id===action.payload._id){
            data[i].quant=data[i].quant+1;
            flag=true;
           }
        })
      }
      if(!flag){
        newData = [...data, action.payload];
      }
      Savedata("cart", newData);
      return {
        ...state,
        cartdata: newData,
      };
    }
    case Mycoupon: {
      Savedata("coupon", 1);
      return {
        ...state,
        coupon: 1,
      };
    }

    case ToalandQuant: {
      console.log(action.payload, "inreducer");
      const { _id, value } = action.payload;
      console.log(_id, value);
      // let mydata1 = Loaddata("modified") || Loaddata("cart");
      let mydata1 = Loaddata("cart");
      let update = mydata1.map((ele) => {
        if (ele._id === _id) {
          ele.quant = value;
          return ele;
        } else {
          if (ele.quant == undefined) {
            ele.quant = 1;
          }
          return ele;
        }
      });
      console.log(update, "in reducer for quantity");
      // Savedata("modified", update);
      Savedata("modified", mydata1);
      let sum = 0;
      update.map((ele) => {
        sum = sum + ele.quant * ele.price;
      });
      Savedata("total", sum);
      return {
        ...state,
        cartdata: mydata1,
        updateddata: update,
        total: sum,
      };
    }

    case Removecart: {
      console.log("entered in removing");
      console.log(action.payload, "entered in removing");
      let mydata1 = Loaddata("cart") || [];
      let newdata = mydata1.filter((ele) => ele._id != action.payload);
      Savedata("cart", newdata);

      let updatedval = Loaddata("modified") || [];

      let newupdatedval = updatedval.filter((ele) => ele._id != action.payload);
      Savedata("modified", newupdatedval);

      let sum = 0;
      newupdatedval.map((ele) => {
        sum = sum + ele.quant * ele.price;
      });
      Savedata("total", sum);
      return {
        ...state,
        cartdata: mydata1,
        updateddata: newupdatedval,
        total: sum,
      };
    }
    case Myaddress: {
      Savedata("address", action.payload);
      return {
        ...state,
        address1: action.payload,
      };
    }

    case SET_USER_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case DELETE_TOKEN: {
      return {
        ...state,
        token: null,
      };
    }
    case "SET TOKEN":{
      return{
        ...state,token:action.payload
      }
    }
    default: {
      return state;
    }
  }
};
