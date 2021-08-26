import styled from "styled-components";

const Wrapper = styled.div`
  .content-wrapper {
    display: flex;

    .sidebar {
      width: 25%;
      border-right: 1px solid #eee;
      height: 100vh;
    }

    .content {
      flex: 1;

      .header {
        width: 100%;
        padding: 20px;
        .logo {
          width: 10%;
          img {
            width: 100%;
          }
        }
      }
      .pages {
        padding: 50px;
      }
    }
  }
`;
export default Wrapper;
