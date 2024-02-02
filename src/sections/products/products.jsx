import logoImages from '../../components/logo-images/logoimages';
import terminalImages from '../../components/terminal-images/terminalimages';
import PriceTagProducts from '../../components/price-tag-products/pricetag-product';
import './products.css';
import { CustomToolT } from '../../components/tooltip/tooltip';

function Product() {

  const productsData = [
    { id: 1, name: 'myPOS Combo' },
    { id: 2, name: 'myPOS Mini Ice' },
    { id: 3, name: 'myPOS Smart N5' },
    { id: 4, name: 'myPOS Smart' },
    { id: 5, name: 'myPOS Mini' },
  ];
  const tooltData = [
    { heading: 'Combo', text: 'Android OS, Paper Printer' },
    { heading: 'Mini Ice', text: 'Android OS, Touch-screen display, Paper Printer' },
    { heading: 'Smart N5', text: 'Android OS, Touch-screen display, Paper Printer' },
    { heading: 'Smart', text: 'Android OS, Touch-screen display, Paper Printer' },
    { heading: 'Mini', text: 'Android OS, Paper Printer' },
  ];

  return (
    <section className="products">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 p-4 my-4">
            <h2>Payment Terminals</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn-style product-btn">
              shop now
            </a>
          </div>

          {productsData.map((product, index) => (
            <div key={product.id} className="col-md-4 product-item p-4 my-4">
              <a href="#">
                <CustomToolT heading={tooltData[index].heading} text={tooltData[index].text}>
                  <PriceTagProducts />
                  <img
                    src={terminalImages[product.id - 1]}
                    alt="Terminal Images"
                    className="img-fluid"
                  />
                </CustomToolT>
              </a>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>

        <div className="company-logos">
          {logoImages.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product
