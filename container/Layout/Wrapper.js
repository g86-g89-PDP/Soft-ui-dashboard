import styled from "styled-components";

const Wrapper = styled.div`
  .content-wrapper {
    display: flex;

    .sidebar {
      background-color: #f6f7f8;
      width: 22%;
      border-right: 1px solid #eee;
      height: 100vh;
      padding: 10px 20px;
      .navbar-brand {
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        .logo {
          width: 20%;
          img {
            width: 100%;
          }
        }
        span {
          color: #344767;
          font-size: 0.875rem;
          font-weight: bold;
        }
      }

      ul {
        li {
          a {
            margin: 10px auto;
            width: 100%;
            height: 100%;
            padding: 10px;
            text-decoration: none;
            display: flex;
            color: inherit;
            align-items: center;
            &.active {
              background-color: #fff;
              box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
              border-radius: 0.5rem;
              .icon {
                color: #fff;
                background-image: linear-gradient(310deg, #cb0c9f, #cb0c9f);
              }
              span {
                color: #344767 !important;
                font-weight: bold;
                font-weight: 600;
              }
            }
            .icon {
              background-color: #eee;
              border-radius: 10px;
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: inherit;
            }
            span {
              margin: 10px;
              color: inherit;
              font-weight: 400;
              color: #333;
            }
          }
        }
      }
    }

    .content {
      flex: 1;
      overflow-x: hidden !important;

      .header {
        width: 100%;
        padding: 5px;
        .logo {
          width: 10%;
          img {
            width: 100%;
          }
        }
      }
      .pages {
        padding: 5px;
        min-height: 80vh;
      }
    }
  }
`;
export default Wrapper;
