import React from 'react'
import {useSelector} from  'react-redux';
import  Button  from 'react-bootstrap/Button';

export const ProductSelection = () => {
    const products = useSelector((state) => state.allProducts.products); 
    const renderList = products.map((product) => {
        const {id, name, preparation_time, thumbnail} = product;
        return (
            <div key={id} class="col-4 py-2  align-items-center">
             <button class="button-selection">{name}</button>
            </div>
        );
    });

    return (
       <> {renderList} </>
    )
}
