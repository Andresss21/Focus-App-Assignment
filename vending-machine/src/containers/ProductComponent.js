import React from 'react'
import {useSelector} from  'react-redux';
import Card from 'react-bootstrap/Card';


export const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products); 
    const renderList = products.map((product) => {
        const {id, name, preparation_time, thumbnail} = product;
        return (
            <div className="mt-3 col-6 d-flex align-items-stretch">

                <div className="custom-card">
                    
                    <Card.Text className="d-flex align-items-stretch">
                        <div className="top-container d-flex justify-content-center" >
                            <img src={thumbnail} class="img-fluid product-image" width="120"/>
                        </div>
                    </Card.Text>
                    
                    <Card.Footer className="d-flex">
                    <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                        <div className="d-flex flex-column text-right mr-2"> <span class="prep-time">Preparation Time:</span> <span class="amount">{preparation_time} s</span> </div>
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
