import React,{useEffect,useState,useContext} from 'react';
import "../styles/Products.css";
import apple from "../static/images/products/fruit-n-veg/apple.jpg";
import { CartContext } from '../store/cart-context';

function Products() {
    const [products, setProducts] = useState([]);
    const [filterproducts, setfilterProducts] = useState([]);
    const [categories, setCategories] = useState([]);
   const {cartItems,addItemToCart}= useContext(CartContext);
   console.log(categories)
   console.log(products)
    const fetchCategories=async()=>{
        const res = await fetch("http://localhost:4000/categories");
        const data = await res.json();
        setCategories(data)
        
    }
    useEffect(()=>{
        const fetchData=async()=>{
            const res = await fetch("http://localhost:4000/products");
            const data = await res.json();
            setProducts(data);
            setfilterProducts(data)
            
        }
        fetchData()
        fetchCategories();
      },[])
      const getDataByCategory=(id)=>{
          const newProducts=  filterproducts.filter(product=>product.category===id);
        setProducts(newProducts)

      }
  return (
    <div className='container-fluid px-0'>
        <div className="products-main ">
        
            <div className="conatiner category-products ">
            <div className="accordion accordion-flush m-categories" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Fruits & Vegetable
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <ul className='m-accordian'>
                        {categories.map(item=>{
                            return (
                               <li className='cat-item' key={item.id} onClick={(e)=>getDataByCategory(item.id)}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
              </div>
            </div>
        
           
          </div>
           <div className="d-categories">
            <ul>
            {categories.map(item=>{
                return (
                   <li className='cat-item' key={item.id} onClick={(e)=>getDataByCategory(item.id)}>{item.name}</li>
                )
            })}
            </ul>
           </div>
                
            </div>
            <div className="products grid-container ">
            
                {products && products.map(product=>{
                    return <div className="grid-item " key={product.id}>
                        <div className="name">
                            <h5>{product.name}</h5>
                        </div>
                        <div className="product-div">
                            <div className="img-div">
                                <img src={`${product.imageURL}`} alt="product" />
                            </div>
                            <div className="info-div">
                            <div className="description mt-3">
                            <p>{product.description}</p>
                        </div>
                        <div className="row d-buy-btn">
                            <div className="col">
                                <h4>MRP Rs.{product.price}</h4>
                            </div>
                            <div className="col">
                                <button className="btn btn-danger add-to-cart" onClick={()=>addItemToCart(product)}>Buy Now</button>
                            </div>
                        </div>
                        <div className="m-buy-btn">
                            <button className="btn btn-danger add-to-cart" onClick={()=>addItemToCart(product)}>Buy Now@Rs.{product.price}</button>
                        </div>
                            </div>
                        </div>
                        
                       
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Products