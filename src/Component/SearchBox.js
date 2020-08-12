import React from 'react';

 const SearchBox = ({serchField,searchange}) => {
    return (
        <div>
            <input 
            className ='bg-light-blue ma3 pa2'
             type = 'search' 
             placeholder ='search-robot'
             onChange= {searchange}
             />
        </div>
    ) 
 }
 export default SearchBox