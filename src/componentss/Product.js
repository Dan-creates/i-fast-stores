import '../styles/global.css'
import '../styles/category.css'
import '../styles/products.css'
import like from '../images/heart.png'
import liked from '../images/heart (1).png'
import Btn from './Buttons.js'
function Product(props){
    return(
        <div className='Product-card fl col'>
            <div className='Product-img-container fl row'>
                <img src={props.url} className='Product-img'/>
            </div>
            <div className='Product-details-container fl col'>
                <h5 className='Product-name'>{props.name}</h5>
                <div className='Ratings fl row'>
                    <div className='Stars-container'></div>
                    <span className='Reviews'>100+</span>
                </div>
               <div className='Brief-Description'>
                <span className='Description'>Brief Product Description</span>
               </div>
               <div className='Price-container fl col'>
                <h4 className='Price'>{props.price}</h4>
                <span className='Discount text'></span>
               </div>
            </div>
            <div className='Product-action-container fl row'>
                <input type='number' placeholder='1' value={1} className='Quantity'/>
                <button className='btn add-cart txt-rec'>Add to Cart</button>
                <Btn url={like}/>
            </div>
        </div>
    )
}
export default Product