import { Link} from 'react-router-dom';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import SecondFooter from '../footer-secondary';
import './categories.css';
import { ExtraItems, NewReleases } from "../../data";
import { StaffPicks } from "../../data";
import { MusicInfluence } from "../../data";


const ProductData = [...NewReleases, ...StaffPicks, ...MusicInfluence, ...ExtraItems];

const ProductDataItems = ProductData.filter(item => item.category === 'women').map(item => {
   return {
     id: item.id,
     img: item.img,
     title: item.title,
     description: item.description
   }
 });

  const WomensProducts = ProductDataItems.map((ProductDataItems) =>
 <div key={ProductDataItems.id}>
  <Link to={`/sneakers/products/${ProductDataItems.id}`} style={{textDecoration: 'none'}}>  
     <div className='Product'> 
       <img className='product img' src={ProductDataItems.img} alt='product'/>
       <h1 className='Title'>{ProductDataItems.title}</h1>
       <p className='Description'>{ProductDataItems.description}</p>
     </div>
  </Link>    
 </div>);




function WomensScreen() {
    return (
      <div className='WomensScreen'>
      <NavList /> 

        <h1 className='sneakers-h1'>Womens</h1>

        <div id='sneakers2' className='products-container1'>
 {WomensProducts}
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
   );}
  
  export default WomensScreen;