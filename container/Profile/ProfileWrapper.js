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
        transition: 0.5s;
        position: absolute;
        z-index: -1;
        width: 100px;
        height: 30px;
        top: -5px;
        left: -11px;
        background: #ffffff;
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
          0px 2px 4px -1px rgba(0, 0, 0, 0.07);
        border-radius: 8px;
      }
      div {
        width: 100px;
        h1 {
          cursor: pointer;

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
  .profile-content {
    margin-top: 30px;
    .profile-content-title {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 22px;
      letter-spacing: -0.442553px;
      color: #252f40;
      margin-bottom: 15px;
    }
    .profile-content-text {
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: -0.331915px;
      color: #67748e;
      margin-bottom: 20px;
    }
    .profile-content-mid-text {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: -0.387234px;
      color: #67748e;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 30px;
    }
    .profile-content-info {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.387234px;
      color: #67748e;
    }
    .profile-content-info-text {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 700 !important;
      font-size: 17px;
      line-height: 19px;
      letter-spacing: -0.387234px;
      color: #252f40;
    }
    .profile-content-right {
      img {
        width: 70px;
        height: 70px;
        border-radius: 20px;
        margin-right: 10px;
      }
      div {
        h1 {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 19px;
          letter-spacing: -0.387234px;
          color: #252f40;
          margin-top: 10px;
        }
        p {
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 16px;
          letter-spacing: -0.331915px;
          color: #67748e;
        }
      }
      a {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 16px;
        letter-spacing: -0.331915px;
        color: #cb0c9f;
        margin-right: 10px;
        cursor: pointer;
      }
    }
    div {
      div {
        padding: 20px;
        border-radius: 15px;
        background-color: white;
        min-height: 500px;
        div {
          padding: 0;
          min-height: 0;
          .profile-content-btn-text {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.387234px;
            color: #67748e;
            margin-bottom: 0 !important;
          }
        }
        h1 {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 22px;
          letter-spacing: -0.442553px;
          color: #252f40;
        }
      }
    }
  }
  .profile-bottom {
    background-color: white;
    margin-top: 30px;
    border-radius: 15px;
    padding: 20px;
    div {
      img {
        width: 100%;
        height: 300px;
        border-radius: 15px;
        margin: 10px 0;
      }
    }
    .upload-project {
      border-radius: 15px;
      border: 1px solid grey;
      cursor: pointer;
      font-size: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
