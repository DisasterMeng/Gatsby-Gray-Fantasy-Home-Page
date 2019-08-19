import React from 'react'

import Header from './header'
import Footer from './footer'

export default ({children})=>(
    <div>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
)