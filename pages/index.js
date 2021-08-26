import  Dashboard  from "../container/Layout/dashboardW";

export default function Home() {
  return (
    <Dashboard>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='todayMoney'>
              <p>
                today's Money
              </p>
              <p className='fw-bold fs-4'>
                $ 53.000
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='todayMoney'>
              <p>
                today's Money
              </p>
              <p className='fw-bold fs-4'>
                $ 53.000
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='todayMoney'>
              <p>
                today's Money
              </p>
              <p className='fw-bold fs-4'>
                $ 53.000
              </p>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='todayMoney'>
              <p>
                today's Money
              </p>
              <p className='fw-bold fs-4'>
                $ 53.000
              </p>
              </div>
          </div>

          <div className="col-lg-7 col-sm-12 d-flex">
            <div className='roketInf'>
              <p className='tm1'>Built by developers</p>
              <p>Soft UI Dashboard</p>
              <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>
              <p><a href="#">Read more</a></p>
            </div>
            <div className='roketCard'>
              <img src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png" alt="picture" className='rokeImg'/>
            </div>
          </div>
         
        </div>
    </Dashboard>
  )
}
