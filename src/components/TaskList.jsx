import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, editTask } from '../slices/TaskSlice'
import deletelogo from '../assets/deletelogo.svg'
import edit from '../assets/edit.svg'
import { Link, NavLink } from 'react-router-dom'

function TaskList() {
  const [isChecked, setIsChecked] = useState(false)
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="col-md-12">
      <div className="mt-3 py-4 d-flex align-items-center justify-content-between">
        <h2 className="fw-bold fs-1 text-primary"> Task List</h2>
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
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td scope="row">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                  </div>
                </td>
                <td>{task.title} </td>
                <td>{task.description}</td>
                <td>
                  <div className="d-flex gap-3">
                    <NavLink to={`/update/${task.id}`} className="bg-info p-2"><img src={edit} width="20" height="20" /></NavLink>
                    <a className="bg-danger p-2"><img src={deletelogo} width="20" height="20" onClick={() => dispatch(deleteTask(index))} /></a>
                  </div>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default TaskList