import styled from "styled-components";

export const ProfileWrapper = styled.div`
  flex: 1;
  position: relative;
  padding-top: 250px;
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
    z-index: 0;
    background: url("https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved0.jpg"),
      linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
    mix-blend-mode: normal;
    border-radius: 12px;
    background-size: cover;
  }
  .profile__account {
    background: rgba(255, 255, 255, 0.80059);
    box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(27.1828px);
    border-radius: 12px;
    padding: 20px;
    margin: 0 50px;
    align-items: center;
    &-left {
      img {
        border-radius: 10px;
      }
      div {
        margin-left: 20px;
        h1 {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 33px;
          letter-spacing: -0.66383px;
          color: #141414;
        }
        p {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: -0.387234px;
          color: #8c8c8c;
        }
      }
    }
    &-right {
      position: relative;
      .profile__account-right-back {
        background-color: ;
      }
      div {
        width: 100px;
        h1 {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: -0.387234px;
          color: #67748e;
        }
      }
    }
  }
`;
