import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import DropdownMenu from "./DropdownMenu";

const CollapseMenu = props => {
  const onLogoutClick = e => {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("currentCV");
    localStorage.removeItem("currentCover");
    window.location.reload();
  };


  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <ul className="minMenu">
          <li key="1">
            <a href="/create-cv" onClick={props.handleNavbar}>
              Create CV
            </a>
          </li>
          <li key="2">
            <a href="/create-cover-letter" onClick={props.handleNavbar}>
              Create Cover Letter
            </a>
          </li>
          <li key="3">
            <a href="/cv-templates" onClick={props.handleNavbar}>
              CV Templates
            </a>
          </li>
          <li key="4">
            <a href="/cover_letter-templates" onClick={props.handleNavbar}>
              Cover Letter Templates
            </a>
          </li>
          <li key="5">
            <a href="/my-documents" onClick={props.handleNavbar}>
              My Documents
            </a>
          </li>
          <li key="6">
            <a href="/#" onClick={onLogoutClick}>
              Log Out
            </a>
          </li>
          <li key="7">
            <div>
              <DropdownMenu />
            </div>
          </li>
        </ul>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  height: 100%;
`;
