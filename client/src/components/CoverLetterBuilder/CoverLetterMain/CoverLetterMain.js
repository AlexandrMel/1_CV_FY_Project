import React from "react";
import "../../../styles/CoverLetterMain.css";
import CoverLetterHeader from "./CoverLetterHeader";
import CoverLetterBody from "./CoverLetterBody";
import { ThemeContext } from "../../../contexts/ThemeContext";

class CoverLetterMain extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="alignContainer">
              <div
                id="container"
                style={{ fontFamily: context.style.font, fontSize: context.style.size3 }}
              >
                <CoverLetterHeader></CoverLetterHeader>
                <div className="wrap">
                  <CoverLetterBody></CoverLetterBody>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CoverLetterMain;
