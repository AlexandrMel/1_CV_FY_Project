import React from "react";
import "../styles/BuilderNav.css";
import FontSubMenu from "./BuilderSubMenus/FontSubMenu";
import ColorSubMenu from "./BuilderSubMenus/ColorSubMenu";
import FontSizeSubMenu from "./BuilderSubMenus/FontSizeSubMenu";
import CoverLayoutSubMenu from "./BuilderSubMenus/CoverLayoutSubMenu";
import TemplatesSubMenu from "./BuilderSubMenus/TemplatesSubMenu";
import { NavLink } from "react-router-dom";

const BuilderNav = () => {
  return (
    <div className="CvMenu">
      <NavLink to="/">
        <span className="logo-template">CV|FY</span>
      </NavLink>
      <div className="design">
        <div className="tool-label">Design</div>
        <div className="tools">
          <FontSubMenu />
          <ColorSubMenu />
          <FontSizeSubMenu />
          <CoverLayoutSubMenu />
          <TemplatesSubMenu />
        </div>
      </div>
      <div className="download">
        <div className="download-btn">
          <div className="downloadDiv">
            <span className="tool-icon first-icon">⤓</span>
            <span className="tool-desc tool-download">Download</span>
          </div>
        </div>
      </div>
      <div className="my-documents">
        <div className="my-docs-btn">
          <div className="docsDiv">
            <span className="tool-icon tool-mydoc">
              <NavLink to="/my-documents" style={{ color: "#fff" }}>
                MyDocuments
              </NavLink>
            </span>
          </div>
        </div>
      </div>
      <div className="template-menu">
        <div className="template-menu-btn">
          <div className="temp-menu">
            <span className="tool-menu-bar first-icon">―</span>
            <span className="tool-menu-bar first-icon">―</span>
            <span className="tool-menu-bar first-icon last-bar">―</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderNav;
