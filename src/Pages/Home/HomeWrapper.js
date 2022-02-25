import styled from "styled-components";

const HomeWrapper = styled.div`
  .padding__my {
    padding: 183px 50px 0 190px;
  }
  .section__title {
    font-weight: bold;
    font-size: 50px;
    line-height: 82px;
    color: #1f1f1f;
  }
  .section__subtitle {
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #828282;
    margin-bottom: 120px !important;
  }

  .my__opacity {
    opacity: 1;
  }

  //home__styles
  .home {
    position: relative;
    background-image: linear-gradient(
      to right,
      #f58434,
      #f47332,
      #f36132,
      #f04d34,
      #ed3437
    );
    height: 100vh;

    .home__title {
      font-style: normal;
      font-weight: 900;
      font-size: 68px;
      line-height: 99px;
      color: #ffffff;
      position: relative;
      left: -150px;
    }

    .home__big__box {
      margin-left: 60px;
      .home__box {
        width: 1208px;
        height: 72px;
        background: #ffffff;
        border-radius: 10px;
        padding: 0 10px;

        .box__subtitle {
          height: 24px;

          &.my_border {
            border-right: 1px solid #000000;
          }

          .box__desc {
            border: none;
            outline: none;
            background-color: transparent;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #111111;
            width: 70%;
          }
          .date__input {
            color: #777 !important;
          }
        }
      }
    }
    .ps__box {
      position: absolute;
      bottom: -250px;
      transform: translateX(10%);
      width: 1250px;
      height: 382px;
      background: #ffffff;
      box-shadow: 0px 12px 68px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 80px;

      .ps__box__title {
        font-weight: bold;
        font-size: 60px;
        line-height: 82px;
        color: #1f1f1f;
      }
      .ps__box__subtitle {
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #000000;
      }
    }
  }

  /* services__styles */
  .services__section {
    margin-top: 200px;

    .services__text {
      .services__title {
        font-weight: bold;
        font-size: 60px;
        line-height: 82px;
        color: #1f1f1f;
      }
      .services__subtitle {
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
      }
    }
    .services__boxes {
      margin-top: 50px;
      .services__box {
        .services__box__title {
          font-weight: 600;
          font-size: 24px;
          line-height: 33px;
          color: #000000;
        }
        .services__box__subtitle {
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: #000000;
        }
      }
    }
    .services__photo {
      margin-left: 80px;
    }
  }

  /* swiper__section */
  .swiper__section {
    position: relative;

    .swiper__photo {
      transition: 0.5s;
    }
    .swiper__photo:hover {
      transform: scale(1.1);
      border-radius: 20px;
    }

    .my_swiper {
      padding-left: 200px;

      .swiper__title {
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #1f1f1f;
      }
      .swiper__price {
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        color: #1f1f1f;
      }
    }
  }

  /* buy__price__data */
  .buy__prices {
    .buy__boxes {
      overflow: hidden;
      &:hover .buy__prices__title {
        position: absolute;
        bottom: 15px;
      }
    }
    .prices {
      transition: 0.5s;
      &::before {
        content: "";
        transition: 1s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .prices:hover {
      cursor: pointer;
      transform: scale(1.08);
      &::before {
        /* background: linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, #161616 100%); */
        box-shadow: inset 0 -50px 150px 0px #000;
      }
    }

    .buy__prices__title {
      position: absolute;
      bottom: -150px;
      left: 15px;
      font-weight: normal;
      font-size: 24px;
      line-height: 33px;
      color: #ffffff;
      transition: 0.8s;
    }
  }

  /* gallery__styles */
  .big__gallery {
    height: 100vh;
    position: relative;
    padding: 0 185px;

    .images {
      margin-top: 80px;
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 30px;

      .gallery {
        width: 100%;
        height: 100%;
        transition: 0.5s;
        object-fit: cover;

        filter: grayscale();
        &:hover {
          filter: none;
          transform: scale(1.1);
        }
      }

      .aos-init {
        overflow: hidden;
        border-radius: 10px;
      }
      .aos-init:first-child {
        grid-column: span 5;
      }
      .aos-init:nth-child(2) {
        grid-column: span 3;
      }
      .aos-init:nth-child(3) {
        grid-column: span 4;
        grid-row: span 2;
      }
      .aos-init:nth-child(4) {
        grid-column: span 8;
      }
    }
  }

  /* contact__section */
  .contact__section {
    /* margin-top: 800px; */
    .contact__img2 {
      position: absolute;
      top: -550px;
      left: 0px;
    }

    .eye {
      position: absolute;
      right: 22%;
      top: 42%;
      cursor: pointer;
    }

    .login {
      width: 517px;
      height: 647px;
      position: relative;
      /* position: absolute;
      right: 230px;
      padding: 0 100px; */
      .login__form {
        margin-left: 80px;
      }
      .login__title {
        font-weight: bold;
        font-size: 30.3981px;
        line-height: 38px;
        color: #fff;
        margin: 80px 0 30px 0;
      }
      .my__input {
        background: #f8f8f8;
        border-radius: 8px;
        border: none;
        outline: none;
        width: 322px;
        height: 46px;
        padding: 0 10px;
        &::placeholder {
          font-style: normal;
          font-weight: 450;
          font-size: 10.4222px;
          line-height: 16px;
          color: #171832;
          opacity: 0.6;
        }
      }
      .label {
        font-weight: 500;
        font-size: 13.8963px;
        line-height: 18px;
        color: #ffffff;
      }
      .login__icon {
        width: 46px;
        height: 46px;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          transform: scale(1.1);
          transform: translateY(-10px);
        }
      }
    }
  }

  @media screen and (max-width: 1700px) {
    .home__title {
      font-size: 60px !important;
      position: relative;
      left: -100px !important;
    }
    .home__air {
      width: 940px;
    }
    .padding__my {
      padding: 170px 50px 0 140px;
    }
    .home__big__box {
      margin-left: 0px !important;
    }
    .ps__box {
      transform: translateX(6%) !important;
      width: 1200px;
      height: 380px;
      .ps__box__title {
        font-size: 58px !important;
      }
      .ps__box__subtitle {
        font-size: 17.5px;
      }
    }
    .my_swiper {
      padding-left: 140px !important;
    }
    .big__gallery {
      padding: 0px 100px 0 150px !important;
    }
  }
  @media screen and (max-width: 1500px) {
    .home__title {
      font-size: 55px !important;
      position: relative;
      left: -20px !important;
    }
    .home__air {
      width: 900px;
    }
    .padding__my {
      padding: 170px 50px 0 100px;
    }
    .home__big__box {
      width: 1200px;
    }
    .ps__box {
      transform: translateX(2%) !important;
      width: 1100px;
      height: 370px;
      .ps__box__title {
        font-size: 55px !important;
      }
      .ps__box__subtitle {
        font-size: 17px;
      }
    }
    .my_swiper {
      padding-left: 110px !important;
    }
    .big__gallery {
      padding: 0px 80px 0 100px !important;
    }
  }

  @media screen and (max-width: 1400px) {
    .ps__box {
      transform: translateX(3%) !important;
      width: 1100px !important;
      height: 360px;
      .ps__box__title {
        font-size: 50px !important;
      }
      .ps__box__subtitle {
        font-size: 16.5px;
      }
    }
    .services__photo {
      margin-left: 0 !important;
      position: relative;
      top: 220px;
      left: -100px;
      width: 450px;
    }
    .login__photos {
      margin: 0 auto;
      .contact__img1 {
        margin: 0 auto;
        width: 640px;
        height: 650px;
      }
      .contact__img2 {
        left: -120px;
        width: 850px;
        height: 380px;
        object-fit: contain;
      }
    }
    .login {
      margin: 0 auto;
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 1300px) {
    .home {
      height: 90vh;
    }
    .home__title {
      font-size: 48px !important;
      line-height: 150% !important;
      position: relative;
      left: 0px !important;
    }
    .home__air {
      width: 800px;
    }
    .padding__my {
      padding: 160px 50px 0 120px;
    }
    .home__big__box {
      width: 1000px;
      .box__desc {
        font-size: 16px !important;
      }
      .button {
        width: 120px !important;
      }
    }
    .ps__box {
      transform: translateX(8%) !important;
      width: 900px !important;
      height: 350px !important;
      .ps__box__title {
        font-size: 48px !important;
      }
      .ps__box__subtitle {
        font-size: 15.5px;
      }
    }
    .my_swiper {
      padding-left: 130px !important;
    }
    .big__gallery {
      padding: 0px 70px 0 130px !important;
    }
  }
  @media screen and (max-width: 1200px) {
    .login__photos {
      margin: 0 auto;
      padding-left: 170px;
      .contact__img1 {
        margin: 0 auto;
        width: 600px;
        height: 620px;
      }
      .contact__img2 {
        left: -200px;
        width: 800px;
        height: 360px;
        object-fit: contain;
      }
    }
    .login {
      margin: 0 auto;
      margin-top: 50px;
    }
  }
  @media screen and (max-width: 1100px) {
    .home {
      height: 85vh;
    }
    .home__title {
      font-size: 42px !important;
      line-height: 140% !important;
      position: relative;
      left: 0px !important;
    }
    .home__air {
      width: 700px;
      /* height: 383px; */
    }
    .padding__my {
      padding: 150px 0px 0 50px;
    }
    .home__big__box {
      width: 950px;
      .box__desc {
        font-size: 15px !important;
      }
      .button {
        width: 110px !important;
      }
    }
    .ps__box {
      transform: translateX(12%) !important;
      width: 800px !important;
      height: 340px !important;
      .ps__box__title {
        font-size: 46px !important;
      }
      .ps__box__subtitle {
        font-size: 15px;
      }
    }
    .services__photo {
      position: relative;
      top: 280px;
      left: -100px;
      width: 400px;
    }
    .my_swiper {
      padding-left: 50px !important;
    }
    .big__gallery {
      padding: 0px 50px 0 50px !important;
    }
  }
  @media screen and (max-width: 1000px) {
    .home {
      height: 85vh;
    }
    .home__title {
      font-size: 42px !important;
      position: relative;
      top: -40px;
      left: -450px !important;
      width: 700px;
    }
    .home__air {
      width: 800px;
    }
    .padding__my {
      padding: 150px 0px 0 80px;
    }
    .home__big__box {
      width: 800px;
      .box__desc {
        font-size: 15px !important;
      }
      .button {
        width: 110px !important;
      }
      .six {
        display: none !important;
      }
    }
    .ps__box {
      transform: translateX(5%) !important;
      width: 750px !important;
      height: 330px !important;
      .ps__box__title {
        font-size: 45px !important;
      }
      .ps__box__subtitle {
        font-size: 14.5px;
      }
    }
    .my_swiper {
      padding-left: 90px !important;
    }
    .big__gallery {
      padding: 0px 40px 0 60px !important;
    }
    .login__photos {
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
    .home__title {
      position: relative;
      top: -40px;
      left: -390px !important;
    }
    .home__air {
      width: 700px;
      position: relative;
      top: 50px;
    }
    .padding__my {
      padding: 150px 0px 0 80px;
    }
    .home__big__box {
      width: 700px;
      margin-top: 100px !important;
      .box__desc {
        font-size: 15px !important;
      }
      .button {
        width: 110px !important;
      }
      .six,
      .five {
        display: none !important;
      }
    }
    .ps__box {
      transform: translateX(0%) !important;
      width: 700px !important;
      height: 330px !important;
      .ps__box__title {
        font-size: 44px !important;
      }
      .ps__box__subtitle {
        font-size: 14px;
      }
    }
  }
`;
export default HomeWrapper;
