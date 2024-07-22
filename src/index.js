import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Routes } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import About from './components/about';
import Service from './components/service';
import ServiceV2 from './components/service-v2';
import ServiceDetails from './components/service-details';
import PortfolioStandard from './components/portfolio-standard';
import PortfolioFull from './components/portfolio-full';
import PortfolioMasonary from './components/portfolio-masonary';
import PortfolioDetails from './components/portfolio-details';
import Pricing from './components/pricing';
import Faq from './components/faq';
import Testimonial from './components/testimonial';
import Team from './components/team';
import BlogGrid from './components/blog-grid';
import BlogList from './components/blog-list';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import QuestLocation from './components/questLocation';
import News from './components/News';


class Root extends Component {
    render() {
        return(
            <HashRouter basename="/">
                <div>
                    <Routes>
                        <Route path="/" element={<HomeV1 />} />
                        <Route path="/home-v2" element={<HomeV2 />} />
                        <Route path="/home-v3" element={<HomeV3 />} />
                        <Route path="/home-v4" element={<HomeV4 />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/News" element={<News />} />
                        <Route path="/QuestLocation" element={<QuestLocation />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/service-v2" element={<ServiceV2 />} />
                        <Route path="/service-details" element={<ServiceDetails />} />
                        <Route path="/portfolio-standard" element={<PortfolioStandard />} />
                        <Route path="/portfolio-full" element={<PortfolioFull />} />
                        <Route path="/portfolio-masonary" element={<PortfolioMasonary />} />
                        <Route path="/portfolio-details" element={<PortfolioDetails />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/testimonial" element={<Testimonial />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/blog-grid" element={<BlogGrid />} />
                        <Route path="/blog-list" element={<BlogList />} />
                        <Route path="/blog-details" element={<BlogDetails />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
