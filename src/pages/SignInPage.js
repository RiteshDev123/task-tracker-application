import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import {users} from '../constant/users';
import { authenticateUser } from '../slices/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setShowAlert(false)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: '', password: '' };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (isValid) {
      // Perform your authentication logic here
      users.map(user => {
        if(user.email == formData.email && user.password == formData.password) {
          dispatch(authenticateUser(user))
          navigate('/')

        } 
        else {
          setShowAlert(true)
        }
      })

    } else {
      setErrors(newErrors);
    }
  };

  console.log(formData)
  return (
    <>
    <SignIn showAlert={showAlert} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} formData={formData}/>
    </>
  )
}
export default SignInPage