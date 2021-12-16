function Wish(props){
    console.log("Wish props: ", props)
    const singleWish = props.getWish(props.id)
    console.log(singleWish)
    return(
       
        <div className="singleQuote">
         
         <p>{singleWish.title}</p>
         <p></p>
        <hr/>
        </div>
     
   
    )
}
export default Wish;