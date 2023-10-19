import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, editTask } from '../slices/TaskSlice'
import deletelogo from '../assets/deletelogo.svg'
import edit from '../assets/edit.svg'
import { NavLink } from 'react-router-dom'
import FilterTask from './FilterTask'

function TaskList() {
  const [isCompleted, setIsCompleted] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');
  const [alltask, setAllTask] = useState()
  let tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();


  useEffect(() => {
    if (selectedOption === 'completed') {
      tasks = tasks.filter(task => task.isCompleted === true)
      setAllTask(tasks)
    } else if (selectedOption === 'not-completed') {
      tasks = tasks.filter(task => task.isCompleted !== true)
      setAllTask(tasks)
    }
    setAllTask(tasks)
  }, [selectedOption, tasks])


  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCompletedTask = (task) => {
    setIsCompleted(!isCompleted)
    task = { ...task, isCompleted: !isCompleted }
    dispatch(editTask(task))
  }


  return (
    <>
    {alltask && (
          <div className="col-md-12">
          <div className="mt-3 py-4 d-flex align-items-center justify-content-between">
            <h2 className="fw-bold fs-1 text-primary"> Task List</h2>
            <FilterTask handleSelectChange={handleSelectChange} selectedOption={selectedOption} />
          </div>
          <table className="table table-responsive table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th></th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             {alltask?.map((task, index) => {
                return (
                  <tr key={index}>
                    <td scope="row">
                      <div className="form-check">
                        <input className="form-check-input" checked={task.isCompleted} type="checkbox" value="" id="flexCheckChecked" onClick={() => handleCompletedTask(task)} />
                      </div>
                    </td>
                    <td>{task.title} </td>
                    <td>{task.description}</td>
                    <td>
                      <div className="d-flex gap-3">
                        <NavLink to={`/update/${task.id}`} className="bg-info p-2"><img src={edit} width="20" height="20" /></NavLink>
                        <a className="bg-danger p-2"><img src={deletelogo} width="20" height="20" onClick={() => dispatch(deleteTask(task))} /></a>
                      </div>
                    </td>
                  </tr>
                )
              })}
    
            </tbody>
          </table>
        </div>
    )}

    </>
  )
}

export default TaskList