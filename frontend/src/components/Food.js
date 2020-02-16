import React from 'react';

const Food = (props) => {
  return (
    <div>
    
      <div>
        <p>{props.foodName}</p>
        <p>{props.foodPrice}</p>
      </div>
      
      <div>
        <button></button>
      </div>

    </div>
  );
}

export default Food