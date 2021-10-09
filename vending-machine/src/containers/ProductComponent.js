import React from 'react'
import {useSelector} from  'react-redux';
import Card from 'react-bootstrap/Card';


export const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products); 
    const renderList = products.map((product) => {
        const {id, name, preparation_time, thumbnail} = product;
        return (
            <div class="mt-3 col-6 d-flex align-items-stretch">

                <div class="custom-card">
                    
                    <Card.Text class="d-flex align-items-stretch">
                        <div class="top-container d-flex justify-content-center" >
                            <img src={thumbnail} class="img-fluid product-image" width="120"/>
                        </div>
                    </Card.Text>
                    
                    <Card.Footer class="d-flex">
                    <div class="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                        <div class="d-flex flex-column text-right mr-2"> <span class="prep-time">Preparation Time:</span> <span class="amount">{preparation_time} s</span> </div>
                    </div>
                    </Card.Footer>
                    
                </div>
            </div>
        );
    });

    return (
       <> {renderList} </>
    )
}

export default ProductComponent
