import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AboutContainer,
  AboutHeading,
  HomeContainer,
  InfoBody,
  StyledButton,
  WorkplaceContainer,
} from "./About.styles";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as WorkplaceIcon } from "../../assets/icons/briefcase.svg";

const About = ({ readOnly, user }) => {
  return (
    <AboutContainer>
      <AboutHeading>Intro</AboutHeading>
      {user.workPlace && (
        <WorkplaceContainer>
          <WorkplaceIcon width="20" height="20" fill="#65676b" />
          <InfoBody>
            Works at{" "}
            <span style={{ fontWeight: "bold" }}>{user.workPlace}</span>
          </InfoBody>
        </WorkplaceContainer>
      )}
      {user.homePlace && (
        <HomeContainer>
          <HomeIcon width="20" height="20" fill="#65676b" />
          <InfoBody>
            Lives in{" "}
            <span style={{ fontWeight: "bold" }}>{user.homePlace}</span>
          </InfoBody>
        </HomeContainer>
      )}
      {!readOnly && (
        <Link to={`${user.username}/about_overview`}>
          <StyledButton>Edit Details</StyledButton>
        </Link>
      )}
    </AboutContainer>
  );
};

export default About;

About.propTypes = {
  user: PropTypes.shape({
    coverImage: PropTypes.string,
    avatarImage: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    workPlace: PropTypes.string,
    homePlace: PropTypes.string,
    username: PropTypes.string,
  }),
  readOnly: PropTypes.bool,
};

About.defaultProps = {
  user: null,
  readOnly: null,
};
