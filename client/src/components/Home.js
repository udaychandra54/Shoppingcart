import React,{useEffect,useState} from 'react';
import "../styles/Home.css";
import image1 from "../static/images/offers/offer1.jpg";
import image2 from "../static/images/offers/offer2.jpg";
import image3 from "../static/images/offers/offer3.jpg";
import image4 from "../static/images/offers/offer4.jpg";
import image5 from "../static/images/offers/offer5.jpg";


function Home() {
  const [categories, setCategories] = useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const res = await fetch("http://localhost:4000/categories");
            const data = await res.json();
            setCategories(data)
            
        }
        fetchData()
      },[])
  return (
    <div className="container mt-2">
    <div className="">
    <div className="wrapper">
  <input defaultChecked type="radio" name="slider" id="slide1" />
  <input type="radio" name="slider" id="slide2" />
  <input type="radio" name="slider" id="slide3" />
  <input type="radio" name="slider" id="slide4" />
  <input type="radio" name="slider" id="slide5" />

  <div className="slider-wrapper box effect2">
    <div className="inner">
      <article>
        <div className="info top-left">
          <h3>Malacca</h3></div>
        <img src={image1} alt="offer" />
      </article>

      <article>
        <div className="info bottom-right">
          <h3>Cameron Highland</h3></div>
          <img src={image2} alt="offer" />
      </article>

      <article>
        <div className="info bottom-left">
          <h3>New Delhi</h3></div>
          <img src={image3} alt="offer" />
      </article>

      <article>
        <div className="info top-right">
          <h3>Ladakh</h3></div>
          <img src={image4} alt="offer" />
      </article>

      <article>
        <div className="info bottom-left">
          <h3>Nubra Valley</h3></div>
          <img src={image5} alt="offer" />
      </article>
    </div>
  
  </div>


  <div className="slider-prev-next-control">
    <label htmlFor="slide1"></label>
    <label htmlFor="slide2"></label>
    <label htmlFor="slide3"></label>
    <label htmlFor="slide4"></label>
    <label htmlFor="slide5"></label>
  </div>
  

  <div className="slider-dot-control">
    <label htmlFor="slide1"></label>
    <label htmlFor="slide2"></label>
    <label htmlFor="slide3"></label>
    <label htmlFor="slide4"></label>
    <label htmlFor="slide5"></label>
  </div>
  
</div>
    </div>
    {console.log(categories)}
    {categories.map(category=>{
      return <div className="section-item box effect2 row" key={category.key}>
    
          <div className="col">
              <img src={category.imageUrl} alt="fruits" className='fruits-img' />
          </div>
          <div className="col cat-fruits">
          <div className='text-center'>
          <h2>{category.name}</h2>
              <p>{category.description}</p>
              <button className="btn btn-danger section-btn">Explore {category.key}</button>
          </div>
              
          </div>
  
    </div>
    })}
   
    
    </div>
  )
}

export default Home