//import resources
import '../styles/global.css'
import Layout from '../componentss/Layout'
import Card from '../componentss/Card'
import CartItem from '../componentss/Cart-item'
//Define Cart Page
function Cart(){
    return(
        <Layout>
        <Card stack='col'>
            <div>
                <h3 className='ctr-txt'>Cart</h3>
            </div>
            <Card stack='col'>
                <CartItem name='Cookie Jar' price='$4.99'/>
                <CartItem name='Cookie Dough' price='$2.89'/>
                <CartItem name='Cake Mixer' price='$74.99'/>
                <CartItem name='Baking Equipments' price='$10.49'/>
                <CartItem name='Cookie Oven' price='$4.99'/>
            </Card>
           <Card stack='col'>
            {/* Checkout button */}
               <button className='Checkout'>Checkout</button>
           </Card>
        </Card>
    </Layout>
    )
    
}
export default Cart