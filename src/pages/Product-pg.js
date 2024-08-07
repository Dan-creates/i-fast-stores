import '../styles/global.css'
import Test_img from '../images/category.jpg'
import like from '../images/heart.png'
import Layout from '../componentss/Layout'
import Card from '../componentss/Card'
import Btn from '../componentss/Buttons'
import Dummy from '../componentss/Dummy'
import Review from '../componentss/Review'
function ProductPage(){
    return (
        <Layout>
        <Card stack='col' className='vCtr'>
            <Card stack='col'>

              <Card stack='row' className='spRow'>
                <div> 
                    <h3>Cookie Jar</h3> 
                </div>
                <div>
                    <h3>Rating (4.2)</h3>
                </div>
              </Card>
                <div>
                    <img src={Test_img} alt=''></img>
                </div>
                <div className='fl col'>
                    <h2>$49.99</h2>
                    <div className='fl row spRow'>
                        <Btn custom text='Add To Cart'/>
                        <Btn custom text='Buy Now'/>
                        <Btn url={like}/>
                    </div>
                </div>

                <Card stack='col'>
                <h4>Product Properties</h4>
                <div className='fl row spRow'>
                    <Btn text='Small'/>
                    <Btn text='Medium'/>
                    <Btn text='Large'/>
                    <Btn text='X-Large'/>
                    <Btn text='XX-Large'/>
                </div>
            </Card>
            </Card>
            <Card stack='col' className='card'>
                <h3>Description</h3>
                <p className='p-desc'>
                    <Dummy/>
                </p>
            </Card>
            <Card stack='row' className='no-wrap'>
                <Review stars={4}/>
                <Review stars={3}/>
                <Review stars={5}/>
                <Review stars={2}/>
            </Card>
        </Card>
    </Layout>
    )
}
export default ProductPage