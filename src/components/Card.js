import '../styles/global.css'
//The card component will return different types of card (Horizontal/ Vertical)
function Card({props,stack,children,className}){
    let combinedClasses;
    if(props.stack==="column"){
        stack='fl col'
        combinedClasses=`${stack} ${className}`
        return(
            <div className={combinedClasses}>
                {children}
            </div>
        )
    }
    else{
        if(props.stack==="row"){
            stack='fl row'
            combinedClasses=`${stack} ${className}`
            return(
                <div className={combinedClasses}>
                    {children}
                </div>
            )
        }
    }
}
export default Card;