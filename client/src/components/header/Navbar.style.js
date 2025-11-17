import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 80px;
  background-color: var(--secondary-color);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-white);
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: height 0.5s ease-in-out;

  &.expanded {
    height: 100vh;
  }
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  z-index: 20;
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 15px;

    a {
      text-decoration: none;
      color: var(--text-white);
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  /* Mobile Menu */
  @media (max-width: 768px) {
    position: absolute;
    top: -300px;
    left: 0;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.5s ease-in-out;

    li {
      font-size: 24px;
      margin: 15px 0;
    }

    .expanded & {
      top: 120px;
      opacity: 1;
    }
  }
`;

export const ToggleIcons = styled.div`
  display: none;
  font-size: 32px;
  color: var(--primary-color);
  cursor: pointer;
  z-index: 20;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const header = styled.div`
  width: "100%",
  padding: "10px 20px",
  backgroundColor: "#f5f5f5",
`;
export const nav = styled.div`
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
`;
export const links = styled.div` 
    display: "flex",
    alignItems: "center",
    gap: "20px",
`;