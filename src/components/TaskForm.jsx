import React, { useState, useEffect } from "react";

function TaskForm({ setModalOn, addTask }) {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [details, setdetails] = useState("");
  const [taskToEdit, settaskToEdit] = useState({});

  // useEffect(() => {
  //   editTask();
  // }, []);

  const handleOKClick = () => {
    setModalOn(false);
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div className="bg-black bg-opacity-50  fixed inset-0  z-40 ">
      <div className="bg-black bg-opacity-50  flex h-screen justify-center items-center ">
        <div className=" bg-white py-8 px-20 border-4 border-blue-500 rounded-xl inset-0 z-40">
          <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="taskName"
              >
                Task name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                maxLength={30}
                placeholder="Task name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="taskDame"
              >
                Task Date (optinal)
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="date"
                value={date}
                min={disablePastDate()}
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="taskDetails"
              >
                Task Details (optinal)
              </label>
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                placeholder="Task details"
                value={details}
                maxLength={100}
                onChange={(e) => {
                  setdetails(e.target.value);
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            <div class="flex items-center justify-between">
              <button
                onClick={() => addTask(name, date, details)}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Add task
              </button>
              <button
                onClick={handleOKClick}
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
