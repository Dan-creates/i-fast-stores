/**
 * @returns A fully functional navigation bar.
 */
import '../styles/global.css'
function NavBar(){
    return(
        <div id="NavBar" className='fl col'>
            <div id="NavFunc" className='fl row spRow'>
            <div id="Logo-container"></div>
            <div id="Common-func"></div>
            </div>
            <div id="Search-Container">

            </div>
        </div>
    );
}
export default NavBar;