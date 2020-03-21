import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ExperienceGroupModern from "./ExperienceGroupModern";

class ExperienceModern extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const group = context.userData[
            this.props.index
          ].experience.map((el, i) => (
            <ExperienceGroupModern
              key={i}
              dat={i}
              index={this.props.index}
              data={el}
            />
          ));
          return (
            <div
              className="experience exp1page"
              style={{
                padding: `${
                  context.style.displayOneColumn === false
                    ? "20px 30px 0 30px"
                    : "10px 40px"
                }`
              }}
            >
              <div
                className="sectionHeader"
                style={{
                  justifyContent: `${
                    context.style.displayOneColumn === false
                      ? "space-between"
                      : "center"
                  }`
                }}
              >
                <div
                  className="section-label"
                  style={{ color: context.style.color }}
                >
                  WORK EXPERIENCE
                </div>
              </div>
              <div className="experience-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ExperienceModern;