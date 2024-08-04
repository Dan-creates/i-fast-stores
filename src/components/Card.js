import '../styles/global.css'
//The card component will return different types of card (Horizontal/ Vertical)
function Card({props,stack,children,className}){
    let combinedClasses;
    let stack_row;
    let stack_col;
    if(stack==="column"){
        stack_col='fl col'
        combinedClasses=`${stack_col} ${className}`
        return(
            <div className={combinedClasses}>
                {children}
            </div>
        )
    }
    else{
        if(stack==="row"){
            stack_row='fl row'
            combinedClasses=`${stack_row} ${className}`
            return(
                <div className={combinedClasses}>
                    {children}
                </div>
            )
        }
    }
}
export default Card;