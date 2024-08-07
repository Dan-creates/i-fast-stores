import '../styles/global.css'
import Test_img from '../images/category.jpg'
import Card from './Card'
import Btn from './Buttons'
function CartItem({name,price}){
    return (
    <Card stack='row' className='card spRow'>
        <Card stack='row'>
          <div className='m-sq'>
            <img src={Test_img} alt='' className='m-sq'/>
          </div>
          <Card stack='col'>
            <h4>{name}</h4>
            <h4>{price}</h4>
          </Card>
        </Card>
        
        <Card stack='row' className='rigid vCtr evRow'>
            <Btn custom text='-' className='def-sq'/>
            <input type='number' placeholder='1' value={1} className='def-sq ctr-txt'/>
            <Btn custom text='+' className='def-sq'/>
        </Card>
    </Card>
    )
}
export default CartItem