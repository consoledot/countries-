import styled,{keyframes} from "styled-components";


export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`;
export const CardContainer = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  cursor: pointer;
  width: 270px;
  margin: 0 auto;
  background: ${({ theme }) => theme.element};
  img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
  }
  div:nth-child(2) {
    margin: 1rem;
    h3 {
      font-weight: 800;
    }
    .text {
      font-weight: 500;
    }
  }
`;
export const ContainerDiv = styled.div`
  // margin: 3rem 4rem;
  max-width: 90%;
  margin: 3rem auto;
`;
export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  div {
    margin-top: 0.5rem;
  }
  div:nth-child(1) {
    width:26em;
    background-color: white;
    border-radius: 5px;
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.inputBackground};
  }
  input {
    border: none;
    margin-left: 1.5rem;
    margin-top: 0;
    width: 100%;
    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
  input,
  select {
    padding: 10px;
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.text};
  }
  select {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  option {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
export const HeaderContainer = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
  background: ${({ theme }) => theme.element};
  div {
    display: flex;
    align-items: center;
    font-weight: 400;
    cursor: pointer;
    p {
      margin-left: 0.5rem;
    }
  }
`;

export const CardInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  h3 {
    font-weight: 800;
    font-size: 2rem;
  }
  img {
    width: 90%;
  }
`;
export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  cursor: pointer;
`;
export const BorderButton = styled(Button)`
  margin: 0.2rem;
`;
export const CountryDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 1rem 2rem 5rem 0rem;
    p {
      padding: 0.3rem 0;
    }
  }
  span:nth-child(1) {
    font-weight: 600;
  }
  .languages {
    display: inline-block;
  }
`;

export const Container = styled.div`
  margin: 6rem auto;
  text-align: center;
`;
export const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
export const LoadingSpinner = styled.div`
  pointer-events: none;
  width: 10rem;
  height: 10rem;
  border: 0.2em solid transparent;
  border-color: ${({ theme }) => theme.element};
  border-top-color: ${({ theme }) => theme.text};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin: 15% auto;
`
