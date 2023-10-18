import React from 'react'
import { Spinner } from 'react-bootstrap'

function EditTask({ formData, handleChange, handleSubmit, errors, isLoading }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2>Edit Task</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData?.title}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <div className="text-danger">{errors.title}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData?.description}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <div className="text-danger">{errors.description}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData?.dueDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <div className="text-danger">{errors.dueDate}</div>
                </div>
                <div className="form-group mt-2">
                  {isLoading ? <Spinner /> : <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    Save Changes
                  </button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTask