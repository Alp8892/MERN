import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    const { a } = useParams();
    
  if(isNaN(a) === true) {
  return (
    <div>
      The word is:  {a}
    </div>
  )
} else {
  return(
    <div>
      What you entered was not a word!
    </div>
  )
}
}

export default Hello