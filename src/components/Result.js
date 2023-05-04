import React from 'react'

const Result = (props) => {
  return (
    <>
        <div className="results">
        Your Score:  {props.score} 
        <br></br>
        Total Score:  {props.totalscore}
        </div>
        
    </>
  )
}

export default Result