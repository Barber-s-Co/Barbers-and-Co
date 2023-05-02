import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import logo from "../../assets/react.svg";

interface IHeaderProps {
  rote: string;
  linkName: string;
  src: string;
  alt: string;
  className: string;
}

export const Header = ({
  rote,
  linkName,
  src,
  alt,
  className,
}: IHeaderProps) => {
  return (
    <StyledHeader>
      <div>
        <img src={src} alt={alt} className={className} />
      </div>

      <div>
        <Link to={rote}>{linkName}</Link>
      </div>
    </StyledHeader>
  );
};
