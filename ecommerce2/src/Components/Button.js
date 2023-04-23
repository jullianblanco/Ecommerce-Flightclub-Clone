import './Button.css'

const Button = (props) => {
   
    return(
        <div>
             <button className={props.className} type= 'button'>{props.value}</button>
        
        </div>
       
    )
}

export default Button