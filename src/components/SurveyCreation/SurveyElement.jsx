import React from 'react'

export default function SurveyElement({title, description}) {
    const MAX_LENGTH = 100;
    let name = "Chance";
    description = description.length > MAX_LENGTH ? description.slice(0,MAX_LENGTH) + "..." : description
  return (
    <div className={``}>
        <div><p className='text-black text-sm my-2'>{title}</p></div>
        <div><p className='text-sm text-gray-500'>{description}</p></div>
        <button className='rounded-md text-center text-white my-3 bg-[#85A4D9] px-3 py-1 text-sm focus:outline-none'>Add Question</button>
        <hr />
    </div>
  )
}
