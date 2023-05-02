import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";

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

  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate(`${rote}`);
  };

  return (
    <StyledHeader>
      <div>

        <img src={src} alt={alt} className={className} />
      </div>

      <div>
        {token ? (
          <button onClick={() => logout()}>{linkName}</button>
        ) : (
          <Link to={rote}>{linkName}</Link>
        )}
      </div>

    </StyledHeader>
  );
};
