/**
 * @returns A fully functional navigation bar component.
 */
import '../styles/global.css'
import Btn from './Buttons.js';
function NavBar(){
    return(
        <div id="NavBar" className='fl col'>
            <div id="NavFunc" className='fl row spRow'>
            <div id="Logo-container" className=''>
                <img src='../images/logo192.png' className='m-sq'/>
            </div>
            <div id="Common-func">
                <div id='wrapper' className='fl row '>
                <Btn />
                <Btn />
                <Btn />
                </div>
            </div>
            </div>
            <div id="Search-Container">

            </div>
        </div>
    );
}
export default NavBar;