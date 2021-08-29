import { Switch } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfileBottom, toggleProfileTop } from "../../redux/actions";

const ProfileContent = () => {
  const top = useSelector((state) => state.pcltop);
  const bottom = useSelector((state) => state.pclbottom);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="profile-content d-flex row g-5">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div>
            <h1 className="profile-content-title">Platform Settings</h1>
            <p className="profile-content-text">ACCOUNT</p>
            {top.map((i, index) => (
              <div className="d-flex align-items-center" key={index}>
                <Switch
                  color="primary"
                  name="checkedB"
                  checked={i.active}
                  onClick={() => {
                    toggleProfileTop(dispatch, index);
                  }}
                />
                <p className="profile-content-btn-text">{i.text}</p>
              </div>
            ))}
            <p className="profile-content-text">APPLICATION</p>
            {bottom.map((i, index) => (
              <div className="d-flex align-items-center" key={index}>
                <Switch
                  color="primary"
                  name="checkedB"
                  checked={i.active}
                  onClick={() => toggleProfileBottom(dispatch, index)}
                />
                <p className="profile-content-btn-text">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div>
            <h1 className="profile-content-title">Profile Information</h1>
            <p className="profile-content-mid-text">
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            <div className="d-flex align-items-center">
              <p className="me-3 profile-content-info">Full Name: </p>
              <p className="profile-content-info-text">Sarah Emily Jacob</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="me-3 profile-content-info">Full Name: </p>
              <p className="profile-content-info-text">Sarah Emily Jacob</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="me-3 profile-content-info">Full Name: </p>
              <p className="profile-content-info-text">Sarah Emily Jacob</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="me-3 profile-content-info">Full Name: </p>
              <p className="profile-content-info-text">Sarah Emily Jacob</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="me-3 profile-content-info">Full Name: </p>
              <p className="profile-content-info-text">Sarah Emily Jacob</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div>
            <h1 className="profile-content-title">Conversations</h1>
            <div className="d-flex justify-content-between profile-content-right align-items-center mb-2">
              <div className="d-flex align-items-center">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between profile-content-right align-items-center mb-2">
              <div className="d-flex align-items-center">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between profile-content-right align-items-center mb-2">
              <div className="d-flex align-items-center">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between profile-content-right align-items-center mb-2">
              <div className="d-flex align-items-center">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between profile-content-right align-items-center mb-2">
              <div className="d-flex align-items-center">
                <img src="/face1.png" alt="picture" />
                <div>
                  <h1>Sophie B.</h1>
                  <p>Hi! I need more information…</p>
                </div>
              </div>
              <a>REPLY</a>
            </div>
            <div className="d-flex justify-content-between profile-content-right align-items-center mb-2">
              <div className="d-flex align-items-center">
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
