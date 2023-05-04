import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Quizdata } from './Quizdata'
import Result from './Result'



const Main = () => {
  const[currentQuestion, setcurrentQuestion]=useState(0)
  const[score, setscore]=useState(0)
  const[select, setselect]=useState(0)
  const[showResult, setshowResult]=useState(false)


  const nextQuestion = ()=>{
    updatescore()
    if(currentQuestion<Quizdata.length-1){
      setcurrentQuestion(currentQuestion+1)
      setselect(0)
    }else{
      setshowResult(true)
    }
  }
    const updatescore = ()=>{
      if(select=== Quizdata[currentQuestion].answer){
        setscore(score+1)
       
      }
    }
  return (
    <>
     <div className="main">
      <div className="heading d-flex justify-content-center pt-5"> <h1> Quiz App </h1></div>
      <div className="box m-auto mt-2 pt-5 ">
      {showResult? (
        <Result score={score} totalscore={Quizdata.length} />
      ):(
        <>
        <div className="questions m-auto">
          <span id='Q-no'> {currentQuestion+1}. </span>
          <span id='Q-text'> {Quizdata[currentQuestion].question} </span>
        </div>
        <div className="option-container">
          {Quizdata[currentQuestion].options.map((option, i)=>{
            return(
              
              <button className={`option-button d-flex justify-content-center mt-3 m-auto ${select == i+1? "checked":null} `} 
              key={i} 
              id={i} 
              onClick={()=>setselect(i+1)}
              >
                 
                  {option}
                 
              </button>
            )
          
          })}
        </div>
        
        <div className="btn-1 mt-4">
             <input type="button" value="Next"  onClick={nextQuestion}/>
        </div>
        </>)}
      </div>
    

     </div>
    </>
  )
}
export default Main