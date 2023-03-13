import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import SurveyTableRows from "./SurveyTableRows";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Table() {
  const activeLink = "bg-link_bg";
  const [surveys, setSurveys] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const surveysPerPage = 6;
  const pagesVisited = (pageNumber) * surveysPerPage;
  const dataSeen = (pageNumber +1) * surveysPerPage;

  const displaySurveys = surveys
    .slice(pagesVisited, pagesVisited + surveysPerPage)
    .map((survey, index) => {
      return (
        <SurveyTableRows
          key={index}
          id={survey.id}
          title={survey.title}
          beginning={survey.beginning}
          deadline={survey.deadline}
        />
      );
    });

  const pageCount = Math.ceil(surveys.length / surveysPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div class="grid mt-5 grid-cols-3 mb-2 gap-2">
        <div className="flex flex-row col-end-7 col-span-2 ...">
          <div class="mx-2 shadow-md max-w-md">
            <form action="" class="relative rounded-lg bg-white mx-auto w-max">
              <input
                type="search"
                class="peer cursor-pointer relative z-10 h-11 w-12 rounded-full border-none bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute peer-focus:border-gray-100 inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
          <div className="flex flex-row w-48 h-11 shadow-md bg-white border-none rounded-lg justify-center">
            {/* <div className="flealign-items-center py-2 w-64 h-9 bg-gray-900"> */}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-2.5 mr-1 cursor-pointer inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <select
              id="dates"
              class="border-none bg-white text-sm px-2 w-3/4 cursor-pointer rounded-lg outline-none inline-block"
            >
              <option selected>This week</option>
              <option>This week</option>
              <option>This month</option>
              <option>Last month</option>
              <option>This year</option>
            </select>
            {/* </div> */}
          </div>
          <div className="mx-2 bg-transparent">
            <button
              type="button"
              class="h-11 px-4  shadow-md outline-none items-center rounded-md border border-transparent font-semibold bg-emerald-500 text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-300  transition-all text-sm "
            >
              Create New Survey
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden shadow-md border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 border-spacing-y-3.5">
                <thead className="bg-gray-50">
                  <tr className="bg-gray-900">
                    <th
                      scope="col"
                      className="px-7 py-2 text-sm font-bold text-right text-white"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-bold text-left text-white"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-bold text-left text-white"
                    >
                      Beginning
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-bold text-left text-white"
                    >
                      Deadline
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-bold text-left text-white"
                    >
                      Details
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-sm font-bold text-center text-white"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {displaySurveys}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-6 py-3 h-12 mt-4  content-center gap-4">
          <div class="col-start-1  col-end-3 px-4 text-sm font-bold text-left text-black ...">
            {" "}
            <p className="py-1">Showing {dataSeen} of 50 results</p>{" "}
          </div>
          <div class="col-end-7 col-span-3 ...">
            <ReactPaginate
              variant="outlined"
              shape="rounded"
              nextLabel={
                <span className="ml-2 bg-gray-300 hover:bg-gray-500 text-gray-900 font-bold py-2 px-2 rounded inline-flex items-center">
                  <BsChevronRight />
                </span>
              }
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={
                <span className="mr-2 bg-gray-300 hover:bg-gray-500 text-gray-900 font-bold py-2 px-2 rounded inline-flex items-center">
                  <BsChevronLeft />
                </span>
              }
              containerClassName="flex items-center justify-center"
              pageClassName="block border- border-solid  
        border-lightGray  hover:bg-lightGray w-10 h-9 flex 
        items-center justify-center rounded-md "
              activeClassName="bg-gray-900 text-white no-underline hover:no-underline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
