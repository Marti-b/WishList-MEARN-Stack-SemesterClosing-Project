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
                    <div className="wishlist">
                        {data.map((item)=>{
                            return(
                             <div  key={item._id}>
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