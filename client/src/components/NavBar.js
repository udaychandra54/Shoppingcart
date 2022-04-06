import React,{useState, useContext} from 'react';
import "../styles/NavBar.css";
import {Link} from "react-router-dom";
import logo from "../static/images/logo.png";
import { Button,Modal } from 'react-bootstrap';
import { CartContext } from '../store/cart-context';

function NavBar() {
  const [show, setShow] = useState(false);
  const [itemAmount, setItemAmount] = useState(0)
  const {cartCount,cartItems,cartTotal,addItemToCart,removeItemToCart} = useContext(CartContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="navbar-div">
    <ul className='container-fluid'>
      <li>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </li>
      <li className='homepage'><Link to="/home">Home</Link></li>
      <li className='productspage'><Link to="/products">Products</Link></li>
      
  </ul>
  <div className="section-div">
  <div className='signin-register' id='signin-register'>
  <Link className="signin" to="/login">SignIn</Link>
  <Link className="register" to="/register">Register</Link>
</div>
<button className='btn btn-secondary' onClick={handleShow}>
<i className="fa-solid fa-cart-shopping cart-logo"></i>
<span className='items-cart'>{cartCount} items</span>
</button>
  </div>
    </div>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton style={{background:"black",color:'white'}}>
      <Modal.Title>My Cart ({cartCount} items)</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{minHeight:'100vh'}}>
       {cartCount===0 && (
        <div className='text-center'>
        <b>No items in your cart</b>
        <p>Your favourite items are click away</p>
       </div>
       )}
       
       {cartItems.map(item=>{
        
       
         return <div className="cart-item" key={item.id}>
            <div className="row">
              <div className="col-2">
                <img src={item.imageURL} className="cart-item-img" alt="item" />
              </div>
              <div className="col-8">
                {item.name}
                <div className="quantity row">
                  <div className="col-1 ">
                    <i className="fa-solid fa-circle-minus" onClick={()=>removeItemToCart(item)}></i>
                  </div>
                  <div className="col-1 ">
                    {item.quantity}
                  </div>
                  <div className="col-2 ">
                    <i className="fa-solid fa-circle-plus" onClick={()=>addItemToCart(item)}></i>
                  </div>
                  <div className="col-2 ">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <div className="col-2 ">
                  Rs.{item.price}
                  </div>
                  
                       
                      
                </div>
              </div>
              <div className="col-2">
                Rs. {item.price}
              </div>
            </div>
         </div>
       })}
    </Modal.Body>
    <Modal.Footer>
     
      <Button className='checkout w-100' variant="primary" >
      {cartCount===0 && <p className='text-center'>Start Shopping </p>}
        {cartCount!==0 && (
         <>
         <p>Proceed to checkout</p>
         <p className='cart-total'>Rs{cartTotal} {`>`} </p>
         </>
        )}
        
      </Button>
    </Modal.Footer>
  </Modal>
    </>
  )
}

export default NavBar