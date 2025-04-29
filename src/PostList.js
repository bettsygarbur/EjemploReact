import { useState } from "react";
import Post from "./Post"; 

function PostList() {

  const handleDelete = (id) => {
    console.log("Deleted...", id);
    setPosts(posts.filter((post) => post.id !== id)); 
  };


  const handleAdd = () => {
    const newPost = {
      id: posts.length + 1, 
      nombre: "Nuevo Post",  
      edad: 0,            
    };
    setPosts([...posts, newPost]); 
    console.log("Añadido nuevo Post con ID", newPost.id);
  };

  const [posts, setPosts] = useState([
    { id: 1, edad: 5, nombre: "Juan" },
    { id: 2, edad: 7, nombre: "María" },
    { id: 3, edad: 8, nombre: "Ana" },
    { id: 4, edad: 9, nombre: "Carlos" },
  ]);

  return (
    <div>
      {/* Mapea los posts y muestra un componente Post para cada uno */}
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onDelete={handleDelete} 
        />
      ))}

      {/* Botón para agregar un nuevo Post al final */}
      <button onClick={handleAdd}>Añadir nuevo Post</button>
    </div>
  );
}

export default PostList;
