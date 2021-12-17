function Wish(props){
    console.log("Wish props: ", props)
    const singleWish = props.getWish(props.id)
    console.log(singleWish)
    const comment = singleWish.comment;
    return(
       
        <div className="singleWish">
         
         <h3> {singleWish.title}</h3>
         <h4>Description:</h4>
         <p>{singleWish.descriptions}</p>
         <h4>External link:</h4>
         <a href="singlewish.externalLink">{singleWish.externalLink}</a>
         <p>It was created at: {singleWish.createdAt}</p>
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