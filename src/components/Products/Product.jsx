import React, { useEffect, useState } from 'react'
import styles from '../../styles/Product.module.css'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes'

const Product = ({images, title, price, description}) => {
const currentImg = images[0]
const sizes = [4, 4.5, 5];
const [currentImage, setCurrentImage] = useState();
const [currentSize, setCurrentSize] = useState();

useEffect(() => {
  if (!images.length) return;

  setCurrentImage(images[0]);
}, [images]);


  return (
    <section className={styles.product}>
        <div className={styles.images}>
        <div className={styles.current}
        style={{ backgroundImage: `url(${currentImg})` }}
        />
        <div className={styles["images-list"]}>
            {images.map((image,i)=>(
              <div
              key={i}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
                  />
    ))}
        </div>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.price}>
            {price}
          </div>
          <div className={styles.color}>
            <span>Color:</span>Green
          </div>
          <div className={styles.sizes}>
            <span>Sizes:</span>
            <div className={styles.list}>
              {sizes.map(size => (
                <div onClick={() => setCurrentSize(size)} className={`${styles.size}`}c  key={size}>
                  {size}
                </div>
              ))}

            </div>
          </div>
<p className={styles.description}>{description}</p>

<div className={styles.actions}>
<button className={styles.add}>Add to cart</button>
<button className={styles.favorite}>Add to favorites</button>
</div>
<div className={styles.bottom}>
  <div className={styles.purchase}>19 people purchase</div>
  <Link to={ROUTES.HOME}>Return to store</Link>
</div>
        </div>
    </section>
  )
}

export default Product