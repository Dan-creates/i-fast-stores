import '../styles/global.css'
function Btn(props,{className}){
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
    else if(props.custom){
        let butn='btn n-wrap txt-rec'
        let combo=`${butn} ${className}`
        return(
            <button className={combo}>{props.text}</button>
        )
    }
   
}
export default Btn