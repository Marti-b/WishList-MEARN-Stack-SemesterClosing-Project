function WishList(props){
    console.log("Wishlist Props: ", props )
    let data = props.data
    return(
        <>
        {props.children}
        
            <ol>
            {data.map((item)=>{
                    return(
                        <li key={item.id}>{item.text}</li>
                    )
               
            })}
            </ol>
            
        
        </>
        
    )
}
export default WishList;