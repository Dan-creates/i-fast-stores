/**
 * @returns A fully functional navigation bar component.
 */
import '../styles/global.css'
import Btn from './Buttons.js';
import user from '../images/user.png'
import cart from '../images/shopping-cart.png'
import menu from '../images/menu.png'
import logo from '../images/logo192.png'
function NavBar(){
    return(
        <div id="NavBar" className='fl col'>
            <div id="NavFunc" className='fl row spRow'>
              <div id="Logo-container" className=''>
                <img src={logo} className='s-sq'/>
              </div>
            <div id="Common-actions" className='fl row vCtr'>
                <div id='wrapper' className='fl row '>
                <Btn url={user}/>
                <Btn url={cart}/>
                <Btn url={menu}/>
                </div>
            </div>
            </div>

            <div id="Search-Container" className='fl row cenRow vCtr'>
                <input type='text' id='Search' placeholder='Search Store...' className='searchImg'/>
            </div>
        </div>
    );
}
export default NavBar;