import './footer-main.css';

function EmailBtn() {
    return(
        <div className='Email-Btn'>
            <h1>Sign Up For News and Information</h1>
            <p className='Email-title'>Email Address</p>
            <input type='email' className='email-input'></input>
            <p className='email-description'>Please read. This is only a decorative email input and is not functional, putting information here does nothing.</p>
        </div>
    )
}

export default EmailBtn;