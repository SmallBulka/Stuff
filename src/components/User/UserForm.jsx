import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserSignupForm from './UserSignupForm';
import styles from '../../styles/User.module.css'
import { toggleForm, toggleFormType } from '../featurs/user/userSlice';
import UserLoginForm from './UserLoginForm';



function UserForm() {
    const dispatch= useDispatch()
    const {showForm, formType} = useSelector(({user})=> user);

    const closeForm = ()=> dispatch(toggleForm(false))
    const toggleFormCurrent = (type)=> dispatch(toggleFormType(type))
  return (
    showForm ? (
    <>
        <div className={styles.overlay} />
        {formType === 'singup' ? 
        (<UserSignupForm toggleFormCurrent={toggleFormCurrent} closeForm={closeForm}/>
         ) : (
         <UserLoginForm toggleFormCurrent={toggleFormCurrent} closeForm={closeForm}/>
        )}
        </>
      ) : (
        <></>
      )
    
  )
}

export default UserForm