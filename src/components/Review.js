//Import required resources
import '../styles/global.css'
import Card from './Card'
import Btn from './Buttons'
import Dummy from './Dummy'
import user from '../images/user.png'
//Define the user review component
function Review(props){
    let titles=["Amazing!!", "Loved It!!", "Definately Worth It", "Overrated", "Don\'t Buy It"]
    let random=(Math.floor(Math.random()*titles.length));
    let userTitle=(random<=titles.length)?titles[random]:titles[0];
    return(
        <Card stack='col' className='card b-sh'>

            <Card stack='row'>
                <div><Btn url={user}/></div>

                <Card stack='col'>
                    <h4>{props.name}</h4>
                    <p>{props.stars}</p>
                </Card>
                
            </Card>

            <Card stack='col'>
                <h3>{userTitle}</h3>
                <Dummy/>
            </Card>

            <Card stack='row' className='spRow'>
                <Btn text='like'/>
                <Btn text='dislike'/>
            </Card>
        </Card>
    )
}