import React from "react"
import styled from "styled-components"

import { connect } from "react-redux"
import { deleteHeart } from "../actions/index"

import Button from "./Button"

const ListWrapper = styled.div`
  border-radius: 10px 10px 0 0;
  width: 300px;
  height: 350px;
  background-color: #fff;
  position: fixed;
  bottom: -330px;
  right: 0;
  z-index: 99;
  transition: all 0.2s;
  &:hover {
    bottom: 0px;
  }
`
const Bar = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`

const List = styled.div`
  height: 300px;
  overflow: auto;
  padding: 10px;
  overflow: auto;
`

const ListItem = styled.p`
  border-bottom: 1px solid #ccc;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
`

const HeartList = ({ heart, deleteHeart }) => {
  return (
    <ListWrapper>
      <Bar>
        <i className="fas fa-chevron-up"></i>
      </Bar>
      <List>
        {heart.map((song) => (
          <ListItem key={song}>
            {song}
            <Button heart option={() => deleteHeart(song)} name={song}>
              <i className="fas fa-heart"></i>
            </Button>
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  )
}

const mapStateToProps = (state) => ({
  heart: state.heart.lists,
})

export default connect(mapStateToProps, { deleteHeart })(HeartList)
