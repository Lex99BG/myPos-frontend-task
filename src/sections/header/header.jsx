import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import introTerminal from '../../assets/terminal-intro.png'
import './header.css'
import PriceTagHeader from '../../components/price-tag-header/pricetag-header'

function Header() {

  return (
    <div className="header-div">
        <header>
          <div className="container">
            <img
              src={logo}
              alt="Logo Header"
              className="img-fuild logo"
            />
            <div className="header-text">
              <h1>Say “YES” to every payment</h1>
              <p>No commitment. No monthly fees.</p>
            </div>
            <a href="#" className="btn-style">learn more</a>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,186.7C640,213,800,235,960,224C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </header>

        <section className="product-intro">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 col-lg-6">
                <ul className="list-style">
                  <li>0.00 EUR monthly fee</li>
                  <li>1.75% transaction fee *</li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-6 terminal-img">
                <img
                  src={introTerminal}
                  alt="Intro Terminal"
                  className="img-fluid"
                />
                <PriceTagHeader/>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Header
