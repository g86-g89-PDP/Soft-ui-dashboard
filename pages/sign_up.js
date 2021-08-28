import Image from "next/image";
import { FiDribbble, FiInstagram } from "react-icons/fi";
import { SiTwitter } from "react-icons/si";
import { FaPinterest } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import styled from "styled-components";

const DashboardWrapper = styled.div`
  body {
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-size: 1rem;
    line-height: 1.5;
    color: #67748e;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    nav {
      z-index: 10;
      .container {
        .Soft {
          margin-top: 120px;
          margin-left: 100px !important;
          color: white;
          font-size: 0.875rem;
        }
        .collapse {
          .MainUl {
            .MainLi {
              .MainA {
                margin-top: 110px;
                color: white;
              }
              .Margin {
                margin-top: 57px !important;
              }
            }
          }
          .MainUl2 {
            .MainLi2 {
              .MainA2 {
                margin-top: 110px !important;
                width: 130px;
                height: 40px;
                padding: 0.5rem 2rem;
                color: white;
                border-radius: 1.875rem;
                background-image: linear-gradient(310deg, #7928ca, #ff0080);
              }
            }
          }
        }
      }
    }
    section {
      .mainDiv {
        background-image: url(/curved14.jpg);
        border-radius: 0.75rem;
        padding: 0;
        position: relative;
        display: flex;
        align-items: center;
        background-size: cover;
        background-position: 50%;
        padding-bottom: 14rem !important;
        padding-top: 3rem !important;
        margin: 1rem !important;
        height: 460px;
        .mainSpan {
          background-image: linear-gradient(310deg, #141727, #3a416f);
          position: absolute;
          background-position: 50%;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          opacity: 0.6 !important;
          border-radius: 0.75rem;
        }
        .container {
          .row {
            .MainColl {
              height: 600px;
              margin-top: 50px;
              z-index: 9;
              .card {
                .card-body {
                  font-family: Open Sans;
                  padding: 1.5rem;
                  .form {
                    font-family: Open Sans;
                    padding: 1.5rem;
                    .mb-3 {
                      .form-control {
                        border-radius: 0.5rem;
                        color: #495057;
                      }
                    }
                    .text-center {
                      .btn {
                        background-image: linear-gradient(
                          310deg,
                          #141727,
                          #3a416f
                        );
                        color: #fff;
                      }
                    }
                    .text-sm {
                      line-height: 1.5;
                      margin-bottom: 0 !important;
                      a {
                        color: #344767 !important;
                        font-size: 19px;
                        text-decoration: none;
                        margin-left: 10px;
                        list-style-type: none;
                      }
                    }
                    .form-check {
                      .form-check-label {
                        font-size: 1rem;
                        font-weight: 400;
                        color: #344767;
                        margin-left: 0.25rem;
                        .text-dark {
                          font-weight: 700 !important;
                          text-decoration: none;
                          letter-spacing: -0.025rem;
                          margin-left: 10px;
                        }
                      }
                    }
                  }
                }
                box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
                border: 0 solid rgba(0, 0, 0, 0.125);
                border-radius: 1rem;
                .card-header {
                  background-color: white;
                  border-radius: 1rem;
                  border: none;
                  .row {
                    .MainP2 {
                      color: #8392ab !important;
                    }
                  }
                  h5 {
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                    color: #344767;
                  }
                }
              }
            }
            .MainDiv2 {
              z-index: 9 !important;
              .MainH1 {
                font-weight: 700;
              }
              .MainP {
                line-height: 1.625;
                font-weight: 400;
              }
            }
          }
        }
        .mainContener {
          max-width: 960px !important;

          .MainRow3 {
            padding-right: 1.5rem !important;
            padding-left: 1.5rem !important;
          }
        }
      }
    }
    footer {
      margin-top: 150px;
      .container {
        .row {
          .col-lg-8 {
            a {
              color: #8392ab !important;
              text-decoration: none;
              list-style-type: none;
            }
          }
          .col-8 {
            p {
              color: #8392ab !important;
            }
          }
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <DashboardWrapper>
      <body>
        <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent mt-4">
          <div className="container">
            <a
              href=""
              className="navbar-brand ms-5 fw-bold Soft font-weight-bolder ms-lg-0 ms-3"
            >
              Soft UI Dashboard
            </a>
            <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ps ps--active-y">
              <ul className="MainUl navbar-nav navbar-nav-hover mx-auto">
                <li className="MainLi nav-item dropdown dropdown-hover mx-2 d-flex">
                  <a
                    role="button"
                    className="MainA nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center "
                  >
                    Pages
                  </a>
                  <Image
                    src="/down-arrow-dark.svg"
                    alt="Vercel "
                    width={10}
                    height={10}
                    className="Margin"
                  />
                </li>
                <li className="MainLi nav-item dropdown dropdown-hover mx-2 d-flex">
                  <a
                    role="button"
                    className="MainA nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center "
                  >
                    Authentication
                  </a>
                  <Image
                    src="/down-arrow-dark.svg"
                    alt="Vercel Logo"
                    width={10}
                    height={10}
                    className="Margin"
                  />
                </li>
                <li className="MainLi nav-item dropdown dropdown-hover mx-2 d-flex">
                  <a
                    role="button"
                    className="MainA nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center "
                  >
                    Applications
                  </a>
                  <Image
                    src="/down-arrow-dark.svg"
                    alt="Vercel Logo"
                    width={10}
                    height={10}
                    className="Margin"
                  />
                </li>
                <li className="MainLi nav-item dropdown dropdown-hover mx-2 d-flex">
                  <a
                    role="button"
                    className="MainA nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center "
                  >
                    Ecommerce
                  </a>
                  <Image
                    src="/down-arrow-dark.svg"
                    alt="Vercel Logo"
                    width={10}
                    height={10}
                    className="Margin"
                  />
                </li>
                <li className="MainLi nav-item dropdown dropdown-hover mx-2 d-flex">
                  <a
                    role="button"
                    className="MainA nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center "
                  >
                    Docs
                  </a>
                  <Image
                    src="/down-arrow-dark.svg"
                    alt="Vercel Logo"
                    width={10}
                    height={10}
                    className="Margin"
                  />
                </li>
              </ul>
              <ul className="MainUl2 navbar-nav d-lg-block d-none">
                <li className="MainLi2 nav-item">
                  <a className="fw-bold MainA2 btn btn-sm mx-5 bg-gradient-primary  btn-round mb-0">
                    Buy Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="min-vh-100 mb-8">
          <div className="mainDiv page-header align-items-start min-vh-50 pt-5 d-block pb-11 m-3 border-radius-lg">
            <span className="mask mainSpan bg-gradient-dark opacity-6"></span>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 MainDiv2 text-center mx-auto">
                  <h1 className="MainH1 text-white mb-2 mt-5">Welcome!</h1>
                  <p className="MainP text-lead text-white">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row mt-lg-n10 mt-md-n11 mt-n10">
                <div className="col-xl-4 MainColl col-lg-5 col-md-7 mx-auto">
                  <div className="card z-index-0">
                    <div className="card-header text-center pt-4">
                      <h5>Register with</h5>
                    </div>
                    <div className="row px-xl-5 px-sm-4 px-3">
                      <div className="col-3 ms-auto px-1">
                        <a className="btn btn-outline-light w-100">
                          <Image
                            src="/image.webp"
                            alt="Vercel Logo"
                            className="bg-white"
                            width={50}
                            height={45}
                          />
                        </a>
                      </div>
                      <div className="col-3 px-1">
                        <a className="btn btn-outline-light w-100">
                          <Image
                            src="/image (1).webp"
                            alt="Vercel Logo"
                            className="bg-white"
                            width={140}
                            height={120}
                          />
                        </a>
                      </div>
                      <div className="col-3 me-auto px-1">
                        <a className="btn btn-outline-light w-100">
                          <Image
                            src="/image (2).webp"
                            alt="Vercel Logo"
                            width={140}
                            height={120}
                          />
                        </a>
                      </div>
                      <div className="mt-2 MainP2 position-relative text-center">
                        <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                          or
                        </p>
                      </div>
                    </div>
                    <div className="card-body">
                      <from className="form text-left">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name"
                            aria-describedby="email-addon"
                          ></input>
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="email-addon"
                          ></input>
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                          ></input>
                        </div>
                        <div className="form-check form-check-info text-left">
                          <input
                            className="form-check-input"
                            type="checkbox"
                          ></input>
                          <label href="#" className="form-check-label">
                            I agree the
                            <a
                              href="#"
                              className="text-dark me-2 fw-bold font-weight-bolder"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                        <div className="text-center">
                          <button
                            className="btn bg-gradient-dark w-100 my-4 mb-2"
                            type="button"
                          >
                            Sign up
                          </button>
                        </div>
                        <p className="text-sm mt-3 mb-0">
                          Already have an account?
                          <a
                            href="#"
                            className="text-dark fw-bold font-weight-bolder"
                          >
                            Sign in
                          </a>
                        </p>
                      </from>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-4 mx-auto text-center">
                <a
                  href="#"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Company
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  About Us
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Team
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Products
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Blog
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Pricing
                </a>
              </div>
              <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <FiDribbble />
                </a>
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <SiTwitter />
                </a>
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <FiInstagram />
                </a>
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <FaPinterest />
                </a>
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-8 mx-auto text-center mt-1">
                <p className="mb-0 text-secondary">
                  Copyright © 2021 Soft by Creative Tim.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </DashboardWrapper>
  );
}
