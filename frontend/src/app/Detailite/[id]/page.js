import React from 'react'
import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import Detailcard from '@/components/custom/DetailcardLite'
import Whatsappbutton from '@/components/custom/Whatsappbtn'
function Detailite() {
    return (
        <div>
            <Navbar />
            <Detailcard/>
            <Whatsappbutton />
            <Footer />
        </div>
    )
}

export default Detailite