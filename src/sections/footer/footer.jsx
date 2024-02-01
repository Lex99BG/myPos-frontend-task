import { Link } from 'react-router-dom';
import logo from '../../assets/logo-footer.png'
import './footer.css';

function Footer() {

  return (
    <footer className="bg-dark text-white text-center p-2 pb-4">
        <div className="container">
          <img src={logo} alt="" className="img-fluid logo" />
          <p>
            *The transaction fee is displayed for indicative purposes and may
            vary depending on your business activity, geographical location and
            other factors. Please get in touch with us to get a tailor-made
            offer for your business needs.
          </p>
          <ul className="footer-list-style">
            <li><a href="#">Legal</a></li>
            <li><a href="#">Coockie Policy</a></li>
          </ul>
          <hr className="footer-hr" />
          <p>
            © 2014-2018, myPOS World Ltd., London, United Kingdom and its
            affiliates. myPOS Shop is operated by myPOS Services Ltd, processing
            on-line orders, distribution, replacement and return of myPOS
            packages, <span className="footer-span">sales@mypos.com</span>
          </p>
          <p>
            All e-money and payment services for customers from Bulgaria are
            provided by myPOS AD, Company Registration number: 205050564, in its
            capacity of agent of iCard AD registered in the Bulgarian National
            Bank. iCard AD, with registered address: blvd. 76A James Boucher,
            Sofia 1407, Bulgaria, Company registration number: 175325806, is
            licensed and regulated by the Bulgarian National Bank as an e-money
            institution under the Directive 2009/110/EO for electronic money
            with license number 4703-5081/25.07.2011, SWIFT/BIC code: INTFSFBG,
            <span className="footer-span">help.bg@mypos.com</span>
          </p>
        </div>
      </footer>
  )
}

export default Footer
