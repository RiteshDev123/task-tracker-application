// src/components/TaskForm.js
import React, { useId } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Addtask } from '../slices/TaskSlice';
import {v4 as uuid} from 'uuid';

const TaskForm = () => {
  const dispatch = useDispatch()
  const initialValues = {
    title: '',
    description: '',
    dueDate: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    dueDate: Yup.date()
    .typeError('Due Date must be a valid date')
    .required('Due Date must be a valid date')
    .test('is-valid-date', 'Invalid date format', (value) => {
      if (value === null || value === undefined) {
        return false; // Handle empty values as needed
      }            

      return !isNaN(value);
    }),
    });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission here, e.g., send data to an API
    console.log(values);
    dispatch(Addtask({...values, isCompleted: false, id: uuid()}))
    resetForm();
  };

  return (
    <div className="container">
      <h2 className='fw-bold fs-1 text-primary'>Create a New Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="error text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field as="textarea" id="description" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="error text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <Field type="date" id="dueDate" name="dueDate" className="form-control" />
            <ErrorMessage name="dueDate" component="div" className="error text-danger" />
          </div>

          <div className="form-group mt-4">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
