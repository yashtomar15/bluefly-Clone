import{AddtocartData,ToalandQuant,Removecart,Myaddress,Mycoupon} from "./actiontypes"



export const addcartdata=(payload)=>{
    return{
        type:AddtocartData,
        payload
    }
}

export const totalandquant=(payload)=>{
    return{
        type:ToalandQuant,
        payload
    }
}

export const removecart=(payload)=>{
    return{
        type:Removecart,
        payload
    }
}

export const myaddress=(payload)=>{
    return{
        type:Myaddress,
        payload
    }
}
export const mycoupon=(payload)=>{
    return{
        type:Mycoupon,
        payload
    }
}
