import React, { useEffect, useLayoutEffect, useState } from 'react'
import SurveyInput from './SurveyInput';

export default function NewSurveyForm() {
  const [surveyDetails, setSurveyDetails] = useState({title: "", description:""});
  const [questions, setQuestions] = useState([
    {id: 0, title: "", description:"", type:"", question: ""}
  ]);
  const questionTypes = [
    "Multiple Choice", "Short Text", "Long Text", "Select"
  ]

  const [selectedQuestionType, setSelectedQuestionType] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  const addQuestion = (e) =>{
    e.preventDefault();
    setQuestions([...questions, {id: questions.length+1, title: "", description:"", type:"", question: ""}])
    console.log("Questions is", questions)
  }

  const handleOnChange = (value, target, element, id) =>{

    console.log("id:", id)
    if(target == "surveyDetails"){ 
    element == "title" ?
    setSurveyDetails({...surveyDetails, title : value}) : setSurveyDetails({...surveyDetails, description: value})
    }else{
    let updatedQuestions = questions.map(question =>
      question.id == id ? {...question, type : value} : question
      )
      setQuestions(updatedQuestions)
      console.log("updated questioins:", updatedQuestions)
    }
  }

  useEffect(() =>{
    // setQuestions([...questions])
  }, [selectedQuestionType])

   return (
    <div className='bg-white p-8 w-4/5'>
        <h1 className='text-center text-[#49E6D9] font-bold'>Create New Survey</h1>
      <form onSubmit={handleSubmit} className="w-full">
      <div className='my-5'>
        <label className='font-medium'>
          Title:
        </label>
        <SurveyInput
        type="input"
        onChange={ (value) => {handleOnChange(value, "surveyDetails", "title")}}
        />
      </div>
      <div className='my-5 w-full'>
        <label className='font-medium text-[1em]'>
          Description:
        </label>
        <SurveyInput type="input"
        onChange={ (value) => {handleOnChange(value, "surveyDetails", "description")}}
        />
      </div>

      <h1 className="font-bold">Questions</h1>
      <div>
        {
            questions.map((question, index) =>
                (
                <div>
                    <p>Question Title</p>
                  <SurveyInput type="input"/>
                <p>Question Description</p>
                  <SurveyInput type="input" />
                <p>Question Type</p>
                  <SurveyInput 
                  type="select" 
                  questionTypes={questionTypes}
                  onChange={ (value) => {handleOnChange(value,"questionDetails", "select", index)}}
                  />
                {
                    question.type == "Multiple Choice" ? 
                    <div>
                      <SurveyInput type="radio"/>
                    </div> : <div>okay</div>
                    }
                  </div>

                  )
                  
            )
        }
      </div>
      <div className='w-[80%] relative my-3'>
          <button className=' absolute right-0 mx-4 bg-[#C2E5E3] px-5 py-1 rounded-md border border-solid ' onClick={addQuestion}> Add Question</button>
      </div>
      <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
