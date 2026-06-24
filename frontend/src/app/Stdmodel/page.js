import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import Stdmodelcard from '@/components/custom/Stdmodelcard'
import WhatsAppButton from '@/components/custom/Whatsappbtn'
import React from 'react'
import Productcardstd from '@/components/custom/ModelcardStd';

function Stdmodel() {
  return (
    <div>
        <Navbar/>
        {/* <Stdmodelcard/> */}
        <Productcardstd/>
        <WhatsAppButton/>
        <Footer/>
    </div>
  )
}

export default Stdmodel