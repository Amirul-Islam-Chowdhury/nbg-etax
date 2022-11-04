import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout(props) {
  return (


    <div>

        <Header/>

        <div className="content">{props.children}</div>



        <Footer/>
        
        
       </div>
  )
}

export default Layout