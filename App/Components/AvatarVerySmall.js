import React from "react";
import styled from "styled-components";

export default props => {
  return (
    <AvatarComment
      source={{ uri: "https://uinames.com/api/photos/male/9.jpg" }}
    />
  );
};
const AvatarComment = styled.Image`
  align-self: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
