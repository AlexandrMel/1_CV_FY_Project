import React, { Component, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Draggable from "./Draggable";

class LayoutSubMenu extends Component {
  constructor() {
    super();

    this.state = {
      userId: "user-1",
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    const leftSide = Array.from(
      document.querySelectorAll("#leftCvSection div.dndSection")
    ).map(el => el.getAttribute("name"));
    const rightSide = Array.from(
      document.querySelectorAll("#rightCvSection div.dndSection")
    ).map(el => el.getAttribute("name"));

    if(this.props.oneColumn === true){
      this.props.setStructure(leftSide, rightSide, "one");
    }
    if(this.props.oneColumn === false){
      this.props.setStructure(leftSide, rightSide, "two");
    }
  

    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  handleUserChange(e) {
    const userId = e.currentTarget.dataset.userId;
    this.setState({ userId });
    // or this.setState({userId: userId})
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const {
            togglePhotoClass,
            toggleTitleClass,
            toggleSummaryClass,
            toggleOneColumn
          } = context;
          return (
            <div>
              <div className="layout-btn " onClick={this.showMenu}>
                <span className="tool-icon">☷</span>
                <span className="tool-desc">Layout</span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="layoutSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="headerElements">
                    Show:
                    <label className="headerContainer">
                      Photo
                      <input type="radio" name="radio" />
                      <span
                        className={
                          context.style.displayPhoto
                            ? "checkedCircle"
                            : "checkMark"
                        }
                        onClick={() => togglePhotoClass()}
                      ></span>
                    </label>
                    <label className="headerContainer">
                      Title
                      <input type="radio" name="radio" />
                      <span
                        className={
                          context.style.displayTitle
                            ? "checkedCircle"
                            : "checkMark"
                        }
                        onClick={() => toggleTitleClass()}
                      ></span>
                    </label>
                    <label className="headerContainer">
                      Summary
                      <input
                        type="radio"
                        name="radio"
                        className="checkElements"
                      />
                      <span
                        className={
                          context.style.displaySummary
                            ? "checkedCircle"
                            : "checkMark"
                        }
                        onClick={() => toggleSummaryClass()}
                      ></span>
                    </label>
                  </div>

                  <div className="layoutToggle">
                    <div>Suggested</div>
                    <div>Custom</div>
                  </div>
                  <div className="oneColumnDiv">
                    <label className="headerContainer">
                      One column
                      <input type="radio" name="radio" />
                      <span
                        className={
                          context.style.displayOneColumn
                            ? "checkedCircle"
                            : "checkMark"
                        }
                        onClick={() => toggleOneColumn()}
                      ></span>
                    </label>
                  </div>
                  <Draggable></Draggable>
                </div>
              ) : null}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default LayoutSubMenu;
