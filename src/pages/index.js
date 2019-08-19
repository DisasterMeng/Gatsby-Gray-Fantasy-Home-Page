import React from "react"
import Layout from '../components/layout'


import styles from './home.module.css'

export default () => (
    <Layout>
        <div className={styles.homeContainer}>
            <div className={styles.displayContainer}>
               Home
            </div>
        </div>
    </Layout>

)
