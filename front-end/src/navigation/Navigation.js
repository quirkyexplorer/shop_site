import { Link } from "react-router-dom";
import styled from "styled-components";

/*
  color scheme
  hot pink hsl(315, 100%, 50%);
  dark pink hsl(300, 100%, 35%);
  red pink hsl(333, 100%, 50%);
  light purple hsl(265, 100%, 50%);
  dark purple hsl(265, 100%, 35%);
  dark blue hsl(198, 82%, 5%).
*/

const NavigationWrapper = styled.div`
  background-color: hsl(198, 82%, 5%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 24px;
  height: 50px;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: hsl(315, 100%, 50%);

  /* Remove the color change on hover */
  &:hover {
    color: hsl(315, 100%, 50%); /* Set the same color as the default color */
  }

  /* Remove the color change when the link is active (clicked and being clicked) */
  &:active {
    color: hsl(315, 100%, 50%); /* Set the same color as the default color */
  }

  /* Remove the color after the link has been visited (clicked) */
  &:visited {
    color: hsl(315, 100%, 50%); /* Set the same color as the default color */
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: hsl(315, 100%, 50%);
  gap: 20px;
`;

export default function Navigation() {
  return (
    <NavigationWrapper id="NavigationWrapper">
      {/* <div className="edit">
                  <Link to={'/edit'}>Edit</Link>
                </div> */}
      <Link to={"/"}>
        <Logo id="Logo">2sure</Logo>
      </Link>
      
      <MenuWrapper id="MenuWrapper">
        <div className="menu">Menu</div>
        <div className="about">About</div>
        <div className="cart">Cart</div>
      </MenuWrapper>
    </NavigationWrapper>
  );
}

// .header{
//   background-color: hsl(325, 100%, 41%, 100%);
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   align-items: center;

// }

// .menu {
//   margin-left: 40px;
// }

// .right {
//   display: flex;
// }

// .about {
//   margin-right: 40px;
// }

// .cart {
//   margin-right: 40px;
// }
