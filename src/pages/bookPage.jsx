import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const BookPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    } , []);
    return (
        <div>
            <Header />
            <main>
                <div
                    className="heading"
                    style={{ background: "url('/img-5.jpg') no-repeat" }}
                >
                    <h1>book now</h1>
                </div>

                <section className="booking">
                    <h1 className="heading-title">book your trips!</h1>
                    <form action="book_form.html" method="post" className="book-form">
                        <div className="flex">
                            <div className="inputBox">
                                <span>name :</span>
                                <input
                                    type="text"
                                    placeholder="enter your name"
                                    name="name"
                                />
                            </div>
                            <div className="inputBox">
                                <span>email :</span>
                                <input
                                    type="text"
                                    placeholder="enter your email"
                                    name="email"
                                />
                            </div>
                            <div className="inputBox">
                                <span>phone :</span>
                                <input
                                    type="number"
                                    placeholder="enter your phone number"
                                    name="phone"
                                />
                            </div>
                            <div className="inputBox">
                                <span>address :</span>
                                <input
                                    type="text"
                                    placeholder="enter your address"
                                    name="address"
                                />
                            </div>
                            <div className="inputBox">
                                <span>where to :</span>
                                <input
                                    type="text"
                                    placeholder="place you want to visit"
                                    name="location"
                                />
                            </div>
                            <div className="inputBox">
                                <span>how many :</span>
                                <input
                                    type="number"
                                    placeholder="number of guests"
                                    name="guests"
                                />
                            </div>
                            <div className="inputBox">
                                <span>arrivals :</span>
                                <input
                                    type="date"
                                    placeholder="enter your address"
                                    name="arrival"
                                />
                            </div>
                            <div className="inputBox">
                                <span>leaving :</span>
                                <input
                                    type="date"
                                    placeholder="enter your address"
                                    name="leaving"
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="submit"
                            className="btn"
                            name="send"
                        />
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default BookPage;
