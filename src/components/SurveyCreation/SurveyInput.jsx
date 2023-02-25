import React, { useState } from 'react'

export default function SurveyInput({type, questionTypes, onChange, placeholder}) {
  const [options, setOptions] = useState([""])
  const handleAddOption = () =>{
    setOptions([...options, ""])
  }
  return (
    <div className='w-[90%]'>
    {(() => {
          switch(type) {
            case "input": return (<input type="text" name="name" className='w-full border border-solid bg-[#F5F5F5] border-gray-300 rounded transition ease-in-out my-1.5 py-1 focus:bg-white focus:border-blue-600 focus:outline-none px-3' placeholder={placeholder} onChange={(e) => {onChange(e.target.value)}}/>);
            case "select": return (<select className="form-select appearance-none block w-full px-3 py-1.5 my-1.5 text-base font-normal bg-[#F5F5F5] border border-solid border-gray-300 rounded transition ease-in-out focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(e) => {onChange(e.target.value)}}>
                                  <option selected>Open this select menu</option>
                                      {questionTypes.map(type =>
                                          <option value={type}>{type}</option>
                                      )}</select>);
            case "radio": return(
              <div className='mx-3' >
               {
                options.map((option, index) =>
                <div className=' my-3'>
                  <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                  <input type="text" className="border border-gray-300 bg-white focus:outline-none px-2 py-1" onChange={(e) => {onChange(e.target.value, index)}}/> 
                </div>
                )
               }

                <button onClick={handleAddOption} className="bg-cyan-900 text-white p-2 text-xs rounded-md my-2">
                  Add Option
                </button>
              </div>
            )
          }
        })()}
    </div>
  )
}
