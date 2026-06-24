
import Footer from '@/components/custom/Footer'
import Homecard from '@/components/custom/Homecard'
import Navbar from '@/components/custom/Navbar'
import Whatsappbutton from '@/components/custom/Whatsappbtn'
import React from 'react'
import ProtegoFeatures from '@/components/custom/Features'
import CookieConsent from '@/components/custom/CookieConsent'
import ProtegoAppFeatures from '@/components/custom/Appfeatures'
import WhyProtego from '@/components/custom/Whyprotego'
import HowItWorks from '@/components/custom/Howitworks'
import FeatureSlider from '@/components/custom/Whichone'

function Homepage() {
  
  return (
    <div className="bg-gradient-to-br from-blue-100 via-fuchsia-100 to-indigo-100" >
    
      <Navbar />
      <Homecard />
      <ProtegoFeatures/>
      <ProtegoAppFeatures/>
      <WhyProtego/>
      <HowItWorks/>
      <FeatureSlider/>
      <CookieConsent/>
      <Whatsappbutton />
      <Footer />
    </div>

  )
}

export default Homepage