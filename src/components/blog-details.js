import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import Footer from './global-components/footer-v2';

const BlogList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Details"  />
        <BlogDetails />
        <Footer />
    </div>
}

export default BlogList

