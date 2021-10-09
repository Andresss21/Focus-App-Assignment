import React from 'react'
import {useSelector} from  'react-redux';
export const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products); 
    //const {id, name} = products[0];
    return (
        <div>
            
        </div>
    )
}

export default ProductComponent
