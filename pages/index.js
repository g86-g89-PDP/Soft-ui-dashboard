import Dashboard from "../styles/dashboardW";
import { FaCoins } from "react-icons/fa";

export default function Home() {


  return (
    <Dashboard>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="todayMoney">
            <div>
              <p className="p-0 m-0">today's Money</p>
              <p className="fw-bold fs-4 m-0 p-0">
                $ 53.000 <span className="tm3">+ $50</span>
              </p>
            </div>
            <div className="tmIconsCard">
              <p className="p-0 m-0 text-light">
                <FaCoins />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="todayMoney">
            <div>
              <p className="p-0 m-0">today's Money</p>
              <p className="fw-bold fs-4 m-0 p-0">
                $ 53.000 <span className="tm3">+ $50</span>
              </p>
            </div>
            <div className="tmIconsCard">
              <p className="p-0 m-0 text-light">
                <FaCoins />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="todayMoney">
            <div>
              <p className="p-0 m-0">today's Money</p>
              <p className="fw-bold fs-4 m-0 p-0">
                $ 53.000 <span className="tm3 text-danger">- $50</span>
              </p>
            </div>
            <div className="tmIconsCard">
              <p className="p-0 m-0 text-light">
                <FaCoins />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="todayMoney">
            <div>
              <p className="p-0 m-0">today's Money</p>
              <p className="fw-bold fs-4 m-0 p-0">
                $ 53.000 <span className="tm3">+ $50</span>
              </p>
            </div>
            <div className="tmIconsCard">
              <p className="p-0 m-0 text-light">
                <FaCoins />
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-7 col-sm-12 d-flex p-2">
          <div className="card2 todayMoney">
            <div className="roketInf">
              <div>
                <p className="tm1">Built by developers</p>
                <p className="tm2">Soft UI Dashboard </p>
                <p className="tm1">
                  From colors, cards, typography to complex elements, you will
                  find the full documentation.
                </p>
              </div>
              <p>
                <a href="#">Read more</a>
              </p>
            </div>
            <div className="roketCard">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"
                alt="picture"
                className="rokeImg"
              />
            </div>
          </div>
        </div>
        <div className="col-5">
          <p></p>
        </div>
        <div></div>
      </div>
    </Dashboard>
  );
}
