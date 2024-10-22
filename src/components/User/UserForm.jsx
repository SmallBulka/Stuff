import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserSignupForm from './UserSignupForm';
import styles from '../../styles/User.module.css'
import { toggleForm } from '../featurs/user/userSlice';



function UserForm() {
    const dispatch= useDispatch()
    const {showForm} = useSelector(({user})=> user);

    const closeForm = ()=> dispatch(toggleForm(false))
  return (
    showForm ? (<>
        <div className={styles.overlay} >
        <UserSignupForm closeForm={closeForm}/> 
        </div>
        </>) : <></>
    
  )
}

export default UserForm