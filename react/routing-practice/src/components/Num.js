import React from 'react'
import { useParams } from 'react-router-dom'

const Num = () => {
    const { a } = useParams();

    if (isNaN(a) === false) {
  return (
    <div>Your Number is: 
        {a} </div>
  )
}else {
  return(
    <div>
      What you entered is not a number!
    </div>
  )
}}

export default Num