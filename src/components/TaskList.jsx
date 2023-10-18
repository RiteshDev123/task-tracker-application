import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, editTask } from '../slices/TaskSlice'
import deletelogo from '../assets/deletelogo.svg'
import edit from '../assets/edit.svg'


function TaskList() {
  const [isChecked, setIsChecked] = useState(false)
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

   return (
    <div className="col-md-12">
      <div className="mt-3 py-4 d-flex align-items-center justify-content-between">
        <h2 className="fw-bold fs-1 text-primary"> Task List</h2>
      </div>
      <table className="table table-responsive table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th></th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td scope="row">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                  </div>
                </td>
                <th scope="row">1</th>
                <td>{task.title} </td>
                <td>{task.description}</td>
                <td>
                  <div className="d-flex gap-3">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#edittast" className="bg-info p-2"><img src={edit} width="20" height="20" /></a>
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