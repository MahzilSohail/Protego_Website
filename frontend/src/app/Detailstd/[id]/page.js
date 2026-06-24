import React from 'react'
import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import Detailcard from '@/components/custom/DetailcardStd'
import Whatsappbutton from '@/components/custom/Whatsappbtn'
function Detailstd() {
    return (
        <div>
            <Navbar />
            <Detailcard/>
            <Whatsappbutton />
            <Footer />
        </div>
    )
}

export default Detailstd