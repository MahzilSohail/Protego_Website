import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import SignIn from '@/components/custom/Signin'
import WhatsAppButton from '@/components/custom/Whatsappbtn'
import React from 'react'

function Signin() {
  return (
    <div>
      <Navbar/>
      <SignIn/>
      <WhatsAppButton/>
      <Footer/>
    </div>
  )
}

export default Signin