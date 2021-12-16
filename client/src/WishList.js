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
                    <div>
                        {data.map((item)=>{
                            return(
                             <div className="wishlist" key={item._id}>
                                    <Link  to={`/wish/${item._id}`}>{item.title}</Link>
                                </div>
                            )
                        })}
                    </div>
                   
                )
            }
           
          
            
        
        </>
        
    )
}
export default WishList;