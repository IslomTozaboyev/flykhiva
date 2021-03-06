import styled from "styled-components";

const FooterWrapper = styled.div`
  .footer {
    height: 100%;
    left: 0px;
    background: #7d352f;
    color: #ffffff;
    margin-top: 100px;
    padding: 65px 0 65px 187px;

    .flykhiva__logo {
      width: 119px;
      height: 46px;
      margin-right: 120px;
    }

    .footer__link {
      transition: 0.5s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .footer__text {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #ffffff;
    }
    .number__mobile {
      display: none;
    }
  }
  @media screen and (max-width: 1500px) {
    .footer {
      padding: 65px 0 65px 100px !important;
    }
    .flykhiva__logo {
      margin-right: 80px;
    }
  }
  @media screen and (max-width: 1000px) {
    .footer {
      padding: 65px 0 0 100px !important;
    }
    .flykhiva__logo {
      margin-right: 60px;
    }
  }

  @media screen and (max-width: 900px) {
    .footer {
      padding: 50px !important;
    }
    .down__texts {
      margin-top: 50px;
    }
  }
  @media screen and (max-width: 500px) {
    .number {
      display: none;
    }
    .logo__box {
      width: 50% !important;
    }
    .flykhiva__logo {
      width: 100px !important;
    }
  }
  @media screen and (max-width: 500px) {
    .logo__box {
      width: 60% !important;
    }
    .flykhiva__logo {
      width: 100px !important;
    }
    .footer__link {
      font-size: 13px;
    }
    .footer__text {
      font-size: 14px !important;
    }
    .number__mobile {
      display: block !important;
    }
  }
`;
export default FooterWrapper;
