import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class AchievementGroup extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = { display: "none", borderBottom: "" };
  }

  render() {
    const { display, borderBottom } = this.state;
    return (
      <ThemeContext.Consumer>
        {context => {
          const {
            modifyAchievements,
            addGroup,
            deleteGroup,
            moveUpGroup,
            moveDownGroup
          } = context;
          return (
            <>
              <div
                tabIndex="0"
                suppressContentEditableWarning={true}
                type="text"
                className="achiev-group"
                ref={input => (this.my_refs["achiev-group"] = input)}
                onFocus={() =>
                  this.setState({ display: "", borderBottom: "1px solid blue" })
                }
                onBlur={() =>
                  this.setState({ display: "none", borderBottom: "" })
                }
              >
                {/* ********************SECTION MENUS*************** */}
                <div className="sectionsMenuDiv" style={{ display: display }}>
                  <i
                    className="fas fa-plus-circle addIcon"
                    onClick={() =>
                      addGroup("achievements", this.props.index, this.props.dat)
                    }
                    title="add group"
                  ></i>
                  <i
                    className="fas fa-angle-up angleIcon"
                    title="move up"
                    onClick={() =>
                      moveUpGroup(
                        "achievements",
                        this.props.index,
                        this.props.dat
                      )
                    }
                  ></i>
                  <i
                    className="fas fa-angle-down angleIcon"
                    title="move down"
                    onClick={() =>
                      moveDownGroup(
                        "achievements",
                        this.props.index,
                        this.props.dat
                      )
                    }
                  ></i>
                  <i
                    onClick={() =>
                      deleteGroup(
                        "achievements",
                        this.props.index,
                        this.props.dat
                      )
                    }
                    className="deleteIcon far fa-trash-alt"
                    title="delete group"
                  ></i>
                </div>
                {/* ************************************************** */}
                <div className="editableDiv">
                  <span
                    onBlur={e =>
                      modifyAchievements(
                        this.props.index,
                        this.props.dat,
                        e.target.innerText
                      )
                    }
                    className="achievementDesc"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size3,
                      borderBottom: borderBottom
                    }}
                  >
                    {this.props.data}
                  </span>
                </div>
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default AchievementGroup;
