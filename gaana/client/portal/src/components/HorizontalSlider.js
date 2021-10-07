import "./HorizontalSlider.css"
const HorizontalSlider = ({item,title, onItemSelect}) => {
    const url = 'http://localhost:4000'
    return(
   <div className="slider-container">
       <div className="title">{title}</div>
       
        {    item.map((item)=>{
                return(
                <div className="item-container" onClick={()=>{
                    onItemSelect(item)
                }}>
                        
                <img src={url + '/' + item.thumbnail} className="image" />
                <div className="item-title">{item.title}</div>
                </div>)
            })
       }
        
   </div>
   
    )
    
    }
    
    export default  HorizontalSlider