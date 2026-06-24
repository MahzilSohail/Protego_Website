import Productcard from '@/components/custom/ModelcardPro'
import Footer from '@/components/custom/Footer'
import LiteModelHero from '@/components/custom/Litemodelcard'
import Navbar from '@/components/custom/Navbar'
import Whatsappbutton from '@/components/custom/Whatsappbtn'
import React from 'react'
import Productcardlite from '@/components/custom/ModelcardLite'

function Homepage() {
  
  return (
    <div>
      <Navbar />
      {/* <LiteModelHero/> */}
      <Productcardlite/>
      <Whatsappbutton />
      <Footer />
    </div>

  )
}

export default Homepage