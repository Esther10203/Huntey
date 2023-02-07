import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Surveyors() {
  return (
    <React.Fragment>
    <Sidebar />
    <div className="w-4/5">
      <Navbar />
      <div className={`bg-content_bg w-full`}></div>
    <div>Surveyors</div>
    </div>
  </React.Fragment>
  )
}
