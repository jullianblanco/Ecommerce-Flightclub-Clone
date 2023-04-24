import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CartScreen.css';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import SecondFooter from '../footer-secondary';

const CartScreen = () => {

  const location = useLocation();
  const { cart, selectedSize, price } = location.state;

  const navigate = useNavigate();

 function SendToBuy() {
  navigate('/buyscreen');
 }

 useEffect(() => {
  window.scrollTo(0, 0);
}, []);
 



  return (
    <div className='CartScreen'>
       <NavList /> 
      <div className='cart-container'>
       <h2>Your Cart</h2>
        {cart.map(item => (
          <div className='cart' key={item.id}>
            <div className='cart-title'>
             <h3>{item.description}</h3>
             <h4>{item.title}</h4>
             <img className='cart-img' src ={item.img} alt='product'/>
            </div>
           
            <div className='cart-description'>
              <p>Size: {selectedSize}</p>
              <p>Total: ${price}</p>
              <button onClick={SendToBuy}>BUY NOW</button>
            </div>

          </div>
        ))}
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
      <h1 style={{fontSize: 14, marginRight: 20}}>Demo website created by Jullian Blanco</h1>
   </footer>
  </footer>
  
    </div>
  );
};

export default CartScreen;
