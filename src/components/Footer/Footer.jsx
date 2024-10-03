import React from 'react'
import styles from '../../styles/Footer.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import logo from '../../styles/images/logo.svg'



function Footer() {
  return (
    <section className={styles.footer}>
<div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={logo} alt="Stuff"/>
            </Link>
        </div>

        <div className={styles.rights}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. {" "}
          <a 
          href='https://t.me/eveliinushka'
          target='_blank'
          rel='noreferrer'
          >Doli</a>
        </div >

        <div className={styles.socials}>
        <a 
          href='https://t.me/eveliinushka'
          target='_blank'
          rel='noreferrer'
          >
            <svg className={styles["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
          </a>
          <a 
          href='https://t.me/eveliinushka'
          target='_blank'
          rel='noreferrer'
          >
            <svg className={styles["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                    </svg>
          </a>
          <a 
          href='https://t.me/eveliinushka'
          target='_blank'
          rel='noreferrer'
          >
            <svg className={styles["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                    </svg>
          </a>
                    

        </div>
    </section>
  )
}

export default Footer