import React from 'react'

import Header from './header'
import Footer from './footer'
import styles from './layout.module.styl'

export default ({children})=>(
    <div className={styles.layoutContainer}>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
)