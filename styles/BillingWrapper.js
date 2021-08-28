import styled from "styled-components";

export const BillingWrapper = styled.div`
  .row1 {
    display: flex;
  }
  .row2 {
    display: flex;
  }
  .creditcard {
    background-image: url("	https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved14.jpg");
    border-radius: 1rem;
    box-shadow: 0 23px 45px -11px hsla(0, 0%, 8%, 0.25) !important;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    max-width: 100%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    padding: 0 !important;
    margin: 5px;
    height: 100%;
    color: white;
  }
  .creditcard:hover {
    background-color: black;
  }

  .down {
    display: flex !important;
  }
  .card {
    border-radius: 10px;
    margin: 5px;
  }
  .ms-auto {
    display: flex;
    justify-content: end;
  }
  img {
    display: flex;
    justify-content: flex-end;
    width: 60px;
    height: 50px;
  }
  .btn-outline-primary {
    color: #cb0c9f;
    border-color: #cb0c9f;
  }
  .icon {
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center !important;
    width: 64px;
    height: 64px;
    border-radius: 0.75rem;
    background-image: linear-gradient(310deg, #7928ca, #ff0080);
  }
  .bg-gray-100 {
    background-color: #f8f9fa !important;
    border-radius: 0.75rem;
  }
  .keyframes {
    from {
      opacity: 0;
      transform: translate3d(-200px, -100px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
