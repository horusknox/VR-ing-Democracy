import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Contact from './section-components/contact-page';
import Footer from './global-components/footer';

const ContactPage = () => {
    return <div>
        <br></br>
        <br></br>
        <br></br>
        <Navbar />
        <PageHeader headertitle="Contact Us"  />
        <Contact />
        <Footer />
    </div>
}

export default ContactPage

