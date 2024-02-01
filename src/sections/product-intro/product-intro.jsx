import img1 from '../../assets/product-intro.webp'
import './product-intro.css'
function ProductIntro() {

  return (
    <section className="product-intro container">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
                <ul className='product-list'>
                    <li>Lorem, ipsum.</li>
                    <li>Ratione, libero.</li>
                </ul>
            </div>
            <div className="col-md-4 product-img-div">
                <img src={img1} alt="Product Intro Img" className='product-img img-fluid'/>
            </div>
        </div>
    </section>
  )
}

export default ProductIntro
