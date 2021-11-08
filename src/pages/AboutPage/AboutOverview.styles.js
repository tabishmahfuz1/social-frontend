import styled from "styled-components";

export const AboutPageContainer = styled.div``;

export const AboutInfoContainer = styled.div`
  display: flex;
  font-family: Roboto;
  justify-content: center;
  padding: 28px 0;
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 876px;
  background-color: #fff;
  border-radius: 6px;
  @media only screen and (max-width: 575px) {
    border-radius: 0;
  }
  box-shadow: ${(props) => props.theme.boxShadow2};
`;

export const AboutSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  border-right: 1px solid ${(props) => props.theme.secondaryBackground};
  padding: 6px;
`;

export const AboutHeading = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryText};
  margin: 20px 10px;
`;

export const SidebarButton = styled.button`
  border: none;
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Overview = styled(SidebarButton)`
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.primaryBackground};

  &:focus {
    outline: none;
  }
`;

export const WorkAndEducation = styled(SidebarButton)`
  color: ${(props) => props.theme.tertiaryText};
  background-color: #fff;

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
    outline: none;
  }
`;

export const ContactAndBasicInfo = styled(SidebarButton)`
  color: ${(props) => props.theme.tertiaryText};
  background-color: #fff;

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
    outline: none;
  }
`;

export const AboutBodyContainer = styled.div`
  padding: 16px;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WorkplaceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const OverviewContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

export const OverviewText = styled.h1`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 16px;
`;

export const AboutSkeleton = styled.div`
  display: flex;
`;
