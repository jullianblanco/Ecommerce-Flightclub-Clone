import './AboutScreen.css';
import { Link} from 'react-router-dom';
import { useEffect } from 'react';
import InputBtn from '../input1';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import SecondFooter from '../footer-secondary';


function AboutScreen() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    return (
    <section className="AboutScreen" id="about-1">

  
           <NavList /> 


     

            <section className="skills">

        <h1 style={{paddingTop:30}}>Skills and technologies this website was created with</h1>
        <p className='aboutscreen-description'>Welcome to my ecommerce project, created using the PERN stack. I took great care to create a site with add-to-cart functionality, authentication, and responsive design, among other features. This site is heavily based on Flightclub, as I did my best to recreate it in order to improve my skills as a developer. Please note that it is not a place to purchase real products, but simply a mock site. View my developer site at <a href='https://www.marseywebdev.com'>marseywebdev</a></p>

    <div className='skills-container'>
        <div className='skills-main'>
            <p className='skills-title'>React</p>
            <p className='skills-text'>
            During development, it felt like most of the work on this site was related to the frontend. HTML, CSS, and JavaScript were the main technologies I used for the frontend, with ReactJS being the framework/library of choice. The main feature of the site was the "add to cart" functionality, which allows users to select a product on the home screen and be navigated to another screen where they can choose the specific shoe size they want. The price would update to reflect this. To achieve this, I created a data file containing an array of objects with information about each product, and then used the map method to display the information on the screen. I utilized both the find and filter methods to locate the product selected by the user based on its ID, and to categorize the products into men's, women's, and children's sections using the filter method.
            </p>
        </div>

        <div className='skills-main'>
            <p className='skills-title'>Postgres</p>
            <p className='skills-text'>
            I used the pg-promise promise library to connect my personal database located on my computer to this application. The database consists of a table which is used to store account information and handle authentication for the sign-up and log-in process. Initially, I created other tables that would replace the data file and be responsible for storing product information so I could connect users to the products they would buy and then have information for order history, among other things. However, I scrapped the idea in order to become more time-efficient with the project. There were a good amount of other things I wanted to add, such as currency conversion, but I thought it would be a better decision to publish a fully functioning application and then add on things like these over time.
            </p>
        </div>

        <div className='skills-main'>
            <p className='skills-title'>Express</p>
            <p className='skills-text'>
            The primary use of Express in this project is for authentication. I used two POST requests to grant users the ability to log into and create accounts by sending a request to those endpoints. I also created a  PUT request which is used to grant the user the ability to update their email address, which changes their email in the database.
            </p>
        </div>

        <div className='skills-main'>
            <p className='skills-title'>Node JS</p>
            <p className='skills-text'>
            In this project, I used Node.js to handle things on the server-side, such as connecting to my database, and handling requests. Also to create a server that listens for incoming requests, and then uses the Express framework to handle those requests and respond appropriately.
            </p>
        </div>

    </div>

        
    </section>
        

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


    </section>
    )


}

export default AboutScreen;