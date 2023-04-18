import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './AccountScreen.css';
import InputBtn from '../input1';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import '../footer-secondary.css';
import SecondFooter from '../footer-secondary';
import editIcon from '../../images/editIcon.png';

function AccountScreen() {

  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });


    const location = useLocation();
    const email = location.state?.email || user.email;
    const firstName = location.state?.firstName || user.firstName;
    const lastName = location.state?.lastName || user.lastName;
    const navigate = useNavigate();

    function redirectToEdit() {
      navigate('/account/updateinformation', { state: { firstName, lastName, email } });
    }


    function handleUpdate(newUser) {
      setUser(newUser);
    }

    function handleLogout() {
      setUser(user);
      navigate('/');
    }


    



    return(
    <div className='AccountScreen'>
    <NavList /> 
   
    <div className='account-main'>
   
     <div className='account-main-box'>

      <div className='account-header'>
        <h1 style={{fontFamily: 'Open Sans', color: 'black'}}>My Account</h1>
        <img className='edit-btn' src={editIcon} alt="Edit Icon" onClick={redirectToEdit} />
        <button className='user-account-logout' onClick={handleLogout}>Log out</button>
      </div>
      <div className='all-account-info'>

        <div className='account-info'>       
          <h1 style={{marginBottom: 10, fontFamily: 'Open Sans', color: 'black'}}>Account Information</h1>
            <p style={{marginBottom: 10, fontSize: 14, textTransform: 'capitalize'}} >{firstName} {lastName}</p>
            <p style={{fontSize: 14}}>{email}</p>
        </div>

        <div className='order-info'>
        <h1 style={{marginBottom: 10, fontFamily: 'Open Sans', color: 'black'}}>Order History</h1> 
        <p style={{marginBottom: 10, fontSize: 14}}>You haven't placed any orders yet.</p>
        </div>
        
     <div className='address-info'>   
       <h1 style={{marginBottom: 10, fontFamily: 'Open Sans', color: 'black'}}>Address</h1>
            <p style={{fontSize: 14}} >No address on file.</p>  
        </div>


        <div className='payment-info'>
           <h1 style={{marginBottom: 10, fontFamily: 'Open Sans', color: 'black'}}>Payment Method</h1>
            <p style={{fontSize: 14}}>No payment method on file.</p>  
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
   
    </div>)
}

export default AccountScreen;