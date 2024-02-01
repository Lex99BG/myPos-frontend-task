import Header from '../../sections/header/header'
import Footer from '../../sections/footer/footer'
import './landing.css'
import PaymentInfo from '../../sections/payment-info/payment-info'
import Product from '../../sections/products/products'


function LandingPage() {

  return (
    <div className="landing">
      <Header/>
      <PaymentInfo/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default LandingPage
