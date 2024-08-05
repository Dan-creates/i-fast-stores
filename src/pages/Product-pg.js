import '../styles/global.css'
import Layout from '../Components/Layout'
import Card from '../Components/Card'
import Test_img from '../images/category.jpg'
import like from '../images/heart.png'
import Btn from '../Components/Buttons'
import Dummy from '../Components/Dummy'
import Review from '../Components/Review'
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