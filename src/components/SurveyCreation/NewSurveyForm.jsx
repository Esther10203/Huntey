import React, { useEffect, useLayoutEffect, useState } from 'react'
import SurveyInput from './SurveyInput';

export default function NewSurveyForm() {
  const [surveyDetails, setSurveyDetails] = useState({title: "", description:""});
  const [questions, setQuestions] = useState([
    {id: 0, title: "", description:"", type:"", question: []}
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
    setQuestions([...questions, {id: questions.length, title: "", description:"", type:"", question: [0]}])
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

  const addOption = (value, questionId, optionId) =>{
      console.log("This is what you typed:", value)
      console.log("The option is at index: ", optionId)
      
      let updatedQuestionArray = []
      questions.map(question =>{
        let element = value;
        if(question.id ==  questionId){
          question.question[optionId] = element;
          updatedQuestionArray = [...question.question]
        }
      }
        
      )
      let updatedOptions = questions.map(question =>
        question.id ==  questionId ? {...question, question: updatedQuestionArray} : question
        )
        setQuestions(updatedOptions)
        console.log("updated Options:", updatedOptions)
  }

  useEffect(() =>{
    // setQuestions([...questions])
  }, [selectedQuestionType])

   return (
    <div className='bg-white p-8 col-span-4 my-4 rounded-md'>
        <h1 className='text-center text-[#28BDB4] font-semibold'>Create New Survey</h1>
      <form onSubmit={handleSubmit} className="w-full">
      <div className='my-3'>
        <label className='font-medium'>
          Title:
        </label>
        <SurveyInput
        type="input"
        onChange={ (value) => {handleOnChange(value, "surveyDetails", "title")}}
        placeholder="Survey Title"
        />
      </div>
      <div className='my-3 w-full'>
        <label className='font-medium text-[1em]'>
          Description:
        </label>
        <SurveyInput type="input"
        onChange={ (value) => {handleOnChange(value, "surveyDetails", "description")}}
        placeholder="Survey Description"
        />
      </div>

      {/* <h1 className="font-bold">Questions</h1> */}
      <div>
        {
            questions.map((question, index) =>
                (
                <div>
                  <fieldset className='font-bold underline'>Question {index+1}</fieldset>
                    <p>Question Title</p>
                  <SurveyInput type="input" placeholder="Type the Question Title"/>
                <p>Question Description</p>
                  <SurveyInput type="input" placeholder="Type the Question Description"/>
                <p>Question Type</p>
                  <SurveyInput 
                  type="select" 
                  questionTypes={questionTypes}
                  onChange={ (value) => {handleOnChange(value,"questionDetails", "select", index)}}
                  />
                {
                    question.type == "Multiple Choice" &&
                    <div>
                      <SurveyInput type="radio" 
                     onChange={(value, id) => {addOption(value, index, id)}}
                      
                    />
                    </div>
                    }
                  </div>

                  )
                  
            )
        }
      </div>
      <div className='w-[90%] relative my-3 h-12'>
          <button className=' absolute right-0 mx-4 bg-[#C2E5E3] px-5 py-1 rounded-md border border-solid focus:outline-none' onClick={addQuestion}> Add Question</button>
      </div>
      <div className='flex justify-center'>
      <input type="submit" value="Submit" className='bg-[#28BDB4] w-[70%] rounded-md py-1 text-white' />
      </div>
        </form>
    </div>
  )
}
