import { useEffect } from 'react';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import SecondFooter from '../footer-secondary';
import './categories.css';
import { NewReleasesProducts, StaffPicksProducts, MusicInfluenceProducts, ExtraItemsProducts } from '../productList';





function SneakersScreen() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
  <div className="SneakersScreen">
  <NavList /> 

        <h1 className='sneakers-h1'>All Sneakers</h1>


    <div id='sneakers' className='products-container1'>  
      {NewReleasesProducts}
    </div>

    <div id='sneakers' className='products-container1'>  
      {StaffPicksProducts}
    </div>

    <div id='sneakers' className='products-container1'>  
      {MusicInfluenceProducts}
    </div>

    <div id='sneakers2'  className='products-container1'>  
      {ExtraItemsProducts}
    </div>


    <footer className='footer'>
    <section className='logo-container'>
      <Logo />
    </section>
    <nav className='nav'>
      <div className='footer-main-container'>{FooterMain}</div>
    
      <EmailBtn />
    </nav>
   <footer className='footer-secondary'>
    <SecondFooter />
      <h1 style={{fontSize: 14, marginRight: 20}}>Demo website created by Jullian Blanco</h1>
   </footer>
  </footer>
  </div>
  
   );}

   
  
  export default SneakersScreen;