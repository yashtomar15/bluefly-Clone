import{AddtocartData,ToalandQuant,Removecart} from "./actiontypes"



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
