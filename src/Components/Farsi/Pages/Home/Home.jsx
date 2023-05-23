import React from 'react';

// Styles
import styles from './Home.module.css'

// Conmonents
import HeaderandLanding from './Header and Landing page/HeaderandLanding';
import AboutUs from './About Us/AboutUs';
import Services from '../../Services/Services';
import License from '../../License/License';
import Footer from '../../Footer/Fooer';

// Hovering Emergeny Call
import EmergencyCall from '../../Emergency Call/EmergencyCall';

const Home = () => {
    return ( 
            <div className={styles.continer}>
                <section className={styles.EmergencyCall}>
                    <  EmergencyCall/>
                </section>
                <section className={styles.HeaderandLanding}>
                    <  HeaderandLanding/>
                </section>
                <section className={styles.AboutUs}>
                    <  AboutUs/>
                </section>
                <section className={styles.Services}>
                    <  Services/>
                </section>
                <section className={styles.License}>
                    <  License/>
                </section>
                <section className={styles.Footer}>
                    <  Footer/>
                </section>
            </div>
     );
}
 
export default Home;