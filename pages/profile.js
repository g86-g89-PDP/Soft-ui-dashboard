import { ProfileWrapper } from "../styles/ProfileWrapper";
import { BsFillLayersFill } from "react-icons/bs";
import { useState } from "react";
import { Switch } from "@material-ui/core";
import { FcUpload } from "react-icons/fc";

const Profile = () => {
  const [moveBack, setmoveBack] = useState(0);
  const back = [{ left: "-11px" }, { left: "89px" }, { left: "189px" }];

  return (
    <ProfileWrapper>
      <div className="profile-mask" />
      <div className="profile__account d-block d-md-flex justify-content-between">
        <div className="profile__account-left d-flex">
          <img src="/bruce-mars.png" alt="picture" />
          <div>
            <h1>Alec Thompson</h1>
            <p>CEO / Co-Fogtunder</p>
          </div>
        </div>
        <div className="profile__account-right d-flex mt-3 mt-md-0">
          <div className="profile__account-right-back" style={back[moveBack]} />
          <div>
            <h1
              onMouseEnter={() => {
                setmoveBack(0);
              }}
            >
              <span className="me-1">
                <BsFillLayersFill />
              </span>
              Overview
            </h1>
          </div>
          <div>
            <h1
              onMouseEnter={() => {
                setmoveBack(1);
              }}
            >
              <span className="me-1">
                <BsFillLayersFill />
              </span>
              Overview
            </h1>
          </div>
          <div>
            <h1
              onMouseEnter={() => {
                setmoveBack(2);
              }}
            >
              <span className="me-1">
                <BsFillLayersFill />
              </span>
              Overview
            </h1>
          </div>
        </div>
      </div>
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
      <div className="profile-bottom">
        <h1>Projects</h1>
        <p>Architects design houses</p>
        <div className="row d-flex">
          <div className="col-md-9 row">
            <div className="col-md-4">
              <img src="/decor1.png" alt="decoration" />
              <p>Project #1</p>
              <h1>Modern</h1>
              <p>
                As Uber works through a huge amount of internal management
                turmoil.
              </p>
              <button>VIEW PROJECT</button>
            </div>
            <div className="col-md-4">
              <img src="/decor1.png" alt="decoration" />
              <p>Project #1</p>
              <h1>Modern</h1>
              <p>
                As Uber works through a huge amount of internal management
                turmoil.
              </p>
              <button>VIEW PROJECT</button>
            </div>
            <div className="col-md-4">
              <img src="/decor1.png" alt="decoration" />
              <p>Project #1</p>
              <h1>Modern</h1>
              <p>
                As Uber works through a huge amount of internal management
                turmoil.
              </p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="col-md-3 upload-project">
            <div className="text-center">
              <FcUpload />
              <h1>Upload a project</h1>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
