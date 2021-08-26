import styled from "styled-components";

export const ProfileWrapper = styled.div`
  flex: 1;
  position: relative;
  .profile-header {
    padding: 20px;
  }
  .profile-bold {
    font-weight: 700;
  }
  .profile-mask {
    position: absolute;
    width: 100%;
    height: 308px;
    top: 0;
    left: 0;
    right: 0;
    z-index: -100;
    background: url("https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved0.jpg"),
      linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
    mix-blend-mode: normal;
    border-radius: 12px;
    background-size: cover;
  }
`;
