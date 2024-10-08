import React from 'react'
import styles from "../../styles/Modal.module.css";

function Modal({active, setActive}) {
  return (
    <div className={styles.active} onClick={()=> setActive(false)}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.right}>
            <h2>10% на первый заказ</h2>
            <p>Подпишитесь на рассылку от Staff, чтобы воспользоваться предложением</p>
            <p>Не больше одного письма в неделю </p>
            </div>
            <div className={styles.left}>
            </div>
            

        </div>
    </div>
  )
}

export default Modal