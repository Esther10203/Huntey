import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import NewSurveyForm from '../components/SurveyCreation/NewSurveyForm'

export default function NewSurvey() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className={`bg-content_bg w-full`}></div>
        <NewSurveyForm/>
      </div>
    </React.Fragment>
  )
}
