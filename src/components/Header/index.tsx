import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";

interface IHeaderProps {
  rote: string;
  linkName: string;
  src: string;
}

export const Header = ({ rote, linkName, src }: IHeaderProps) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate(`${rote}`);
  };

  return (
    <StyledHeader>
      <div>
        <img className="logoImg" src={src} alt="logo" />
      </div>

      <div>
        <button onClick={() => logout()}>{linkName}</button>
      </div>
    </StyledHeader>
  );
};
