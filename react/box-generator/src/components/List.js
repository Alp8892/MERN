import React from 'react'
import Box from './Box';

function List(props) {
    const {boxArray} = props
  return (
    <div style = {{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        marginLeft:"40px",
        marginRight:"40px",
        marginTop:"40px",
        marginBottom:"40px"
    }}>
        {boxArray.map((box,i) => (
            <Box key={i} box={box} />
        ))}
        </div>
  );
}

export default List