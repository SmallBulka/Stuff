import React, { useState } from "react";

import styles from "../../styles/Home.module.css";

import bannerImg from "../../styles/images/banner.png";

const Banner = () => {
  const [modal, setModal] = useState();
    const toggleModal = () => {
        setModal(!modal)

    }
  return (
    
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        NEW YEAR
        <span>SALE</span>
      </p>
      <button className={styles.more} onClick={toggleModal}>See more</button>
      {modal && (


<div className={styles.modal}>
    <div  className={styles.contentt}>
        <div >
            <h2 >10% на первый заказ</h2>
            <div className={styles.leftt}></div>
            <p className={styles.text}>Подпишитесь на рассылку от Staff, чтобы воспользоваться предложением</p>
            <button onClick={toggleModal}  className={styles.sm}>Подписаться</button>
            <p className={styles.p}>*Не больше одного письма в неделю</p>           
            

        </div>

    </div>
</div>
)}
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <p className={styles.discount}>
        save up to <span>50%</span> off
      </p>
    </div>
  </section>
  )
};

export default Banner;
