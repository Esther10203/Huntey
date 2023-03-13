import React from "react";

const SurveyTableRows = (props) => {
  return (
    <tr className="bg-white mt-2 shadow-md">
      <td className="px-7 py-2  text-sm font-medium text-right text-gray-800 whitespace-nowrap">
        {props.id}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap ">
        {props.title}
      </td>
      <td className="px-4 py-2  text-sm text-gray-800 whitespace-nowrap">
        {props.beginning}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
        {props.deadline}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          View Details
        </button>
      </td>
      <td className=" ml-2 px-7 py-2 text-sm font-medium text-left whitespace-nowrap">
        <button className=" bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default SurveyTableRows;
