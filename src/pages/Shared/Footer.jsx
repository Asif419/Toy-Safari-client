import logo from '../../assets/picture/logo.png'

const Footer = () => {
  return (
    <footer className="container mx-auto text-white footer p-10">
      <div className='flex flex-col lg:place-items-center'>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className='flex flex-col lg:place-items-center'>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className='flex flex-col lg:place-items-center'>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div className='flex flex-col place-items-center'>
        <img className='h-24 w-24 rounded-full' src={logo} alt="" />
        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
      </div>
    </footer>
  );
};

export default Footer;