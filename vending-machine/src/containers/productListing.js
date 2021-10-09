import {React, useEffect} from 'react';
import {useDispatch, useSelector} from  'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { ProductSelection } from './ProductSelection';
import { setProducts } from '../redux/actions/productActions';


export const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get("https://vending-machine-test.vercel.app/api/products")
        .catch((err) =>{
            console.log("error", err);
        });
        dispatch(setProducts(response.data.data));
        console.log(response);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("Products:", products)

    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-6">
                        <div className="row products-section">
                        <ProductComponent />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row d-flex align-items-center col-12">
                            <h2>Select whatever you want!</h2>
                            <ProductSelection/>
                        </div>
                        
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ProductListing