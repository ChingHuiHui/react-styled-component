import React from "react"
import styled, { css } from "styled-components"

import Button from "./Button"

const Wrapper = styled.div`
  height: 45%;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #ccc;
`
const InnerWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`
const Box = styled.div`
  width: ${({ w }) => w};
  height: 150px;
  ${({ ImgBox }) =>
    ImgBox &&
    css`
      background-image: url(${({ AlbumData }) => AlbumData.info.url});
      background-size: cover;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`
const Title = styled.h1`
  font-size: 25px;
  margin: 10px;

  .smallText {
    font-size: 16px;
    color: #333;
    margin-left: 5px;
  }
`
const Text = styled.p`
  font-size: 12px;
  margin-left: 15px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.light};
`

const Top = ({ AlbumData, children }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Box w="150px" ImgBox AlbumData={AlbumData}></Box>
        <Box w="300px">
          <Title>
            {AlbumData.info.title}
            <span className="smallText">{AlbumData.info.eTitle}</span>
          </Title>
          <Text>{AlbumData.info.info}</Text>
          <Button option={() => console.log("listen")}>Listen</Button>
        </Box>
      </InnerWrapper>
      {children}
    </Wrapper>
  )
}

export default Top
