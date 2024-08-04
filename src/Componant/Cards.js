import React from 'react';
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <>
      <Card style={{ width: "17rem" }} className=' mt-4 container-fluid'>
        <Card.Img variant="" src={props.imgData} />
        
        <div className='cars_body'>
            <div className='upper_data d-flex justify-content-between align-items-center'>
                <h4 className='mt-2'>{props.rname}</h4>
                <span>{props.rating}&nbsp;★</span>
            </div>
            <div className="lower_data d-flex justify-content-between align-items-center">
                <h5>{props.address}</h5>
                <span>{props.price}</span>
            </div>
        </div>
      </Card>
    </>
  );
}

export default Cards
// hello imadad ali how are you