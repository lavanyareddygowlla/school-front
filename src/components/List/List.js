import React from 'react';
import Box from '../Box/Box';
export default (props) =>{
    const items=props.items || [];
    return( 
     <div className="list">
      <div>{props.header}</div>
      {
        items.map((item,index) => <Box key={index} id={item.id} css={item.css} text={item.text} click={props.click}/>)
      }
     </div>
)
};
