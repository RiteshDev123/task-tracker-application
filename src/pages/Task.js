import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editTask } from '../slices/TaskSlice';
import { useNavigate } from 'react-router-dom';
import EditTask from '../components/EditTask';

const Task = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
            setTimeout(() => {
                setisLoading(false);
                navigate('/')
              },100);
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
       <EditTask formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} isLoading={isLoading}/>
    );
};

export default Task;
