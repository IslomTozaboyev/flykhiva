import React, { useState } from "react";
import HomeWrapper from './HomeWrapper';
import Header from '../../Containers/Header';
// photos
import air_home from '../../img/home_air.png'
import icon__location from '../../img/icons/location.png'
import calendar from '../../img/icons/calendar.png'
import users from '../../img/icons/users.png'
import payment from '../../img/icons/payment.png'
import MyButton from '../../UI/Button/MyButton';
import services1 from "../../img/services_1.png"
import services2 from "../../img/services_2.png"
import services3 from "../../img/services_3.png"
import services4 from "../../img/services_4.png"
import services__photo from '../../img/services__photo.png'
import swiper_photo from '../../img/swiper1.png'
import swiper_photo2 from '../../img/swiper2.png'
import swiper_photo3 from '../../img/swiper3.png'
import swiper_photo4 from '../../img/swiper4.png'
import buy__price__img from '../../img/buy__prices__air.png'
import gallery from "../../img/gallery1.png"
import gallery2 from "../../img/gallery2png.png"
import gallery3 from "../../img/gallery3.png"
import gallery4 from "../../img/gallery4.png"
import contact__img1 from '../../img/contact1.png'
import contact__img2 from '../../img/contact2.png'
import login__img from '../../img/contact_login.png'
import login__icon from '../../img/login__icon.png'
import login__icon2 from '../../img/login__icon2.png'
import login__icon3 from '../../img/login__icon3.png'
import input__eye from "../../img/icons/input__eye.png"
// swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const hemeBoxData = [
    { type: 'text', border: true, img: icon__location, text: "Tashkent" },
    { type: 'text', border: true, img: calendar, text: "Where..." },
    { type: 'date', border: true, text: "12.11.2022", date: true },
    { type: 'text', border: true, img: calendar, text: "Back" },
    { type: 'number', border: true, img: users, text: "01" },
    { type: 'text', img: payment, text: "Payment..." },
]

