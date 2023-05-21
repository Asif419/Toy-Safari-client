import logo from '../../assets/picture/logo.png'

const Footer = () => {
  return (
    <footer className="container mx-auto text-white footer p-10">
      <div className='flex flex-col lg:place-items-center'>
        <span className="footer-title">Make Money With Us</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Sell Products</a>
        <a className="link link-hover">Affiliate</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className='flex flex-col lg:place-items-center'>
        <span className="footer-title">Get To Know US</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Investor Relations</a>
        <a className="link link-hover">Blog</a>
      </div>
      <div className='flex flex-col lg:place-items-center'>
        <span className="footer-title">Legal Policies</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div className='flex flex-col lg:place-items-center'>
        <span className="footer-title">Let Us Help You</span>
        <a className="link link-hover">Your Account</a>
        <a className="link link-hover">Your Orders</a>
        <a className="link link-hover">Shipping</a>
        <a className="link link-hover">Toy-Safari Assistant</a>
      </div>
      <div className='flex flex-col place-items-center'>
        <img className='h-24 w-24 rounded-full' src={logo} alt="" />
        <p>
          <span className='text-2xl font-bold'>Toy Safari</span>
          <br />Providing reliable toys from 2023</p>
      </div>
    </footer>
  );
};

export default Footer;