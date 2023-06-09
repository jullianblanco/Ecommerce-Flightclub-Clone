import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './EditAccountScreen.css';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import '../footer-secondary.css';
import SecondFooter from '../footer-secondary';

function EditAccount() {

    const location = useLocation();
    //const email = location.state?.email;
    const [email, setEmail] = useState(location.state?.email || '');
    const firstName = location.state?.firstName;
    const lastName = location.state?.lastName;


   
    const navigate = useNavigate();
    

const handleSubmit = async (e) => {
    e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/account/updateinformation', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
              //body: JSON.stringify({ email: newEmail, oldEmail: email }),
              body: JSON.stringify({ email, oldEmail: location.state?.email, }),
            });
            const data = await response.json();
            console.log(data);
            navigate('/account', { state: { firstName, lastName, email } });

        } catch (error) {
           console.error(error);
        }
}

useEffect(() => {
  window.scrollTo(0, 0);
}, []);



    return (

    <div className='EditAccountScreen'>
    <NavList /> 
   
    <div className='edit-account-main'>




    <div className="edit-account-main-box">
    <h1 style={{ marginTop: 0, fontFamily: 'Open Sans', color: 'black' }}>Edit Account Information</h1>

   

    <p style={{ marginBottom: 90, fontSize: 14 }}>{firstName} {lastName}</p>
    

    
          
          <h4>Email Address</h4>
      
        <input className='email-edit' type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />


        <div className='edit-save-cancel-btns'>
        <button className='update-edit-btn' type="submit" onClick={e => handleSubmit(e)}>Update</button>
        <button className='cancel-edit-btn' onClick={() => navigate('/account', { state: { firstName, lastName, email } })}>Cancel</button>
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

export default EditAccount;