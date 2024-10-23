import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserSignupForm from './UserSignupForm';
import styles from '../../styles/User.module.css'
import { toggleForm } from '../featurs/user/userSlice';
import UserLoginForm from './UserLoginForm';



function UserForm() {
    const dispatch= useDispatch()
    const {showForm, formType} = useSelector(({user})=> user);

    const closeForm = ()=> dispatch(toggleForm(false))
  return (
    showForm ? (<>
        <div className={styles.overlay} >
        {formType === 'singup' ? <UserSignupForm closeForm={closeForm}/> : <UserLoginForm/>}
        </div>
        </>) : <></>
    
  )
}

export default UserForm