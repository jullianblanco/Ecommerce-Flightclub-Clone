import {React, useState, useEffect} from 'react';
import './ProductScreen.css';
import InputBtn from '../input1';
import Logo from '../logo';
import NavList from '../nav';
import '../footer.css';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import '../footer-secondary.css';
import SecondFooter from '../footer-secondary';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from '../Button';
import HomeScreen from './HomeScreen';
import { ExtraItems, NewReleases } from "../../data";
import { StaffPicks } from "../../data";
import { MusicInfluence } from "../../data";

const ProductScreen = () => {
  const { id } = useParams();

  //cart

  const [cart, setCart] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const navigate = useNavigate();


  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    setProductQuantity(productQuantity + 1);
    navigate('/cart', { state: { cart: [...cart, { ...product, quantity: 1 }],   selectedSize: selectedSize, price: Price } });
  };
  



  //product


  const ProductData = [...NewReleases, ...StaffPicks, ...MusicInfluence, ...ExtraItems];



  


  const Product = ProductData.find((product) => {
     return product.id === parseInt(id);
    });
     const {title, img, description, catagory, sizes} = Product;

   

//sizes
     const [Price, setPrice] = useState(sizes[0].price);
     const [selectedSize, setSelectedSize] = useState(sizes[0].size);


     const UpdatePrice = (event) => {
      const selectedSize = parseInt(event.target.innerHTML);
      const selectedSizeInfo = sizes.find((size) => size.size === selectedSize);
      setSelectedSize(selectedSize);
      setPrice(selectedSizeInfo.price);
    };
    

  const Sizes = sizes.map(size => (
    <div
      key={size.id}
      onClick={UpdatePrice}
      className={size.size === selectedSize ? 'Sizes-selected' : 'Sizes'}
    >
      {size.size}
    </div>
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className='Product-Screen'>
  <NavList /> 

      <div className='Product-Section'>
       <img className='Product-Screen-img' src={img} ></img>
        <div className='Product-Screen-info-container'>
          <div className='Product-Screen-info'>
            <h1 className='Product-Screen-Title'>{title}</h1>
            <p className='Product-Screen-Description'>{description}</p>
            <p className='Catagory'>{catagory}</p>
           <div className='Sizes-Container'>{Sizes}</div>
           <div className='Product-btns'>
            <div className='Product-btn1'>
            <label style={{fontWeight: 500,  fontSize: 14, fontFamily: "Helvetica Neue"}}>BUY NEW</label>
            <button className='Product-btn' onClick={() => handleAddToCart(Product)}>${Price}+</button>
            
            </div>
            <div className='Product-btn2'>
            <label style={{fontWeight: 500,  fontSize: 14, fontFamily: "Helvetica Neue"}}>BUY USED</label>
            <Button className='Product-btn-used' value="OUT OF STOCK"/>
            </div>   
           </div>
           <div className='Product-gap'></div>
           <div className='About-container'>
              <div className='Product-about'>
                <h4 style={{fontWeight: 500, fontSize: 14}}>ABOUT THIS PRODUCT</h4>
                <div className='Product-about-p' >
                <p>No further information currently available for mock product.</p>
                </div>  
                <p className='Product-about-p2'>de5382 042 |  shoe/site latest/releases | 4/15/23</p>
              </div>
              <div className='Product-Shipping-Container'>
                <div className='Product-shipping-header'>
                  <h4 style={{fontWeight: 500, fontSize: 14}}>SHIPPING & RETURNS</h4>
                </div>
                <p style={{fontWeight:500, fontSize: 12, fontFamily: "Helvetica Neue", marginTop: 14 }}>Cancellations</p>
                <div className='Product-cancellations'>
                  <p>You may cancel your order within 2 months of placing it. If 2 months have passed from when you placed the order you can return this item.</p>
                  <p style={{paddingTop: 12}}>If you checked out as a guest, you will need to create an account. This is a lie, you don't need to create an account because this is a demo website, however doing so will allow you to see the authentication, which on full display!</p>
                </div>
                <p style={{fontWeight:500, fontSize: 12, fontFamily: "Helvetica Neue", marginTop: 14 }}>Delivery</p>
                <div className='Product-delivery'>
                  <p>The only thing guaranteed is that the product will never make it to you. Delivery may be affected by weather-related delays, acts of god, or other events outside of our control such as an earth destorying cataclysm or alien invasion.</p>
                  <p style={{paddingTop: 12}}>Check out how nice and lovely this product looks!</p>
                  <p style={{paddingTop: 12}}>Only the finest material.</p>
                </div>
                <p style={{fontWeight:500, fontSize: 12, fontFamily: "Helvetica Neue", marginTop: 14 }}>Returns</p>
                <div className='Product-returns'>
                  <p>Thank you once again for taking the time to view the site, if you're reading this that means that you have an eye for detail and I sincerely appreciate that you would spend your time looking over my project. Thank you for your time.</p>
                  <p style={{paddingTop: 12, marginBottom: 15}}>Any questions about the site and how it was created please <a href='/about'>contact us</a> I will be happy to answer.</p>
                </div>
                <div className='Product-bottom'></div>
              </div>

           </div>
       </div>
        
         
        
        </div>
      </div>



      <footer className='footer'>
    <section className='logo-container'>
      <Logo />
    </section>
    <nav className='nav'>
    {FooterMain}
      <EmailBtn />
    </nav>
   <footer className='footer-secondary'>
    <SecondFooter />
      <h1 style={{fontSize: 20}}>Demo website created by Jullian Blanco</h1>
   </footer>
  </footer>
    </div>
  )
}

export default ProductScreen;

//The useState hook is a function that returns an array with two elements: the current state and a function that updates the state. You can then destructure this array to give names to the state and the function.

//In this case, the initial value of the sizes2 state variable is set to [sizes], which is an array containing the sizes property of the product. This is done because useState expects the initial state to be a single value, and the value must be the same type each time the component renders. By putting sizes inside an array, it becomes a single value of type array.

//If the initial value of sizes2 was set to just sizes, like this:

//Copy code
//const [sizes2, setSizes] = useState(sizes);
//then sizes2 would be set to an object with properties size and price. This would work fine as long as the value of sizes never changes, but if the value of sizes changed (for example, if the user selected a different size), then sizes2 would be set to a new object with different properties. This would cause a re-render of the component, which is not what we want.

//By wrapping sizes in an array, the value of sizes2 will always be an array, and the contents of the array may change, but the array itself will not be replaced with a new object. This means that the component will not re-render when the value of sizes changes, which is more efficient.

//I hope this helps to clarify things! Let me know if you have any more questions.

//In the code, sizes is an array of objects, each representing a size of the product with a size and price property.

//useState is a hook in React that allows a functional component to have state variables. It takes an initial value as an argument and returns an array with two elements: the current value of the state variable and a function to update it. In this case, the initial value of the state variable sizes2 is being set to the sizes array of the product.

//The reason the sizes array is wrapped in square brackets when it is passed as an argument to useState is because the hook expects the initial value to be a single element. If you don't wrap sizes in square brackets, it will be treated as multiple arguments, which will cause an error.

//For example, if you wrote const [sizes2, setSizes] = useState(sizes), it would be equivalent to writing const [sizes2, setSizes] = useState(sizes[0], sizes[1], sizes[2], ...), which would cause an error because useState only expects one argument. Wrapping sizes in square brackets allows you to pass the entire array as a single argument.

