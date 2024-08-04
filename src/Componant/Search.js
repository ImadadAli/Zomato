import React, { useState } from 'react';
import Fooddata from './FoodDAta';
import Z_logo from '../Assats/Images/Zomato-logo-1.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cards from './Cards';
import "./Style.css"

const Search = () => {

    const [fdata,setFdata] = useState(Fooddata)
    // console.log(fdata)

  return (
    <>
        <div className="container d-flex justify-content-between align-items-center" >
          <img src={Z_logo} style={{width:"7rem", position:"relative", left:"2%"}} alt="" />
          <h2 style={{color:"#1b1464"}}>Search Filter App</h2>
        </div>
        <Form className='d-flex justify-content-center'>
          <Form.Group className='mx-2 col-lg-4 col-md-3' controlId="formBAsicEmail">
            <Form.Control type="text" placeholder="Search Your Food"/>
          </Form.Group>
          <Button variant="danger" className='col-lg-1'>Search</Button>
        </Form>
        
        <section className='container mt-4'>
          <h2 className='px-4' style={{color:"#1b1464",fontWeight:"400"}}>Restaurant Opened In Ahemadabad</h2>
         
          <div className="row mt-3 justify-content-between">
            {Fooddata.map((val)=>(
              <Cards 
              rname={val.rname}
              imgData={val.imgdata}
              address={val.address}
              delimg={val.delimg}
              someData={val.somedata}
              price={val.price}
              rating={val.rating}
              arrimg={val.arrimg}
              />
            ))}
          </div>
        </section>
    </>
  );
}

export default Search;
