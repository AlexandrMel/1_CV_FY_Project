import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ProjectGroup from "./ProjectGroup";

class Projects extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addProjectGroup } = context;
          const group = context.userData.projects.map(el => (
            <ProjectGroup key={el.title} data={el} />
          ));
          return (
            <div className="projects">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  PROJECTS
                </div>
                <div className="addProjectDiv">
                  <button className={"addGroupBtn"} onClick={addProjectGroup}>
                    add
                  </button>
                </div>
              </div>
              <div className="projects-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Projects;
