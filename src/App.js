import "./App.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
function App() {
  const [modalOn, setModalOn] = useState(false);
  const [todoTask, settodoTask] = useState(false);

  const [toDoArray, settoDoArray] = useState([
    {
      id: 1,
      taskName: "Workout fullbody",
      taskDate: "2022-06-22",
      taskDetails: "",
      taskOpen: false,
    },
    {
      id: 2,
      taskName: "Study",
      taskDate: "2022-06-29",
      taskDetails:
        "1 hour of English study then 1 hour of proplem solving with paython",
      taskOpen: false,
    },
    {
      id: 3,
      taskName: "shopping",
      taskDate: "2022-06-30",
      taskDetails: "buy new cloths for the gym",
      taskOpen: false,
    },
  ]);

  const openModel = () => {
    setModalOn(true);
  };

  const closeModel = () => {
    setModalOn(false);
  };
  const addTask = (name, date, details) => {
    let tasksArary = [...toDoArray];
    if (name === "" || name == null) {
      return toast.error("Must add task name");
    }
    let newTask = {
      id: Date.now(),
      taskName: name,
      taskDate: date,
      taskDetails: details,
    };

    tasksArary.push(newTask);
    toast.success("Task added");

    settoDoArray(tasksArary);
    setModalOn(false);
    console.log("Task added ", newTask);
  };

  const deleteTask = (task) => {
    let tasksArr = [...toDoArray];

    tasksArr = tasksArr.filter((todo) => {
      return todo.id !== task.id;
    });
    settoDoArray(tasksArr);
    toast.success("Task deleted ");
    console.log("Delete sucsses ", task);
  };

  const editTask = (id) => {};

  return (
    <>
      <div className="p-32 pl-96 pr-96 ">
        <div className="">
          <div className="bg-slate-900 text-center p-5 rounded-t-xl">
            <button
              className="bg-cyan-600 p-2 pl-8 pr-8 mt-5 rounded-lg"
              onClick={() => openModel()}
            >
              <p className="text-2xl font-bold text-white text-center ">
                New task
              </p>
            </button>
          </div>
          {toDoArray.length > 0 ? (
            <div className="bg-slate-900 p-10 pb-32 rounded-b-xl">
              {toDoArray.map((task, index) => (
                <div className="mt-4">
                  <div className="bg-indigo-600 flex flex-row justify-between  mr-12 ml-12 p-4  rounded-t-xl">
                    <div>
                      <p className="font-bold text-2xl text-white">
                        {index + 1}: {task.taskName}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between ">
                      <div>
                        {/* <FaEdit
                          size={24}
                          className="hover:cursor-pointer"
                          color="white"
                          onClick={() => openModel()}
                        /> */}
                      </div>
                      <div>
                        <MdDeleteForever
                          size={28}
                          className="ml-4 hover:cursor-pointer"
                          color="white"
                          onClick={() => deleteTask(task)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-indigo-600  mr-12 ml-12 p-4">
                    <AiOutlineArrowDown />
                  </div> */}
                  {/* 
                  {task.taskDetails.length > 0 ||
                    (task.taskDate != "" && ( */}
                  <>
                    <div className="bg-indigo-600  mr-12 ml-12 p-4 border-t-2 border-gray rounded-b-xl">
                      <p className="text-xl text-white">{task.taskDate} </p>
                      <p className="mt-2 text-xl text-white w-200 ">
                        {task.taskDetails}{" "}
                      </p>
                    </div>
                  </>
                  {/* ))} */}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-900 p-6 pt-12 ">
              <h2 className=" font-bold text-white text-center">
                No tasks for today? add some
              </h2>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
      {modalOn && <TaskForm setModalOn={setModalOn} addTask={addTask} />}
    </>
  );
}

export default App;
