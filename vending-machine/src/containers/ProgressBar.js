import React from 'react'
import Countdown from "react-countdown";
import PropTypes from 'prop-types'

const ProgressBar = props => {

    const{
        index,
        preparation_time,
        name,
        afa
    } = props;

    
      const renderer = ({ seconds, completed }) => { 

        var porcentage = seconds;
        
        if (seconds>=1){
            porcentage = (100/porcentage)+50;
        }
        else{
            porcentage = 100;
            
        }
        
        const newStyle = {
            opacity: 1,
            width: `${porcentage}%`
        } 
       if (completed) {
        return (
            <>
            <h3>{name}</h3>
            <div className="progress">
                
                <div className="progress-done" style={newStyle}>
                    completed
                </div>
            </div>
            </>
        )
      } else {
        return (
            <>
            <h3>{name}</h3>
            <div className="progress">
                
                <div className="progress-done" style={newStyle}>
                    {seconds} seconds left
                </div>
            </div>
            </>
        )
      }
        
    };  

     

    return (
        <> 
         
        
         <Countdown   key={index} date={afa} renderer={renderer} /> 
        </>
    )
}

ProgressBar.propTypes = {
    index: PropTypes.string,
    preparation_time: PropTypes.string
}

export default ProgressBar