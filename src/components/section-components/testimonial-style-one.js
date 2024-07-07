import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialOne extends Component {

	    componentDidMount() {

	    const $ = window.$;
	    
	        if($('.js-tilt').length) {
		        $('.js-tilt').tilt({
		            maxTilt: 20,
		            perspective:700, 
		            glare: true,
		            maxGlare: .3
		        })
		    }

		    if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
	  }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="testimonials-one">
			  <div className="container">
			    <div className="testimonials-one__top">
			      <div className="block-title text-left">
			        <p><span>Users say</span></p>
			        <h3>This is what our users say about us <br/> </h3>
			        <div className="block-title__line" />{/* /.block-title__line */}
			      </div>{/* /.block-title */}
			      <div className="testimonials-one__carousel-btn__wrap">
			        <a href="#" className="testimonials-one__carousel-btn-left"><i className="fa fa-angle-double-left" /></a>
			        <a href="#" className="testimonials-one__carousel-btn-right"><i className="fa fa-angle-double-right" /></a>
			      </div>
				  {/* /.testimonials-one__carousel-btn__wrap */}
			    </div>{/* /.testimonials-one__top */}
			    {/* <div className="testimonials-one__arrow-decor-wrap">
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			    </div> */}
				{/* /.testimonials-one__arrow-decor-wrap */}
			    <div className="testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme" data-carousel-prev-btn=".testimonials-one__carousel-btn-left" data-carousel-next-btn=".testimonials-one__carousel-btn-right" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 65, &quot;stagePadding&quot;: 50, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 20 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-1.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"This VR app was exactly what I needed. It provided a thorough understanding of my voting rights and the entire process. The interactive elements kept me engaged, and I felt well-prepared on election day."</p>
			            <h3>Elena T.</h3>
			            <span>Entry-Level Employee</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-2.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"The app is a brilliant tool for new immigrants. It breaks down complex information into easy-to-understand segments. The VR aspect makes it interactive and memorable. I felt ready and confident when I went to vote."</p>
			            <h3>Omar N.</h3>
			            <span>Gap Year Traveler</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-3.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"I loved using this VR app to learn about voting. It was informative and engaging. The realistic scenarios helped me understand what to expect, and I felt so much more confident on voting day."</p>
			            <h3>Sophia P.</h3>
			            <span>Community College Student</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-1.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"I can't thank the creators of this VR app enough. It made a huge difference in how I approached my first voting experience. The simulations were spot-on and really helped me feel at ease."</p>
			            <h3>Miguel L.</h3>
			            <span>Part-time Worker</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-2.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"This app is fantastic! It gave me the confidence to participate in my first election. The virtual environment made it easy to understand my rights and the voting process. I felt so empowered!"</p>
			            <h3>Fatima S.</h3>
			            <span>University Student</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-3.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"The VR experience was immersive and educational. It made learning about voting rights fun and accessible. I appreciated the detailed explanations and practical tips. Great app for first-time voters!"</p>
			            <h3>Jin H.</h3>
			            <span>Intern at Google</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-1.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"As a new citizen, I found this VR app incredibly helpful. It demystified the voting process and empowered me with the knowledge I needed. I went to vote feeling prepared and confident."</p>
			            <h3>Aisha K.</h3>
			            <span>Recent Graduate</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-2.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"I was always nervous about voting in a new country, but this app really helped me understand the process. The virtual scenarios were realistic and informative. It was like having a personal guide."</p>
			            <h3>Carlos M.</h3>
			            <span>High School Senior</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          {/* <div className="testimonials-one__image"> */}
			            {/* <img src={publicUrl+"assets/images/testimonials/testimonial-1-3.jpg"} alt={ imagealt } /> */}
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>"This VR app was a game-changer for me. It made learning about my voting rights so engaging and interactive. I felt so much more confident going to the polls for the first time. Highly recommend it to all new immigrants!"</p>
			            <h3>Emily R.</h3>
			            <span>College Student</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          {/* </div> */}
					  {/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			    </div>{/* /.testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme */}
			  </div>{/* /.container */}
			</section>
			  

        }
}

export default TestimonialOne