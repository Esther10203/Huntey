import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import NewSurveyForm from '../components/SurveyCreation/NewSurveyForm'
import SurveyList from '../components/SurveyCreation/SurveyList'

export default function NewSurvey() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="w-3/4">
        <Navbar />
        <div className={`bg-content_bg w-full grid grid-cols-6 gap-x-5 px-4`}>
        <NewSurveyForm/>
        <SurveyList/>
        </div>
      </div>
    </React.Fragment>
  )
}
