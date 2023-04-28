import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import logo from "../../assets/react.svg"

interface IHeaderProps {
  rote: string;
  linkName: string;
  src: string;
}

export const Header = ({ rote, linkName, src }: IHeaderProps) => {
  return (
    <StyledHeader>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <Link to={rote}>{linkName}</Link>
      </div>
    </StyledHeader>
  );
};
