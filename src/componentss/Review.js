//Import required resources
import '../styles/global.css'
import Card from './Card'
import Btn from './Buttons'
import Dummy from './Dummy'
import user from '../images/user.png'
import select from '../scripts/rand-select'
//Define the user review component
function Review(props){
    let titles=["Amazing!!", "Loved It!!", "Definitely Worth It", "Just Awesome!", "Overrated"]
    let f_names="Jane John Mary Peter Liam Harry Linda Natasha Ali Wallace Billy Wendy Ben"
    let surnames="Doe Potter Payne Butcher Campbell Sia Isaq Natalie Wright Bill Muna Luck"
    let ran_title=select(titles);
    let ran_name=`${select(f_names.split(' '))} ${select(surnames.split(' '))}`
    let userTitle=ran_title;
    return(
        <Card stack='col' className='review'>

            <Card stack='row'>
                <div><Btn url={user}/></div>

                <Card stack='col'>
                    <h4>{ran_name}</h4>
                    <h4>
                       Rating({props.stars})
                    </h4>
                </Card>

            </Card>

            <Card stack='col'>
                <h3>{userTitle}</h3>
                <Dummy/>
            </Card>

            <Card stack='row' className='spRow'>
                <Btn text='Like'/>
                <Btn text='Dislike'/>
            </Card>
        </Card>
    )
}
export default Review