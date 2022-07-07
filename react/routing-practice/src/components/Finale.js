import React from 'react'
import { useParams } from 'react-router-dom'

const Finale = () => {
  const { a, b, c } = useParams();

  if (isNaN(a) === true) {
    return(
      <div style={{color: b, backgroundColor: c}}>
        {a}
      </div>
    )
  }else {
    return(
    <div>
      What you entered was not a word!
    </div>
  )};


}

export default Finale