import React from 'react';

const Card= (props) =>{
  const {name, id, email}=props;
  return(
    <div className=" tc bg-light-blue dib br3 pa3 ma3 grow pw2 shadow-5">
      <img alt='robot' src={`https://robohash.org/${id}`} width="200" hight="200"/>
      <div>
        <h2>
          {name}
        </h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;