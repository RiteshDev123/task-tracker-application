import React, { useState } from 'react';

function SignIn({handleChange, handleSubmit, formData, errors, showAlert}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            {showAlert && <p className='text-danger'>Invalid Id or password</p>}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
