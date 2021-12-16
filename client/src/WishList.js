import { Link } from "@reach/router";

function WishList(props){
    console.log("Wishlist Props: ", props )
    let data = props.data
    return(
        <>
        {props.children}
            {
                
                data.length === 0 ? (<p>Loading...</p>) :
                (
                <>
                    
             
                    <div className="wishlist">
                    <h2>My wish list:</h2>
                    <ol>
                        {data.map((item)=>{
                            return(
                             <div className="wishItem" key={item._id}>
                                  <li><Link  to={`/wish/${item._id}`}>{item.title}</Link></li>  
                                </div>
                            )
                        })}
                        </ol>
                    </div>
                
                  
                </>
                   
                   
                )
            }
           
          
            
        
        </>
        
    )
}
export default WishList;