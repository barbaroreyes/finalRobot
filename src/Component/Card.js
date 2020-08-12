import React from 'react';

const Card = ({id, name , email}) => {
 return (
     <div className =' tc bg-light-green dib ma2 pa3 grow shadow-5 '>
       <img alt ='' src ={`https://robohash.org/${id}?200x200`}/>
       <div>
           <h1>{name}</h1>
           <p>{name}</p>
       </div>
     </div>
 )
}
export default Card