import '../styles/global.css'
import NavBar from '../Components/Nav.js';
function Layout({children}){
    return(
        <>
        <NavBar/>
        {children}
        </>
    )
   
}
export default Layout;