const servicesData = [
    { duration: 1000, img: services1, title: 'Food and Drinks', subtitle: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
    { duration: 1000, img: services2, title: 'Medical care', subtitle: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
    { duration: 2000, img: services3, title: 'Communication', subtitle: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
    { duration: 2000, img: services4, title: 'Accuracy Exchange', subtitle: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
]

const swiperData = [
    { duration: 1000, img: swiper_photo, title: 'Samarkand_Urgench', price: '15$' },
    { duration: 1100, img: swiper_photo2, title: 'Samarkand_Fergana', price: '15$' },
    { duration: 1200, img: swiper_photo3, title: 'Samarkand_Namangan', price: '15$' },
    { duration: 1300, img: swiper_photo4, title: 'Samarkand_Stambul', price: '15$' },
    { duration: 1400, img: swiper_photo, title: 'Samarkand_Stambul', price: '15$' },
    { duration: 1500, img: swiper_photo2, title: 'Samarkand_Stambul', price: '15$' },
]

const buy__pricesData = [
    { duration: 700, title: `Изменено время авиарейса Ташкент-Бухара- Ташкент` },
    { duration: 900, title: `Отпразднуйте Новый год в Риге вместе с Uzbekistan Airways` },
    { duration: 1100, title: `Новая программа «Тайный пассажир»` },
    { duration: 1300, title: `Авиакомпания Uzbekistan Airways увеличивает частоту полётов в Дели` },
    { duration: 1500, title: `Изменено время авиарейса Ташкент-Бухара- Ташкент` },
    { duration: 1700, title: `Отпразднуйте  Новый год в Риге вместе с Uzbekistan Airways` },
    { duration: 1800, title: `Новая программа «Тайный пассажир»` },
    { duration: 1900, title: `Авиакомпания Uzbekistan Airways увеличивает частоту полётов в Дели` },
]

const Home = () => {
    const [eye, setEye] = useState(false)

    return <>
        <HomeWrapper>
            <div className='home my__container'>
                <Header />

                {/* home__info */}
                <div className='padding__my'>
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <Slide className="my__opacity" direction={"right"} duration={1500}>
                                    <Zoom >
                                        <img src={air_home} alt="air" />
                                    </Zoom>
                                </Slide>
                            </div>
                            <div className="col-md-6">
                                <Slide direction={"up"} cascade={false}  >
                                    <h4 className="home__title">
                                        OUR PLANES,  <br /> YOUR DESTINATIONS
                                    </h4>
                                </Slide>
                            </div>
                            <Fade direction="up">
                                <div style={{ marginTop: '56px' }} className="col-md-10 d-flex justify-content-center align-items-center">
                                    <div className="home__box d-flex align-items-center">
                                        {hemeBoxData.length > 0 && hemeBoxData?.map((value) => {
                                            return <div key={value.text} className={`box__subtitle ${value.border && 'my_border'} d-flex align-items-center`}>
                                                {value.img ? <img className='mx-2' src={value.img} alt="location_icon" /> : ''}
                                                <input type={value.type} placeholder={value.text} className={`mb-0 box__desc ${value.date ? 'w-100 mx-2 date__input' : ''}`} />
                                            </div>
                                        })}
                                    </div>
                                    <MyButton width={"154px"} height={"72px"} className={"ms-4"}>Search</MyButton>
                                </div>
                            </Fade>
                        </div>
                        <>
                            <div className='ps__box'>
                                <h4 className="mb-0 ps__box__title">Welcome to our website</h4>
                                <span className="mb-0 ps__box__subtitle">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish</span>
                            </div>
                        </>
                    </div>
                </div>
            </div>

            {/* services */}
            <div className="services__section padding__my">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <div className='services__text'>
                            <Fade direction="up" duration={1000}>
                                <h4 className="mb-0 services__title mb-3">Services</h4>
                            </Fade>
                            <Fade direction='up' duration={1000}>
                                <p className="mb-0 services__subtitle">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish</p>
                            </Fade>

                        </div>

                        <div className='services__boxes'>
                            <div className="services__box">
                                <div className="row">
                                    {servicesData.length > 0 && servicesData.map((value, index) => {
                                        return <Fade key={index} className='col-md-6 mb-5' direction="up" duration={value.duration}>
                                            <div>
                                                <div className='d-flex align-items-center'>
                                                    <img className='me-3' src={value.img} alt="servicesPhoto" />
                                                    <h4 className='mb-0 services__box__title'>{value.title}</h4>
                                                </div>
                                                <p className='mb-0 services__box__subtitle mt-3'>{value.subtitle}</p>
                                            </div>
                                        </Fade>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slide direction="right" duration={2000} className='col-12 col-md-5'>
                        <img className='services__photo mt-5' src={services__photo} alt="services__photo" />
                    </Slide>
                </div>
            </div>


            {/* swiper__section */}
            <div className="swiper__section ">
                <div className="padding__my">
                    <Slide direction="up" duration={1000}>
                        <p className="mb-0 section__title">Buy at competitive prices</p>
                    </Slide>
                    <Slide direction="up" duration={1000}>
                        <p className="mb-0 section__subtitle">Special offers on popular destinations</p>
                    </Slide>
                </div>
                <div className="row justify-content-center my_swiper">
                    <div className="col-12">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={200}
                            freeMode={true}
                            loop={true}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >

                            {swiperData?.length > 0 && swiperData.map((value, index) => {
                                return <SwiperSlide key={index}>
                                    <Slide direction="up" duration={value.duration}>
                                        <img src={value.img} alt={value.title} />
                                        <Slide direction="up" duration={value.duration}>
                                            <p className="mb-0 swiper__title mt-3">{value.title}</p>
                                            <p className="mb-0 swiper__price">from <span className="mb-0 text-danger">{value.price}</span></p>
                                        </Slide >
                                    </Slide>
                                </SwiperSlide>
                            })}

                        </Swiper>

                    </div>
                </div>
            </div>


            {/* buy__prices */}
            <div className="buy__prices padding__my">
                <div className="">
                    <Slide direction="up" duration={1000}>
                        <p className="mb-0 section__title">Buy at competitive prices</p>
                    </Slide>
                    <Slide direction="up" duration={1000}>
                        <p className="mb-0 section__subtitle">Special offers on popular destinations</p>
                    </Slide>
                </div>
                <div className="d-flex flex-wrap">
                    {buy__pricesData.length > 0 && buy__pricesData?.map((value, index) => {
                        return <Slide direction="up" duration={value.duration}
                            style={{
                                backgroundImage: `url(${buy__price__img})`,
                                backgroundSize: 'cover',
                                width: "290px",
                                height: '378px',
                                marginRight: '80px',
                                position: "relative"
                            }}
                            key={index}
                            className="col-12 col-md-6 mb-5 prices"
                        >
                            <p className="mb-0 buy__prices__title">{value.title}</p>
                        </Slide>
                    })}
                </div>
            </div>


            {/* Gallery */}
            <div className="gallery padding__my">
                <Slide direction="up" duration={1000}>
                    <p className="mb-0 section__title">Gallery</p>
                </Slide>
                <div className="images position-relative">
                    <Slide direction="left" duration={1000}>
                        <img className="position-absolute gallery gallery1" src={gallery} alt="images" />
                    </Slide>
                    <Slide direction="left" duration={1500}>
                        <img className="position-absolute gallery gallery2" src={gallery2} alt="images" />
                    </Slide>
                    <Slide direction="left" duration={2000}>
                        <img className="position-absolute gallery gallery3" src={gallery3} alt="images" />
                    </Slide>
                    <Slide direction="right" duration={1000}>
                        <img className="position-absolute gallery gallery4" src={gallery4} alt="images" />
                    </Slide>
                </div>
            </div>


            {/* Contact_us */}
            <div className="contact__section position-relative padding__my mb-5">
                <Fade direction="up" duration={1000}>
                    <p className="mb-0 section__title">Contact us</p>
                </Fade>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="contact__img1" src={contact__img1} alt="contact__img" />

                        <Slide direction={"right"} duration={1500}>
                            <img className="contact__img2" src={contact__img2} alt="contact__img" />
                        </Slide>
                    </div>

                    <div style={{
                        backgroundImage: `url(${login__img})`,
                        backgroundSize: 'cover',
                    }}
                        className="col-12 col-md-6 login d-flex flex-column">
                        <p className="mb-0 login__title text-center">Log in</p>

                        <label className="label mt-4 mb-2" htmlFor="first__name">Email Address</label>
                        <input className="my__input" placeholder="Email" type="email" required name="first__name" id="first__name" />

                        <label className="label mt-3 mb-2" htmlFor="first__name">Password</label>
                        <input className="my__input" placeholder="Password" type={`${eye ? "password" : 'input'}`} name="first__name" id="first__name" />
                        <img onClick={() => setEye(!eye)} className="eye" style={{ width: '12px', height: '12px' }} src={input__eye} alt="eye" />

                        <MyButton
                            width={"322.13px"}
                            height={"41.66px"}
                            className="mt-4"
                        >Log in</MyButton>

                        <small className="text-center mt-4">Reset Password?</small>
                        <span className="mb-0 my-3 text-white text-center">Or</span>

                        <div className="d-flex align-items-center justify-content-center mt-3">
                            <img className="login__icon" src={login__icon} alt="login__icon" />
                            <img className="login__icon mx-3" src={login__icon2} alt="login__icon" />
                            <img className="login__icon" src={login__icon3} alt="login__icon" />
                        </div>

                        <div className="d-flex align-items-center justify-content-center mt-3">
                            <small className="mb-0 text-white me-3">Don’t have account yet?</small>
                            <small className="mb-0">New Account</small>
                        </div>

                    </div>
                </div>
            </div>
        </HomeWrapper>
    </>


};

export default Home;