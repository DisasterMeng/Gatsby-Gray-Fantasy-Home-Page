import React from "react"
import Layout from '../components/layout'


import styles from './home.module.styl'

import Infinite from '../assets/icons/infinite.svg'


const functions = [
    {
        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
]

const renderFunItem = (item, index) => (
    <div className={styles.funItem} key={index}>

        <Infinite></Infinite>
        <p className={styles.itemDesc}>{item.desc}</p>
    </div>
)

export default () => (
    <Layout>
        <div className={styles.homeContainer}>
            <div className={styles.displayContainer}>
                <div className={styles.displayTextContainer}>
                    <p className={styles.displayTitle}>Introduce</p>
                    <p className={styles.displaySecondTitle}>A simple blog based on the separation of Django and Vue.</p>
                </div>
            </div>

            <div className={styles.descContainer}>
                <p>Hello ......</p>
                <p>Afdkljfkdjfkd</p>
                <p>Cdkfjkdfdfdello ></p>
            </div>

            <div className={styles.funContainer}>
                {functions.map((item, index) => renderFunItem(item, index))}
            </div>

        </div>
    </Layout>

)
