import {React, useEffect} from 'react';
import {useSelector} from  'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';

export const ProductListing = () => {
    const products = useSelector((state) => state);

    const fetchProducts = async () => {
        const response = await axios
        .get("https://vending-machine-test.vercel.app/api/products")
        .catch((err) =>{
            console.log("error", err);
        });
        console.log(response);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <ProductComponent />
        </div>
    )
}

export default ProductListing