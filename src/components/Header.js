import { HeaderContainer } from "../styles/styles";

export const Header = ({ themelogger }) => (
  <HeaderContainer>
    <h3 className="font-bold">Where in the world?</h3>
    <div onClick={() => themelogger()}>
      <ion-icon name="moon-outline"></ion-icon>
      <p>Dark Mode</p>
    </div>
  </HeaderContainer>
);
