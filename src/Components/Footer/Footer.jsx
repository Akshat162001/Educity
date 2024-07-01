import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' style={{ textAlign: 'center', justifyContent: 'center' }}>
      <p>© All rights reserved.</p>
      <ul>
        <li>Terms of Service</li>  
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}

export default Footer;
