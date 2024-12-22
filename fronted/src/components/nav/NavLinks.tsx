import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const NavLinks = () => {
  return (
    <>
      <Link to="/practices/search">
        <Button variant="ghost">Advanced Search</Button>
      </Link>
      <Link to="/practices/directory">
        <Button variant="ghost">Directory</Button>
      </Link>
    </>
  );
};