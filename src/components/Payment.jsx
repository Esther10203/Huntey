import React, { useEffect } from "react";
import card from "../assets/credit.png";
import momo from "../assets/mtn.png";
import check from "../assets/check.png";
import "../styles/payment.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Payment() {
  useEffect(() => {
    if (document.getElementById("check-credit")) {
      document.getElementById("check-credit").style.display = "none";
    }
  });

  return (
    <React.Fragment>
      <Sidebar />
      <div className="w-3/4">
        <Navbar />
        <div id="paymentPage" className="bg-content_bg w-full h-full">
          <div className="bg-white w-4/6 p-4">
            <h2 className=" font-bold text-xl">Add Payment Method</h2>
            <div id="paymentMethods">
              <div
                className="border border-cyan-500/25 rounded-md mr-4 px-4 relative"
                id="card"
                onClick={function () {
                  document.getElementById("credit").style.display = "block";
                  document.getElementById("mobileMoney").style.display = "none";
                  document.getElementById("check-momo").style.display = "none";
                  document.getElementById("check-credit").style.display =
                    "block";
                }}
              >
                <img
                  src={check}
                  alt="check"
                  id="check-credit"
                  className="absolute right-3 top-3"
                />
                <img src={card} alt="imag" className="image" />
              </div>
              <div
                id="momo"
                className="border border-cyan-500/25 rounded-md px-4 relative"
                onClick={function () {
                  document.getElementById("mobileMoney").style.display =
                    "block";
                  document.getElementById("credit").style.display = "none";
                  document.getElementById("check-momo").style.display = "block";
                  document.getElementById("check-credit").style.display =
                    "none";
                }}
              >
                <img
                  src={check}
                  alt="check"
                  id="check-momo"
                  className="absolute right-3 top-3"
                />
                <img src={momo} alt="image" className="image" />
              </div>
            </div>
            <div id="credit">
              <form className="w-full">
                <div
                  className="input-group w-full mb-4 border-2 rounded-sm"
                  id="user"
                >
                  <div className="input-group-prepend bg-content_bg">
                    <span className="input-group-text px-3 border-0 bg-content_bg">
                      <span className="text-xl fa fa-user"></span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-content_bg w-4/5 border-0"
                    placeholder="John Doe"
                    required="required"
                  />
                </div>

                <div
                  className="input-group w-full mb-4 border-2 rounded-sm"
                  id="account"
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text px-3 border-0 bg-content_bg">
                      <span className="text-xl fa fa-credit-card"></span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-content_bg w-4/5 border-0"
                    placeholder="0000 0000 0000 0000"
                    required="required"
                  />
                </div>

                <div className=" flex">
                  <div
                    className="input-group flex-1 mb-4 border-2 rounded-sm"
                    id="date"
                  >
                    <div className="input-group-prepend">
                      <span className="input-group-text px-3 border-0 bg-content_bg">
                        <span className="text-xl fa fa-calendar"></span>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-content_bg w-4/5 border-0"
                      placeholder="mm / dd"
                      required="required"
                    />
                  </div>
                  <div
                    className="input-group flex-1 ml-4 mb-4 border-2 rounded-sm"
                    id="date"
                  >
                    {/* <div className="input-group-prepend">
                      <span className="input-group-text px-3 border-0 bg-content_bg">
                        <span className="text-xl fa fa-eye"></span>
                      </span>
                    </div> */}
                    <input
                      type="number"
                      className="form-control bg-content_bg w-4/5 border-0 text-center"
                      placeholder="0 0 0"
                      required="required"
                    />
                  </div>
                </div>
                <button
                  className="btn text-white w-3/6 m-auto bg-teal-500 text-lg"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>

            <div id="mobileMoney">
              <form className="w-full">
                <div
                  className="input-group w-full mb-4 border-2 rounded-sm"
                  id="account"
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text px-3 border-0 bg-content_bg">
                      <span className="text-xl fa fa-user"></span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-content_bg w-4/5 border-0"
                    placeholder="MoMo Username"
                    required="required"
                  />
                </div>
                <div
                  className="input-group w-full mb-4 border-2 rounded-sm"
                  id="phone"
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text px-3 border-0 bg-content_bg">
                      <span className="text-xl fa fa-phone"></span>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control bg-content_bg w-4/5 border-0"
                    placeholder="Phone Number"
                    required="required"
                  />
                </div>

                <button
                  className="btn text-white w-3/6 m-auto bg-teal-500 text-lg"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
