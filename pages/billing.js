import { Link } from "@material-ui/core";
import { button } from "bootstrap";
import { BillingWrapper } from "../styles/BillingWrapper";

const Billing = () => {
  return (
    <BillingWrapper>
      <div className="container-fluid py-4">
        <div className="row1">
          <div className="col-lg-8">
            <div className="row2">
              <div className="col-xl-6 mb-xl-0 mb-4">
                <div className="creditcard">
                  <div className="m-2">
                    <span classNam="mask"></span>
                    <div classNam="card-body">
                      <h5 class="text-white mt-4 mb-5 pb-2">
                        4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                      </h5>
                      <div className="down">
                        <div className="d-flex">
                          <div className="me-4 text-white">
                            <p>Card holder</p>
                            <h6>Jack Peterson</h6>
                          </div>
                          <div className="text-white">
                            <p>Expries</p>
                            <h6>11/22</h6>
                          </div>
                        </div>
                        <div className="ms-auto w-20">
                          <img
                            className="w-60 mt-2"
                            src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logos/mastercard.png"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header mx-4 p-3 text-center">
                        <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg"></div>
                      </div>
                      <div className="card-body pt-0 p-3 text-center">
                        <h6 className="text-center">Salary</h6>
                        <span className="text-xl">Belong interactive</span>
                        <hr className="horizontal dark my-3" />
                        <h5 className="mb-0">+$2000</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4">
                    <div className="card">
                      <div className="card-header mx-4 p-3 text-center">
                        <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg"></div>
                      </div>
                      <div className="card-body pt-0 p-3 text-center">
                        <h6 className="text-center">Paypal</h6>
                        <span className="text-xl">Freelance Payment</span>
                        <hr className="horizontal dark my-3" />
                        <h5 className="mb-0">$455.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-lg-0 mb-4">
              <div className="card mt-4">
                <div className="card-header">
                  <div className="row">
                    <div className="col-6">
                      <h6>Payment Method</h6>
                      <Link>Add New Card</Link>
                    </div>
                    <div className="col-6"></div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="carde">
                        <img
                          src="	https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logos/mastercard.png"
                          alt=""
                        />
                        <h6>**** **** **** 7852</h6>
                        <span>Edit Card</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card">
                        <img
                          src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logos/visa.png"
                          alt=""
                        />
                        <h6>**** **** **** 7852</h6>
                        <span>Edit Card</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-header">
                <div className="row">
                  <div className="col-6">
                    <h6>Invoices</h6>
                  </div>
                  <div className="col-6">
                    <button>Viev All</button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ul className="list group">
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark font-weight-bold text-sm">
                        March, 01, 2020
                      </h6>
                      <span class="text-xs">#MS-415646</span>
                    </div>
                    <div class="d-flex align-items-center text-sm">
                      $180
                      <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                        <i
                          class="fas fa-file-pdf text-lg me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex flex-column">
                      <h6 class="text-dark mb-1 font-weight-bold text-sm">
                        February, 10, 2021
                      </h6>
                      <span class="text-xs">#RV-126749</span>
                    </div>
                    <div class="d-flex align-items-center text-sm">
                      $250
                      <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                        <i
                          class="fas fa-file-pdf text-lg me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex flex-column">
                      <h6 class="text-dark mb-1 font-weight-bold text-sm">
                        April, 05, 2020
                      </h6>
                      <span class="text-xs">#FB-212562</span>
                    </div>
                    <div class="d-flex align-items-center text-sm">
                      $560
                      <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                        <i
                          class="fas fa-file-pdf text-lg me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex flex-column">
                      <h6 class="text-dark mb-1 font-weight-bold text-sm">
                        June, 25, 2019
                      </h6>
                      <span class="text-xs">#QW-103578</span>
                    </div>
                    <div class="d-flex align-items-center text-sm">
                      $120
                      <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                        <i
                          class="fas fa-file-pdf text-lg me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                    <div class="d-flex flex-column">
                      <h6 class="text-dark mb-1 font-weight-bold text-sm">
                        March, 01, 2019
                      </h6>
                      <span class="text-xs">#AR-803481</span>
                    </div>
                    <div class="d-flex align-items-center text-sm">
                      $300
                      <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                        <i
                          class="fas fa-file-pdf text-lg me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mt-4">
            <div className="card">
              <div className="card-header pb-0 px-3">
                <h6 className="mb-0">Billing information</h6>
              </div>
              <div className="card-body pt-4 p-3">
                <ul className="list-group">
                  <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                    <div className="d-flex flex-column">
                      <h6 className="mb-3 text-sm">Oliver Liam</h6>
                      <span className="mb-2 text-xs">
                        "Company Name:"
                        <span class="text-dark font-weight-bold ms-sm-2">
                          Viking Burrito
                        </span>
                      </span>
                      <span className="mb-2 text-xs">
                        "Email address:"
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          oliver@burrito.com
                        </span>
                      </span>
                      <span className="text-xs">
                        "Vat number:"
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                    <div className="ms-auto text-end">
                      <a
                        class="btn btn-link text-danger text-gradient px-3 mb-0"
                        href="javascript:;"
                      >
                        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>
                        Delete
                      </a>
                      <a
                        class="btn btn-link text-dark px-3 mb-0"
                        href="javascript:;"
                      >
                        <i
                          class="fas fa-pencil-alt text-dark me-2"
                          aria-hidden="true"
                        ></i>
                        Edit
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                    <div className="d-flex flex-column">
                      <h6 className="mb-3 text-sm">Lucas Harper</h6>
                      <span className="mb-2 text-xs">
                        "Company Name:"
                        <span class="text-dark font-weight-bold ms-sm-2">
                          Viking Burrito
                        </span>
                      </span>
                      <span className="mb-2 text-xs">
                        "Email address:"
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          oliver@burrito.com
                        </span>
                      </span>
                      <span className="text-xs">
                        "Vat number:"
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                    <div className="ms-auto text-end">
                      <a
                        class="btn btn-link text-danger text-gradient px-3 mb-0"
                        href="javascript:;"
                      >
                        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>
                        Delete
                      </a>
                      <a
                        class="btn btn-link text-dark px-3 mb-0"
                        href="javascript:;"
                      >
                        <i
                          class="fas fa-pencil-alt text-dark me-2"
                          aria-hidden="true"
                        ></i>
                        Edit
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                    <div className="d-flex flex-column">
                      <h6 className="mb-3 text-sm">Ethan James</h6>
                      <span className="mb-2 text-xs">
                        "Company Name:"
                        <span class="text-dark font-weight-bold ms-sm-2">
                          Viking Burrito
                        </span>
                      </span>
                      <span className="mb-2 text-xs">
                        "Email address:"
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          oliver@burrito.com
                        </span>
                      </span>
                      <span className="text-xs">
                        "Vat number:"
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                    <div className="ms-auto text-end">
                      <a
                        class="btn btn-link text-danger text-gradient px-3 mb-0"
                        href="javascript:;"
                      >
                        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>
                        Delete
                      </a>
                      <a
                        class="btn btn-link text-dark px-3 mb-0"
                        href="javascript:;"
                      >
                        <i
                          class="fas fa-pencil-alt text-dark me-2"
                          aria-hidden="true"
                        ></i>
                        Edit
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <div className="card h-100 mb-4">
              <div className="card-header pb-0 px-3">
                <div className="row">
                  <div className="col-6">
                    <h6>Your Transaction's</h6>
                  </div>
                  <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <small>28-08 Avgust 2021</small>
                  </div>
                </div>
              </div>
              <div className="card-body pt-4 p-3">
                <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">
                  Newest
                </h6>
                <ul className="list-group">
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="fas fa-arrow-down" aria-hidden="true"></i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Netflix</h6>
                        <span class="text-xs">27 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                      - $ 2,500
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="fas fa-arrow-up" aria-hidden="true"></i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Apple</h6>
                        <span class="text-xs">27 March 2020, at 04:30 AM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      + $ 2,000
                    </div>
                  </li>
                </ul>
                <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">
                  Yesterday
                </h6>
                <ul className="list-group">
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="fas fa-arrow-up" aria-hidden="true"></i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Stripe</h6>
                        <span class="text-xs">26 March 2020, at 13:45 PM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      + $ 750
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="fas fa-arrow-up" aria-hidden="true"></i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">HubSpot</h6>
                        <span class="text-xs">26 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      + $ 1,000
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="fas fa-arrow-up" aria-hidden="true"></i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Creative Tim</h6>
                        <span class="text-xs">26 March 2020, at 08:30 AM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      + $ 2,500
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="fas fa-exclamation" aria-hidden="true"></i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Webflow</h6>
                        <span class="text-xs">26 March 2020, at 05:00 AM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-dark text-sm font-weight-bold">
                      Pending
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer mt-3">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div class="copyright text-center text-sm text-muted text-lg-start">
                  © <script>document.write(new Date().getFullYear())</script>
                  2021, made with <i
                    class="fa fa-heart"
                    aria-hidden="true"
                  ></i>{" "}
                  by
                  <a
                    href="https://www.creative-tim.com"
                    class="font-weight-bold"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                  for a better web.
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com"
                      class="nav-link text-muted"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com/presentation"
                      class="nav-link text-muted"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://creative-tim.com/blog"
                      class="nav-link text-muted"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com/license"
                      class="nav-link pe-0 text-muted"
                      target="_blank"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BillingWrapper>
  );
};

export default Billing;
