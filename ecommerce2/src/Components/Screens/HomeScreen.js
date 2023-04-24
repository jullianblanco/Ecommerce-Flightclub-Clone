import React from 'react'
import '../header1.css';
import Logo from '../logo';
import NavList from '../nav';
import '../main.css';
import Button from '../Button';
import '../products-container2.css';
import '../footer.css';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import '../footer-secondary.css';
import SecondFooter from '../footer-secondary';
import { NewReleasesProducts, StaffPicksProducts, MusicInfluenceProducts } from '../productList';
import CatagoriesSection from '../Product2';
import InfoSection from '../info';




function HomeScreen() {

  return (
    <div className='App'>
     <NavList /> 
    <div className='main'>
     <img src='https://wallpaperaccess.com/full/680084.jpg' alt='shoe'/>
     <div className='container'>
       <h1 className='main-text'>A DIFFERENT KIND<br></br>OF SHOE FASHION</h1>
       <a className='main-link' href='/about'>Flight Club clone created by Jullian Blanco.</a>
       </div> 
     </div>
     <h1 style={{ fontFamily: 'Open Sans', textAlign: 'center', padding: 30, marginTop: 40}}>NEW RELEASES</h1>
     <div className='products-container1'> 
   {NewReleasesProducts}
   </div>

   <div className='btn-container'>
       <a href='/sneakers'>
        <Button className='Btn' value='SHOP ALL RELEASES' />
       </a>
    </div>
   <h1 style={{ fontFamily: 'Open Sans', textAlign: 'center', padding: 30, marginTop: 40}}>STAFF PICKS</h1>
   <div className='products-container1'> 
   {StaffPicksProducts}
   </div>
   <div className='btn-container'>
       <a href='/sneakers'>
        <Button className='Btn' value='SHOP ALL RELEASES' />
       </a>
    </div>
   <h1 style={{ fontFamily: 'Open Sans', textAlign: 'center', padding: 30, marginTop: 40}}>MUSIC INFLUENCE</h1>
   <div className='products-container1'>  
   {MusicInfluenceProducts}
   </div>
   <div className='btn-container'>
       <a href='/sneakers'>
        <Button className='Btn' value='SHOP ALL RELEASES' />
       </a>
    </div>
    <div className='products-container2-container' style={{backgroundColor: 'white'}}>
    <div className='products-container2'>
      {CatagoriesSection}
    </div>
   </div>
   <div className='super-container'>
  <div className='info-container'>
     {InfoSection}
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
     <h1 style={{fontSize: 14, marginRight: 20}}>Demo website created by Jullian Blanco</h1>
  </footer>
 </footer>
    </div>
  )

  
}




export default HomeScreen