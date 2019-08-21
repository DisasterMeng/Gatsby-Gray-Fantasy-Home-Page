import React from 'react'
import { Link } from "gatsby"

import styles from './header.module.styl'


export default class Header extends React.Component {


    constructor(props) {
        super(props)
        this.state = { active: 'display' }
    }

    linkClickHandler(link) {
        this.setState((state)=>({active:link}))
    }

    render() {
        return (

            <div className={styles.headerContainer}>

                <p className={styles.title}>GrayFantasy</p>
                
                <ul className={styles.tabLayout}>
                    <li className={this.state.active==='display'?styles.active:''}>
                        <a href='#display' onClick={()=>this.linkClickHandler('display')}>About</a>
                    </li>
                    <li className={this.state.active==='contribution'?styles.active:''}>
                        <a href='#contribution' onClick={()=>this.linkClickHandler('contribution')}>Contribution</a>
                    </li>
                    <li className={this.state.active==='about'?styles.active:''}>
                        <a href='#about' onClick={()=>this.linkClickHandler('about')}>About</a>
                    </li>
                    <li className={this.state.active==='github'?styles.active:''}>
                        <a href='#github' onClick={()=>this.linkClickHandler('github')}>Github</a>
                    </li>
                </ul>

            </div>

        )
    }
}

