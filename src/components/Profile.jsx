import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Profile() {
  return (
    <React.Fragment>
    <Sidebar />
    <div className="w-4/5">
      <Navbar />
      <div className={`bg-content_bg w-full`}></div>
    <div>Profile</div>
    </div>
  </React.Fragment>
  )
}
