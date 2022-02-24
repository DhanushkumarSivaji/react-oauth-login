import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import AuthContext from '../../store/context';


const UpdatedComponent = (OriginalComponent,url) => {

    function NewComponent() {
        const [posts, setPosts] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage] = useState(5);
        const authContext = useContext(AuthContext);

        const { user } = authContext;


        useEffect(() => {
            const getData = async () => {
              if(!isEmpty(user)){
              let result = await axios.get(
                `https://api.github.com/users/${user.login}/${url.path}`
              );
              setPosts(result.data);
              }
            };
            getData();
          }, [user]);
        
              // Get current posts
              const indexOfLastPost = currentPage * postsPerPage;
              const indexOfFirstPost = indexOfLastPost - postsPerPage;
              const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
            
              // Change page
             const paginate = pageNumber => setCurrentPage(pageNumber);
        return (
            <OriginalComponent
                currentPosts={currentPosts} 
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        )
    }

    return NewComponent;
}

export default UpdatedComponent;