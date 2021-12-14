function Wish(props){
    console.log(props)
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