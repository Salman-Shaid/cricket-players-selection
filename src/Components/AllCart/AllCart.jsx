import { useEffect, useState } from "react";
import Single from "../SingleCart/Single";



const AllCart = ({handleSelectedProduct}) => {
    const [carts,setCarts]=useState([])
    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=>{
            setCarts(data)})
    },[])

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
            {
                carts.map((cart,idx)=><Single handleSelectedProduct={handleSelectedProduct} key={idx} cart={cart}></Single>)
            }
        </div>
    );
};

export default AllCart;