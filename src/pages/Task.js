import React, { startTransition, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editTask } from '../slices/TaskSlice';
import { Spinner } from 'react-bootstrap';

const Task = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const { id } = useParams();
    const [formData, setFormData] = useState({});
    const [isLoading, setisLoading]  = useState(false)
    useEffect(() => {
        const taskToEdit = tasks.find((task) => task.id === id);
        setFormData(taskToEdit);
    }, []);

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        dueDate: '',
    });

    console.log(formData)
    const validateForm = () => {
        let valid = true;
        const newErrors = {
            title: '',
            description: '',
            dueDate: '',
        };

        if (formData.title.trim() === '') {
            newErrors.title = 'Title is required';
            valid = false;
        }

        if (formData.description.trim() === '') {
            newErrors.description = 'Description is required';
            valid = false;
        }

        if (formData.dueDate.trim() === '') {
            newErrors.dueDate = 'Due Date is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        setisLoading(true)
        e.preventDefault();
        if (validateForm()) {
            dispatch(editTask(formData))
            startTransition(() => {
                setisLoading(false);
              });
            console.log('hello')
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

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
                                    {isLoading ? <Spinner/> : <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                        Save Changes
                                    </button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
