import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginScreen.css';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import '../footer-secondary.css';
import SecondFooter from '../footer-secondary';

function LoginScreen() {


  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();


  const OnSubmitLogin = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        })
      });
      console.log('Response: ', response);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log('Data: ', data);

      if (!data.email) {
        throw new Error('Invalid Credentials');
      }
  
      if (response.ok) {
        navigate('/account', { state: { email: loginEmail } });
      }
    } catch (error) {
      console.error(error);
      setLoginError('Invalid Credentials');
    }
  };





return(
<div className='LoginScreen'>
<NavList /> 




<div className='main-account'>
<img className='main-img' src='https://images.unsplash.com/photo-1645888932334-5efcd35cf178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80' alt='background'/>
 <div className='main-box-container'>
      <div className='login-section'>
      <a href className='login-btn1'>Sign In</a>
      <Link to='/register' className='login-btn2' style={{ textDecoration: 'none'}}>
        Register
      </Link>
    </div>


<form className='form'  onSubmit={e => OnSubmitLogin(e)}>
    <div className="form-group">
     
     <input type="email" className="email" aria-describedby="emailHelp" placeholder="Email" onChange={e => setLoginEmail(e.target.value)}/> 
    </div>
    <div className="form-group">
      <input type="password" className="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)}/>
     </div>



    <div className='login-error'>
     {loginError}
    </div>
    

     <button type="submit" className="signin-btn">Sign in</button>
  
    
     
</form>

    
  
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

export default LoginScreen;