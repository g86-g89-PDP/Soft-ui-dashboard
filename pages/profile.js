import { ProfileWrapper } from "../container/Profile/ProfileWrapper";

import ProfileLanding from "../container/Profile/ProfileLanding";
import ProfileContent from "../container/Profile/ProfileContent";
import ProfileBottom from "../container/Profile/ProfileBottom";

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileLanding />
      <ProfileContent />
      <ProfileBottom />
    </ProfileWrapper>
  );
};

export default Profile;
