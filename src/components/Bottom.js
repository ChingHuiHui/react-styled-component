import React from "react"
import styled, { keyframes } from "styled-components"

import { connect } from "react-redux"
import { deleteHeart, addHeart } from "../actions/index"

import Button from "./Button"

const Wrapper = styled.div`
  padding: 5px;
  height: 50%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const List = styled.ul`
  list-style: none;
`

const FadeIn = keyframes`
    0%{
        width: 0%;
    }
    100%{
        width: 100%;
    }
    `
const ListItem = styled.li`
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  .bar {
    background-color: ${({ info }) => info.color};
    opacity: 0.2;
    position: absolute;
    width: 0%;
    height: 100%;
  }
  &:hover .bar {
    animation: ${FadeIn} ease-in 0.5s;
    animation-fill-mode: forwards;
  }
`

const Bottom = ({ AlbumData, addHeart, heart, deleteHeart }) => {
  const add = (name) => {
    if (heart.length >= 10) {
      alert("最多10個項目")
    } else {
      addHeart(name)
    }
  }
  const deleteIt = (name) => {
    deleteHeart(name)
  }
  return (
    <Wrapper>
      <List>
        {AlbumData.songs.map((s, index) => (
          <ListItem key={s.song} info={AlbumData.info}>
            <p>{index + 1}</p>
            <p>{s.song}</p>
            {heart.indexOf(s.song) < 0 ? (
              <Button heart option={add} name={s.song}>
                <i className="far fa-heart"></i>
              </Button>
            ) : (
              <Button heart option={deleteIt} name={s.song}>
                <i className="fas fa-heart"></i>
              </Button>
            )}
            <div className="bar"></div>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  heart: state.heart.lists,
})

export default connect(mapStateToProps, { deleteHeart, addHeart })(Bottom)
