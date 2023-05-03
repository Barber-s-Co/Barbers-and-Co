import styled from "styled-components";

export const StyleMain = styled.main``;

export const StyleHeader = styled.header`
  display: flex;
  width: 100vw;
  height: 4.75rem;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.125rem;
  position: fixed;
  top: 0;
  z-index: 1;

  @media (max-width: 375px) {
    padding: 0 0.625rem;
  }
`;

export const NavHeader = styled.nav`
  .loginBtn {
    color: white;
    margin-right: 0.625rem;
    :hover {
      border-bottom: 0.188rem solid #f9cc00;
    }
  }

  .registerBtn {
    color: white;

    :hover {
      border-bottom: 0.188rem solid #f9cc00;
    }
  }
`;

export const CentralLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(src/assets/cadeiras-vintage-na-barbearia.svg);
  background-color: rgba(0, 0, 0, 0.9);
  height: 25.563rem;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-top: 4.75rem;

  @media (max-width: 520px) {
    img {
      width: 100%;
    }
  }
`;

export const AboutUs = styled.div`
  background-color: black;
  width: 100%;
  height: 23.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;

  p {
    width: 25rem;
    font-size: 1.875rem;
  }

  h2 {
    display: none;
  }

  @media (min-width: 600px) {
    h2 {
      display: block;
    }
  }
`;

export const StyleServices = styled.div`
  display: flex;
  height: 40rem;
  width: 100%;
  background-image: url(src/assets/jovem-na-barbearia-aparando-cabelo2.svg);
  background-color: rgba(0, 0, 0, 0.9);
  background-size: cover;
  background-position: center;
  align-items: center;
  flex-direction: column;

  .servicesLogo {
    padding-top: 0.938rem;
    height: 3.125rem;
  }

  @media (max-width: 520px) {
    .servicesLogo {
      width: 100%;
    }
  }
`;

export const ServicesContainer = styled.div`
  height: 100%;
  width: 100%;
  gap: 8.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 0 18.75rem;
  }

  img {
    height: 7.313rem;
  }

  p {
    color: #ffffff;
    font-size: 1.25rem;
  }

  @media (max-width: 400px) {
    img {
      height: 5rem;
    }

    p {
      font-size: 1rem;
    }

    ul {
      padding: 0;
    }
  }

  @media (max-width: 617px) {
    ul {
      padding: 0;
    }
  }
`;

export const SchedulingHome = styled.div`
  width: 100%;
  height: 6.813rem;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left-color: 0.188rem solid #f9cc00;
  border-right-color: 0.188rem solid #f9cc00;

  .BtnScheduling {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28.438rem;
    height: 2.75rem;
    border-radius: 0.625rem;
    background-color: #f9cc00;
    font-weight: bold;
    font-size: 1.25rem;
    color: #000000;

    :hover {
      color: #ffffff;
    }
  }
`;

export const StyleFeedback = styled.div`
  width: 100%;
  height: 24.75rem;
  background-image: url(src/assets/backgroundFeedback.svg);
  background-color: rgba(0, 0, 0, 10);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: #ffffff;
  flex-direction: column;
  padding-top: 1.875rem;
  font-size: 1.25rem;

  @media (max-width: 745px) {
    display: none;
  }

  .feedbacks {
    display: flex;
    flex-direction: row;
    gap: 6.25rem;
    padding-top: 3.75rem;

    .feedback1 {
      height: 12.5rem;
      border: 0.313rem solid #f9cc00;
      border-radius: 0.5rem;
    }

    .feedback2 {
      height: 12.5rem;
      border: 0.313rem solid #f9cc00;
      border-radius: 0.5rem;
    }

    @media (max-width: 815px) {
      display: flex;
      flex-direction: row;
      gap: 6.25rem;
      padding-top: 3.75rem;
      gap: 2%;
    }
  }
`;

export const StyleFooter = styled.footer`
  width: 100%;
  height: 14.313rem;
  background-color: #000000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  color: white;

  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    img {
      height: 0.938rem;
    }

    a {
      color: white;

      :hover {
        color: #f9cc00;
      }
    }
  }

  button {
    width: 11.25rem;
    height: 2.188rem;
    border-radius: 0.625rem;
    background-color: #f9cc00;
    font-weight: bold;
    font-size: 1.25rem;
    color: #000000;
  }

  @media (max-width: 600px) {
    button {
      display: none;
    }
  }
`;
