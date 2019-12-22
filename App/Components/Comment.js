import React from "react";
import styled from "styled-components";
import TextApp from "./TextApp";
import AvatarVerySmall from "./AvatarVerySmall";
export default props => {
  const { source, name, comment } = props;
  return (
    <Comment>
      <AvatarVerySmall
        source={{ uri: "https://uinames.com/api/photos/male/9.jpg" }}
      />
      <ContainterColumnComment>
        <TextApp
          fontSize="12px"
          bold="normal"
          color="black"
          align="left"
          mb="0"
        >
          {name}
        </TextApp>
        <TextApp fontSize="10px" bold="normal" align="left" mb="0">
          {`"${comment}"`}
        </TextApp>
      </ContainterColumnComment>
    </Comment>
  );
};

const Comment = styled.View`
  flex-direction: row;
`;

const ContainterColumnComment = styled.View`
  flex-direction: column;
  margin: 4px 16px;
`;
