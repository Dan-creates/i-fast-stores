import '../styles/global.css'
import Test_img from '../images/category.jpg'
import Card from './Card'
import Btn from './Buttons'
function CartItem({name,price}){
    return (
    <Card stack='row'>
        <div className='m-sq'>
            <img  src={Test_img} alt=''/>
        </div>
        <Card stack='col'>
            <h4>{name}</h4>
            <h4>{price}</h4>
        </Card>
        <Card stack='row'>
            <Btn custom text='-' className='s-sq'/>
            <input type='number' placeholder='1' value={1} className='s-sq'/>
            <Btn custom text='+' className='s-sq'/>
        </Card>
    </Card>
    )
}
export default CartItem