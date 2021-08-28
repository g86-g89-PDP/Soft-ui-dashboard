import { Switch } from "@material-ui/core";

const ProfileContent = () => {
  return (
    <div>
      <div className="profile-content d-flex row g-5">
        <div className="col-md-6 col-lg-4">
          <div>
            <h1>Platform Settings</h1>
            <p>ACCOUNT</p>
            <div className="d-flex">
              <Switch color="primary" name="checkedB" checked={true} />
              <p>Email me when someone follows me</p>
            </div>
            <div className="d-flex">
              <Switch color="primary" name="checkedB" />
              <p>Email me when someone follows me</p>
            </div>
            <div className="d-flex">
              <Switch color="primary" name="checkedB" checked={true} />
              <p>Email me when someone follows me</p>
            </div>
            <p>APPLICATION</p>
            <div className="d-flex">
              <Switch color="primary" name="checkedB" checked={true} />
              <p>Email me when someone follows me</p>
            </div>
            <div className="d-flex">
              <Switch color="primary" name="checkedB" />
              <p>Email me when someone follows me</p>
            </div>
            <div className="d-flex">
              <Switch color="primary" name="checkedB" />
              <p>Email me when someone follows me</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div>
            <h1>Profile Information</h1>
            <p>
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            <div className="d-flex">
              <p className="me-3">Full Name: </p>
              <p className="fw-bold">Sarah Emily Jacob</p>
            </div>
            <div className="d-flex">
              <p className="me-3">Full Name: </p>
              <p className="fw-bold">Sarah Emily Jacob</p>
            </div>
            <div className="d-flex">
              <p className="me-3">Full Name: </p>
              <p className="fw-bold">Sarah Emily Jacob</p>
            </div>
            <div className="d-flex">
              <p className="me-3">Full Name: </p>
              <p className="fw-bold">Sarah Emily Jacob</p>
            </div>
            <div className="d-flex">
              <p className="me-3">Full Name: </p>
              <p className="fw-bold">Sarah Emily Jacob</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div>
            <h1>Conversations</h1>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
