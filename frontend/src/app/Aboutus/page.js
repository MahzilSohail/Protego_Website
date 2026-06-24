import About from '@/components/custom/About'
import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import WhatsAppButton from '@/components/custom/Whatsappbtn'
import React from 'react'

function Aboutus() {
  return (
    <div>
      <Navbar/>
      <About/>
      <WhatsAppButton/>
      <Footer/>
    </div>
  )
}

export default Aboutus