import logoImages from '../../components/logo-images/logoimages';
import terminalImages from '../../components/terminal-images/terminalimages';
import PriceTagProducts from '../../components/price-tag-products/pricetag-product';
import './products.css';

function Product() {

  const productsData = [
    { id: 1, name: 'myPOS Combo' },
    { id: 2, name: 'myPOS Mini Ice' },
    { id: 3, name: 'myPOS Smart N5' },
    { id: 4, name: 'myPOS Smart' },
    { id: 5, name: 'myPOS Mini' },
  ];

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  return (
    <section className="products">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <h2>Payment Terminals</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn-style product-btn">
              shop now
            </a>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
            Tooltip on top
          </button>
          </div>

          {productsData.map((product) => (
            <div key={product.id} className="col-md-4 product-item p-4">
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-original-title="Tooltip on top"
              >
                <PriceTagProducts />
                <img
                  src={terminalImages[product.id - 1]}
                  alt=""
                  className="img-fluid"
                />
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
