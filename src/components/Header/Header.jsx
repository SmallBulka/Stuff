import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import avatar from '../../styles/images/avatar.jpg'
import logo from '../../styles/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../featurs/user/userSlice'

function Header() {
    const dispatch= useDispatch()
    const {currentUser} = useSelector(({user})=> user);
    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true))
    }

    const [values, setValues] = useState({
        name:"Guest",
        avatars: avatar,
      });

      useEffect(()=> {
        if(!currentUser) return;
        setValues(currentUser)
      },[currentUser])
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={logo} alt="Stuff"/>
            </Link>
        </div>
            <div className={styles.info}>
                <div className={styles.user} onClick={handleClick}>
                    <div className={styles.avatar} style={{backgroundImage: `url(${values.avatars})`}}/>
                    <div className={styles.username}>{values.name}</div>
                </div>
                <form className={styles.form}>
                <div className={styles.icon}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                </div>
                <div className={styles.input}>
                    <input type='search' 
                    name="search" 
                    placeholder='Search for anyting' 
                    autoComplete='off'
                    onChange={() => {}}
                    value=""
                    />
                   
                </div>

                {false && <div className={styles.box}></div>}
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.HOME} className={styles.favourites}>
                    <svg className={styles["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                    </svg>
                    </Link>

                    <Link to={ROUTES.CART} className={styles.cart}>
                    <svg className={styles["icon-cart"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                    </svg>
                    <span className={styles.count}>4</span>
                    </Link>
                </div>
            </div>
        
    </div>
  )
}

export default Header