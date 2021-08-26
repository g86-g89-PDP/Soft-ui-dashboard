import { ProfileWrapper } from "../styles/ProfileWrapper";

const Profile = () => {
  return (
    <ProfileWrapper>
      <div className="profile-mask" />
      <div className="profile__account d-flex justify-content-between">
        <div className="profile__account-left d-flex">
          <img src="/bruce-mars.png" alt="picture" />
          <div>
            <h1>Alec Thompson</h1>
            <p>CEO / Co-Founder</p>
          </div>
        </div>
        <div className="profile__account-right d-flex">
          <div className="profile__account-right-back" />
          <div>
            <h1>Overview</h1>
          </div>
          <div>
            <h1>Overview</h1>
          </div>
          <div>
            <h1>Overview</h1>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
