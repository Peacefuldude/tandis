import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Service.module.css'

const Service = ({productData}) => {

    // WIZYWIG in use
    const createText = () => {
        return {__html: productData.description}
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.imgDiv}>
                <img src={productData.pic} alt="picture" />
            </div>
            <div className={styles.textDiv}>
                <h3>{productData.title}</h3>
                <div className={styles.description}>
                    <p dangerouslySetInnerHTML={createText()}></p>
                </div>
                <div className={styles.details}>
                    <section>
                        <p>مدل کالا: Ch120aa</p>
                        <p>گارانتی: 2سال</p>
                    </section>
                    <section>
                        <p>قیمت: 15.000.000</p>
                        <p>تعداد: 12</p>
                    </section>
                </div>
            </div>
        </div>
     );
}
 
export default Service;