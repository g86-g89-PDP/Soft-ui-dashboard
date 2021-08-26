import { ProfileWrapper } from "../styles/ProfileWrapper";
import { BsFillLayersFill } from "react-icons/bs";
import { useState } from "react";

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
              onClick={() => {
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
              onClick={() => {
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
              onClick={() => {
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
    </ProfileWrapper>
  );
};

export default Profile;
