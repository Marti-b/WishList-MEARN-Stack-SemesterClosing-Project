import { Link } from "@reach/router";

function WishList(props){
    console.log("Wishlist Props: ", props )
    let data = props.data
    return(
        <>
        {props.children}
        
            
            {data.map((item)=>{
                    return(
                        <div className="wishlist" key={item.id}>
                            <Link to={`/wish/${item.id}`}>{item.title}</Link>
                        </div>
                        
                    )
            })}
          
            
        
        </>
        
    )
}
export default WishList;