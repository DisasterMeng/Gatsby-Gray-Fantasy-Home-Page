import React from 'react'
import { Link } from "gatsby"

import styles from './header.module.styl'

export default () => (

    <div className={styles.headerContainer}>

        <p className={styles.title}>GrayFantasy</p>

        <ul className={styles.tabLayout}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contribution'>Contribution</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/github'>Github</Link></li>
        </ul>

    </div>

)