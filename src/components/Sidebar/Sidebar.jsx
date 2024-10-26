import React from 'react'
import styles from '../../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Sidebar() {
  const {list} = useSelector(({categories}) => categories)
  
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>
       Categoies
      </div>
      <nav>
        <ul className={styles.menu}>
        {list.map(({id, name}) => (
          <li key={id} >
            <NavLink className={({siActive}) => `${styles.link} ${siActive ? styles.active : ""}`}
             to={`/categories/${id} `}>
              {name} 
            </NavLink>
          </li>
        ))}
          

        </ul>
      </nav>

      <div className={styles.footer}>
        <a href='/help' target='_blank' className={styles.link}>
Help
        </a>
        <a href='/help' target='_blank' className={styles.link} style={{textDecoration: "underline"}}>
Tems & Conditions
        </a>
      </div>
    </section>
  )
}

export default Sidebar