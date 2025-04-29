import React, { useState } from "react";

function Post(props) {
  const [activo, setActivo] = useState(false);

  const conditionalRender = () => {
    if (activo) {
      return <h2>Renderizado condicional en React</h2>;
    }
  };

  const handleClick = () => {
    setActivo(!activo);
  };

  return (
    <React.Fragment>
      <h1>Bienvenidos</h1>
      <h2>Post ID {props.post.id}</h2>
      {conditionalRender()}
      <button onClick={handleClick}>
        {activo && "Inactivar" || "Activar"}
      </button>
      <button onClick={() => props.onDelete(props.post.id)}>Borrar</button>
    </React.Fragment>
  );
}

export default Post;
