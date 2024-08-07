import '../styles/global.css'
import NavBar from './Nav.js';
function Layout({children}){
    return(
        <>
        <><NavBar/></>
        <>{children}</>
        </>
    )
   
}
export default Layout;