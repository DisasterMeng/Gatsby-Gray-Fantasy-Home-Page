import React from "react"
import Layout from '../components/layout'


import styles from './home.module.styl'

export default () => (
    <Layout>
        <div className={styles.homeContainer}>
            <div className={styles.displayContainer}>
                <div className={styles.displayTextContainer}>
                    <p className={styles.displayTitle}>Introduce</p>
                    <p className={styles.displaySecondTitle}>A simple blog based on the separation of Django and Vue.</p>
                </div>

            </div>
        </div>
    </Layout>

)
