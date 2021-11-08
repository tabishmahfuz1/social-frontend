import styled from "styled-components";

export const PostContainer = styled.div`
  margin: 1.6rem 0;
  &&:first-child {
    margin-top: 0;
  }
  max-width: 680px;
  box-shadow: ${(props) => props.theme.boxShadow2};
  border-radius: 8px;
  font-family: "Roboto";
  @media only screen and (max-width: 575px) {
    border-radius: 0;
  }
  background-color: #fff;
`;

export const PopContainer = styled.div`
  display: flex;
  border-radius: 8px;
  width: 100%;
  z-index: 20;
  flex-direction: column;

  @media only screen and (max-width: 575px) {
    width: 200px;
  }
`;

export const PopButton = styled.button`
  text-align: left;
  font-size: 1.5rem;
  border: none;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  width: 100%;
  background-color: #fff;
  color: ${(props) => props.theme.secondaryText};
  transition: 0.1s;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
    color: ${(props) => props.theme.secondaryText};
  }

  &::after,
  &:focus {
    outline: none;
    color: ${(props) => props.theme.secondaryText};
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    color: ${(props) => props.theme.secondaryText};
  }
`;

export const CommentsContainer = styled.div`
  padding: 8px 16px;
  border-radius: 0 0 8px 8px;
`;

export const PostHeader = styled.div`
  display: flex;
  margin-bottom: 0;
  padding: 12px 16px;
`;
export const SettingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 100%;
  padding: 5px;
  cursor: pointer;
  position: relative;

  &:focus {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }
  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
  }
`;

export const PostCard = styled.div``;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
`;
export const ProfileName = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;
  font-family: "Roboto";

  &:hover {
    text-decoration: underline;
  }
`;

export const PostCreation = styled.p`
  font-size: 1.3rem;
  margin: 4px 0 0 0;
  color: ${(props) => props.theme.tertiaryText};
`;

export const PostContent = styled.div`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1.5rem;
  p {
    margin: 0;
    padding: 0px 16px 16px 16px;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.secondaryHoverBackground};
  border-bottom: 1px solid ${(props) => props.theme.secondaryHoverBackground};
  margin: 0 16px;
  @media only screen and (max-width: 575px) {
    margin: 0;
  }
`;
export const FooterButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 6px;
  margin: 3px 0;
  padding: 5px;
  justify-content: center;
  flex: 3;
  border: none;
  background-color: transparent;

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
  }
`;

export const Count = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-left: 5px;
  line-height: 1;
`;

export const LikesCount = styled(Count)`
  margin-top: 5px;
  color: ${(props) => props.theme.primaryText};
`;

export const CommentsCount = styled(Count)`
  color: ${(props) => props.theme.secondaryTextColor};
`;

// export const SharesWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   justify-content: center;
//   flex: 3;
//   margin: 3px 0;
//   margin-left: 0.5rem;
//   border-radius: 6px;
//   padding: 5px;

//   &:hover {
//     background-color: ${(props) => props.theme.tertiaryBackground};
//     outline: none;
//   }

//   &::after,
//   &:focus {
//     outline: none;
//   }
//   &:active {
//     background-color: ${(props) => props.theme.secondaryBackground};
//   }
// `;
// export const SharesCount = styled.p`
//   font-size: 1.5rem;
//   margin: 0;
//   margin-left: 6px;
//   color: ${(props) => props.theme.secondaryText};
// `;

export const FooterHeading = styled.span`
  font-size: 1.5rem;
  margin-left: 5px;
  color: ${(props) => props.theme.tertiaryText};
  line-height: 1;
  margin-top: 5px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

export const PostSkeleton = styled.div`
  display: flex;
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  padding: 13px;
`;
