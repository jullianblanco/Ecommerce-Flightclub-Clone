import './footer-main.css';
import { FooterMainColumn } from '../data';



 const FooterMain = FooterMainColumn.map((FooterMainColumn, index) => 
        <div key={FooterMainColumn.name + index} className='footer-container'>
           <section className='footer-main'>
               <h6 className='footer-h6'>{FooterMainColumn.Title}</h6>
               <ul className='ul-container'>
                   <li> <a href={FooterMainColumn.Link1}>{FooterMainColumn.LinkTitle1}</a></li>
                   <li> <a href={FooterMainColumn.Link2}>{FooterMainColumn.LinkTitle2}</a></li>
                   <li> <a href={FooterMainColumn.Link3}>{FooterMainColumn.LinkTitle3}</a></li>
                   <li> <a href={FooterMainColumn.Link4}>{FooterMainColumn.LinkTitle4}</a></li>
                   <li> <a href={FooterMainColumn.Link5}>{FooterMainColumn.LinkTitle5}</a></li>
                   <li> <a href={FooterMainColumn.Link6}>{FooterMainColumn.LinkTitle6}</a></li>
               </ul>
             </section>
        </div> 
)


export default FooterMain;