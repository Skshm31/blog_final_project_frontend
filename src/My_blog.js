import React , {useState} from "react";
import './My_blog.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function MyBlog(){
    const [blog , setBlog] = useState([{"AuthorId":"1" , "Title":"first blog" , "Summary" : "this is first blog" , "PublishedDate":"" , "Image":"https://picsum.photos/200/300" , } , {"AuthorId":"1" , "Title":"second blog" , "Summary" : "this is first blog" , "PublishedDate":"" , "Image":"https://picsum.photos/200/300" , }]);
    
    function handleDelete(event , title){
       
        //  let blog1; 
        console.log('title', title)
        //  for(let i = 0 ; i < blog.length ; i++){
        //     if(blog.Title !== title){
        //         blog1.push(blog[i]);
        //     }
        //  }

         setBlog((prevblog)=>{
            return  prevblog.filter((blog)=>{
              if(blog.Title !== title){
               return blog;
            }
            return false
             })
           });



        
    }  
    
    function handleEdit(event , prevtitle , previmage , prevsummary){
         
       
        setBlog(prevblog => {

        })
             


    }

    
    


    return(

       
       <div className="myblogpage">
        {blog.map(
            blog => {
                return(
                    <div className="blog col-6">
                        <div className="blogtitle"> {blog.Title} </div>
                        <div className="blogimage"><img src={blog.Image}></img></div>
                        <div className="blogdescription"> {blog.Summary} </div>
                        <div className="editbutton"> <button onClick={event => handleEdit(event , blog.Title , blog.Image , blog.Summary)}> Edit </button> </div> 
                        {/* <inputElement></inputElement> */}
                        <button onClick={ event => handleDelete(event,blog.Title)}> Delete </button>
                    </div>
                );
            }
        )}
       </div>

    );
}




export default MyBlog;
