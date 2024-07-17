//Contains the category cards
import '../styles/global.css'
import '../styles/category.css'
function Category({title,children}){
    return(
        <div className="Category-parent fl col">
           <h3 className='Category-title'>{title}</h3>
           <div className='Cards-container fl row'>{children}</div>
        </div>
    )
}
function Categorycard(props){
    return(
        <div className='Category-wrapper fl col'>
        <div className='Category-img-container'>
            <img src={props.src} className='Category-img'/>
        </div>
        <div className='Category-name'>
            <h4 className='Category-label'>{props.name}</h4>
        </div>
        </div>
    )
}
export {Category, Categorycard}