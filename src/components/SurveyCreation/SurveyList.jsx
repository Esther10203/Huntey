import React from 'react'
import SurveyElement from './SurveyElement'

export default function SurveyList() {
    const surveys = [
        {
            title: "Distributing Smart Phones to Citizens",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quasi labore blanditiis ratione dolor. At fugit officia amet voluptate, assumenda suscipit officiis harum beatae, ipsam voluptatum natus ducimus pariatur voluptatem!"
            
        },
        {
            title: "Distributing Smart Phones to Citizens",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quasi labore blanditiis ratione dolor. At fugit officia amet voluptate, assumenda suscipit officiis harum beatae, ipsam voluptatum natus ducimus pariatur voluptatem!"
            
        },
        {
            title: "Distributing Smart Phones to Citizens",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quasi labore blanditiis ratione dolor. At fugit officia amet voluptate, assumenda suscipit officiis harum beatae, ipsam voluptatum natus ducimus pariatur voluptatem!"
            
        }
    ]

  return (
    <div className={`w-full col-span-2 bg-white my-4 p-4`}>
        <h1 className='font-bold my-2'>Survey List</h1>
      {
        surveys.map(survey =>
            <SurveyElement title={survey.title} description={survey.description}/>    
        )
      }
    </div>
  )
}
