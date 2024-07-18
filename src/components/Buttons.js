import '../styles/global.css'
function Btn(props){
    if(props.url){
        let bgImg={
            backgroundImage:`url(${props.url})`
        }
            return(
                <button style={bgImg} className='s-sq btn clearBg sm-bgImg ctr-bg'></button>
            )
    }
    else if(props.text){
        return(
            <button className='btn txt-rec n-wrap'>{props.text}</button>
        )
    }
   
}
export default Btn