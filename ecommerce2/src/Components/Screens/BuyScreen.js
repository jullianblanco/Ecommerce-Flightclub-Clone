import { useEffect} from 'react';
import './BuyScreen.css';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import SecondFooter from '../footer-secondary';

const BuyScreen = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='buyscreen'>
        <NavList /> 

        <div className='buyscreen-main-container'>
            <div className='buyscreen-main'>
             <h1>Unfortunely this is not a real website, it is a mock demo website to showcase my current level of coding skills, so you can not purchase real products on this website.</h1>
             <p>Though because of the nature of this site I could not implement payment processing, I hope that the add to cart functionality was enough to show that I could build something close to an Ecommerce website. Thank you for viewing and I especially thank you for your time. -Sincerely Jullian Blanco.</p>
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
  );
};

export default BuyScreen;
