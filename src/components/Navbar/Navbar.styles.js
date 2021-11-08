import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 5.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto;
  position: sticky;
  top: 0;
  z-index: 5;
  box-shadow: ${(props) => props.theme.boxShadow1};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const NewsFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 139px;
  height: 100%;
  margin-right: 60px;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${(props) => props.theme.primaryText};

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  height: 41px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  box-sizing: border-box;
  font-size: 1.5rem;

  ::placeholder {
    color: #8f9296;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchBar = styled(SearchInput)`
  display: none;
  @media only screen and (min-width: 767px) {
    display: block;
    width: 240px;
    margin-right: 8px;
    padding-left: 40px;
    transition: 0.2s;
  }
`;

export const SearchBarMobile = styled(SearchInput)`
  display: none;
  @media only screen and (max-width: 766px) {
    display: block;
    height: 41px;
    border-radius: 50px;
    padding-left: 15px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: auto;
  margin: 0.5rem 1rem 0.5rem 0.5rem;
`;

export const ActionContainer = styled.button`
  border-radius: 50%;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  transition: 0.1s;
  cursor: pointer;
`;

export const BackArrowContainer = styled(ActionContainer)`
  background-color: ${(props) => props.theme.inputColor};
  margin-right: 5px;
`;

export const MessageContainer = styled(ActionContainer)`
  padding: 0;
  background-color: ${(props) => props.theme.secondaryBackground};
  margin-right: 8px;

  &:focus {
    background-color: ${(props) => props.theme.primaryBackground};
    svg {
      fill: ${(props) => props.theme.primaryText};
    }
    outline: none;
  }
  &:active {
    color: ${(props) => props.theme.primaryTextColor};
    transform: scale(0.96);
  }

  &:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
  }
`;

export const NotificationContainer = styled(ActionContainer)`
  padding: 0;
  background-color: ${(props) => props.theme.secondaryBackground};
  border-radius: 50%;
  margin-right: 8px;
  transition: 0.1s;
  cursor: pointer;

  &:focus {
    background-color: ${(props) => props.theme.primaryBackground};
    svg {
      fill: ${(props) => props.theme.primaryText};
    }
    outline: none;
  }
  &:active {
    color: ${(props) => props.theme.primaryTextColor};
    transform: scale(0.96);
  }

  &:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 18px;
  margin-right: 16px;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: ${(props) =>
    props.primary ? props.theme.primaryBackground : "#fff"};

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.primaryBackground
        : props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${(props) =>
      props.primary ? "none" : props.theme.secondaryBackground};
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const Username = styled.h1`
  font-size: 15px;
  font-weight: medium;
  line-height: 1;
  color: ${(props) =>
    props.primary ? props.theme.primaryText : props.theme.secondaryText};
`;

export const SettingsContainer = styled(ActionContainer)`
  padding: 0;
  background-color: ${(props) => props.theme.secondaryBackground};
  margin-right: 8px;

  &:active,
  &:focus {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    color: ${(props) => props.theme.primaryTextColor};
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    color: ${(props) => props.theme.primaryTextColor};
  }
`;

export const SearchContainer = styled.button`
  display: none;
  @media only screen and (max-width: 766px) {
    padding: 0;
    margin-left: 8px;
    background-color: ${(props) => props.theme.secondaryBackground};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 41px;
    height: 41px;
    border: 0;
    transition: 0.1s;
    cursor: pointer;

    &:focus {
      outline: none;
    }
    &:active {
      color: ${(props) => props.theme.primaryTextColor};
      transform: scale(0.96);
    }

    &:hover {
      background-color: ${(props) => props.theme.secondaryHoverBackground};
    }
  }
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  margin-right: 6px;
`;

export const SearchInputContainer = styled.form`
  position: relative;
`;

export const IconContainer = styled.div`
  display: none;
  @media only screen and (min-width: 767px) {
    display: block;
  }
`;

export const UsersContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  top: 50px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5) !important;
  left: 10px;
  display: flex;
  box-sizing: border-box;
  padding: 8px;
  width: 320px;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &&:hover {
    background-color: ${(props) => props.theme.secondaryBackground};
  }
  &&:active {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
  }
`;

export const GetUserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  object-fit: cover;
`;

export const UserFullName = styled.p`
  font-size: 1.5rem;
  margin: 0;
  line-height: 1;
  margin-left: 12px;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;
`;

export const GetUserContainer = styled.div`
  height: 320px;
  overflow-y: auto;
`;

export const ArrowContainer = styled.div`
  display: none;
  @media only screen and (min-width: 767px) {
    display: block;
    padding: 5px 6px;
    border-radius: 100%;
    margin-right: 12px;
    cursor: pointer;

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
  }
`;

export const MobileLogoContainer = styled.div`
  display: none;
  @media only screen and (max-width: 760px) {
    display: block;
  }
`;

export const DesktopLogoContainer = styled.div`
  display: none;
  @media only screen and (min-width: 760px) {
    display: block;
  }
`;
