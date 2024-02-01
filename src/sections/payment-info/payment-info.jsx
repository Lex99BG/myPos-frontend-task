import img1 from '../../assets/buisnes-account-vector.png'
import img2 from '../../assets/debit-card-vector.png'
import img3 from '../../assets/money-vector.png'
import img4 from '../../assets/data-vector.png'
import img5 from '../../assets/dashboard-vector.png'
import img6 from '../../assets/contact-vector.png'
import './payment-info.css'

function PaymentInfo() {

  return (
    <section className="payment-info">
          <div className="container">
            <h2 className="text-center">
              With every myPOS payment terminal you get:
            </h2>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <div
                  className="d-flex flex-column justify-content-center align-items-center gap-3"
                >
                  <div
                    className="col-md-12 d-flex gap-3 align-items-center"
                  >
                    <img
                      src={img1}
                      alt="Buisness Account"
                      className="item-img"
                    />
                    <div>
                      <h3>Business account with IBAN</h3>
                      <p className='fw-bold'>0 EUR/month</p>
                    </div>
                  </div>
                  <div
                    className="col-md-12 d-flex gap-3 align-items-center"
                  >
                    <img
                      src={img2}
                      alt="Buisness Account"
                      className="item-img"
                    />
                    <div>
                      <h3>Visa debit card</h3>
                      <p className='fw-bold'>0 EUR/month</p>
                    </div>
                  </div>
                  <div
                    className="col-md-12 d-flex gap-3 align-items-center"
                  >
                    <img
                      src={img3}
                      alt="Buisness Account"
                      className="item-img"
                    />
                    <div>
                      <h3>Money in your account</h3>
                      <p className='fw-bold'>0 EUR/month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="d-flex flex-column justify-content-center align-items-center gap-3"
                >
                  <div
                    className="col-md-12 d-flex gap-3 align-items-center"
                  >
                    <img
                      src={img4}
                      alt="Buisness Account"
                      className="item-img"
                    />
                    <div>
                      <h3>Data connectivity</h3>
                      <p className='fw-bold'>0 EUR/month</p>
                    </div>
                  </div>
                  <div
                    className="col-md-12 d-flex gap-3 align-items-center"
                  >
                    <img
                      src={img5}
                      alt="Buisness Account"
                      className="item-img"
                    />
                    <div>
                      <h3>Dashboard and reporting</h3>
                      <p className='fw-bold'>0 EUR/month</p>
                    </div>
                  </div>
                  <div
                    className="col-md-12 d-flex gap-3 align-items-center"
                  >
                    <img
                      src={img6}
                      alt="Buisness Account"
                      className="item-img"
                    />
                    <div>
                      <h3>Phone, email & chat support</h3>
                      <p className='fw-bold'>0 EUR/month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default PaymentInfo
