import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const swiper = new Swiper('.reviews-slider', {
            grabCursor: true,
            loop: true,
            autoHeight: true,
            spaceBetween: 20,
            breakpoints: {
                0: { slidesPerView: 1 },
                700: { slidesPerView: 2 },
                1000: { slidesPerView: 3 },
            },
        });
        return () => {
            if (swiper && swiper.destroy) {
                swiper.destroy(true, true); // Destroy swiper instance and remove all listeners
            }
        };
    }, []);
    return (
        <div>
            <Header />
            <main>
                <div
                    className="heading"
                    style={{ background: "url('public/img-1.jpg') no-repeat" }}
                >
                    <h1>about us</h1>
                </div>
                <section className="about">
                    <div className="image">
                        <img src="public/about-img.jpg" alt="About Us" />
                    </div>
                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            perspiciatis aperiam hic in ut, natus molestiae enim molestias.
                            Totam in dolore repudiandae quaerat, neque nisi aut architecto
                            maiores facere voluptas.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
                            numquam molestias aut quae harum doloremque, reiciendis iste,
                            architecto, distinctio enim accusamus nesciunt. Excepturi corrupti,
                            laboriosam voluptates aliquam fugit vero dolorem?
                        </p>
                        <div className="icons-container">
                            <div className="icons">
                                <i className="fas fa-map"></i>
                                <span>top destinations</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-hand-holding-usd"></i>
                                <span>affordable prices</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-headset"></i>
                                <span>24/7 guide service</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="reviews">
                    <h1 class="heading-title">Client reviews</h1>
                    <div class="swiper reviews-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint sequi deleniti quod tenetur, ipsum labore dolore quasi similique vero.</p>
                                <h3>Jaiveer Singh</h3>
                                <span>Traveller</span>
                                <img src="public/pic-5.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quo recusandae placeat quisquam praesentium aliquid consequuntur libero iusto dolorum molestiae.</p>
                                <h3>Suchita Tripathi</h3>
                                <span>Traveller</span>
                                <img src="public/pic-4.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero quod architecto veritatis minus debitis omnis dolorum natus, nesciunt, est iste at quam eum magnam mollitia tempora placeat tenetur excepturi.</p>
                                <h3>Malenia Rodriguez</h3>
                                <span>Traveller</span>
                                <img src="public/pic-2.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quis perspiciatis eius culpa nobis quasi et facere in dolor?</p>
                                <h3>Beiji Bihan</h3>
                                <span>Traveller</span>
                                <img src="public/pic-6.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint sequi deleniti quod tenetur, ipsum labore dolore quasi similique vero.</p>
                                <h3>John Stewart</h3>
                                <span>Traveller</span>
                                <img src="public/pic-1.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint sequi deleniti quod tenetur, ipsum labore dolore quasi similique vero.</p>
                                <h3>Arthur Morgan</h3>
                                <span>Traveller</span>
                                <img src="public/pic-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
};

export default AboutPage;
