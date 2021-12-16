function Wish(props){
    console.log("Wish props: ", props)
    const singleWish = props.getWish(props.id)
    console.log(singleWish)
    const comment = singleWish.comment;
    return(
       
        <div className="singleQuote">
         
         <p>I would like a(n): {singleWish.title}</p>
         <hr/>
         {props.children}

    {comment.map((item) => {
        return(
        <div className="comment">
            <p>{item.content}</p>
            <p>- {item.username}</p>
            <hr/>
        </div> 
    )

})}
</div>
     
   
    )
}
export default Wish;