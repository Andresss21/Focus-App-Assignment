import {React,useState} from 'react'
import { useSelector } from 'react-redux';
import Countdown from "react-countdown";
import ProgressBar from './ProgressBar'

export const ProductSelection = () => {
    const products = useSelector((state) => state.allProducts.products);
    const [timeSelected, settimeSelected] = useState([]);
    const handleTime = (name, preparation_time) =>{
        const afa = Date.now() + preparation_time*1000;
        settimeSelected(timeSelected => [...timeSelected, {
            name, 
            preparation_time,
            afa
        }])
       
    }

    const renderList = products.map((product) => {
        const { id, name, preparation_time, thumbnail } = product;
        return (
            <div key={id} class="col-4 py-2  align-items-center">
                <button 
                class="button-selection" 
                onClick={() => handleTime(name,preparation_time)}>
                    {name}
                </button>
            </div>
        );
    });

    return (
        <>
            {renderList}
            <div>
                <h1>Product list</h1>

                
                {timeSelected.map((item, index) => 
                    
                    <ProgressBar 
                        index = {index}
                        preparation_time = {item.preparation_time}
                        name = {item.name}
                        afa={item.afa}
                    />
                    
                )}
                
                
            </div>
        </>

    )

    
}
