import '../styles/global.css'
function Btn(props){
    let bgImg={
        backgroundImage:`url(${props.url})`
    }
        return(
            <button style={bgImg} className='s-sq btn clearBg sm-bgImg ctr-bg'></button>
        )
}
export default Btn