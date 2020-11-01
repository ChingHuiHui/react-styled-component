import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

import Top from "./components/Top"
import Bottom from "./components/Bottom"
import Button from "./components/Button"
import HeartList from "./components/HeartList"

import { connect } from "react-redux"

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`

const Wrapper = styled.div`
  width: 500px;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
`
const VideoWrapper = styled.div`
  padding: 5px;
  height: 50%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Album = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  position: relative;
  left: 50px;
  z-index: -1;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    left: 0px;
  }

  ${({ active }) =>
    active &&
    css`
      left: 0px;
    `}
`

const data = [
  {
    info: {
      title: "To Hebe",
      eTitle: "To Hebe",
      info: "專輯 - 共11首歌曲 | 2010-09",
      url: "https://i.kfs.io/album/tw/154187,0v3/fit/500x500.jpg",
      color: "#000",
      playlistId: 'OLAK5uy_ksXyQvf2FUpp0VDC9jgp8D6rqSe-FYeQo'
    },
    songs: [
      { song: "LOVE?" },
      { song: "To Hebe" },
      { song: "離島" },
      { song: "沒有管理員的公寓" },
      { song: "我對不起我" },
      { song: "我想我不會愛你" },
      { song: "寂寞寂寞就好" },
      { song: "你太猖狂" },
      { song: "超級瑪麗" },
      { song: "給小孩" },
      { song: "LOVE!" },
    ],
  },
  {
    info: {
      title: "My Love",
      eTitle: "My Love",
      info: "專輯 - 共10首歌曲 | 2011-09",
      url:
        "https://www.him.com.tw/uploads/cd/30352_0bb559440451b3666c4801209635eae75.png",
      color: "#B3B0A7",
      playlistId: 'OLAK5uy_kvah2hrGAv5aFFD4vzD0qQryCjEYb81hA'
    },
    songs: [
      { song: "烏托邦" },
      { song: "要說什麼" },
      { song: "My Love" },
      { song: "請你給我好一點的情敵" },
      { song: "還是要幸福" },
      { song: "魔鬼中的天使" },
      { song: "無事生非" },
      { song: "花花世界" },
      { song: "影子的影子" },
      { song: "妳" },
    ],
  },
  {
    info: {
      title: "渺小",
      eTitle: "",
      info: "專輯 - 共10首歌曲 | 2013-11",
      url: "https://i.kfs.io/album/tw/2161953,1v2/fit/500x500.jpg",
      color: "#C32A28",
      playlistId: 'OLAK5uy_lsbspp8cr9gadtlsO4L11ULPwAnR57UPM'
    },
    songs: [
      { song: "渺小" },
      { song: "矛盾" },
      { song: "終身大事" },
      { song: "不醉不會" },
      { song: "你快樂未必我快樂" },
      { song: "這個人已經與我無關" },
      { song: "你就不要想起我" },
      { song: "無常" },
      { song: "愛著愛著就永遠" },
      { song: "口袋的溫度" },
    ],
  },
  {
    info: {
      title: "日常",
      eTitle: "Day by day",
      info: "專輯 - 共10首歌曲 | 2016-07",
      url: "https://miro.medium.com/max/998/1*Tpl9nuxc8cx601kFjo-H_Q.jpeg",
      color: "#FCF79E",
      playlistId: 'OLAK5uy_k6V-KAhP7isr5i9erlcai1TFHHT_2HIOU'
    },
    songs: [
      { song: "日常" },
      { song: "人間煙火" },
      { song: "無用" },
      { song: "身體都知道" },
      { song: "念念有詞" },
      { song: "靈魂伴侶" },
      { song: "餘波盪漾" },
      { song: "什麼，哪裡" },
      { song: "慢舞" },
      { song: "獨善其身" },
    ],
  },
  {
    info: {
      title: "無人知曉",
      eTitle: "TIME WILL TELL",
      info: "專輯 - 共10首歌曲 | 2020-09",
      url: "https://i.kfs.io/album/global/88484065,0v1/fit/500x500.jpg",
      color: "#C2C0BF",
      playlistId: 'PLZ-mEA5TV_xSSfBR_pBRJKAAwPBo4gzXY'
    },
    songs: [
      { song: "Intro" },
      { song: "先知" },
      { song: "田" },
      { song: "底里歇斯" },
      { song: "一一" },
      { song: "皆可" },
      { song: "無人知曉" },
      { song: "諷刺的情書" },
      { song: "人什麼的最麻煩了" },
      { song: "懸日" },
      { song: "或是一首歌" }
    ],
  },
]


const key = 'AIzaSyA7E4hs6bVhUbPzXSRh3tdU42XWIgpTwEA';


const App = ({ heart, deleteHeart }) => {

  const [status, setStatus] = useState('playList')
  const [MVList, setMVList] = useState(null)
  const [AlbumData, setAlbumData] = useState(data[0])
  const [isLoading, setIsLoading] = useState(false)

  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=20&playlistId=${AlbumData.info.playlistId}`;
  const getPlayList = async () => {
    setIsLoading(true)
    try{
      const res = await fetch(URL)
      const list = await res.json()
      setMVList(list.items)
      setIsLoading(false)
    }catch(err) {
      console.log('err', err)
    }
  }

  useEffect(()=>{
    getPlayList()
  }, [AlbumData])

  return (
    <MainWrapper>
      <div style={{ zIndex: -1 }}>
        <Album
          onClick={() => setAlbumData(data[0])}
          url="https://i.kfs.io/album/tw/154187,0v3/fit/500x500.jpg"
        />
        <Album
          onClick={() => setAlbumData(data[1])}
          url="https://www.him.com.tw/uploads/cd/30352_0bb559440451b3666c4801209635eae75.png"
        />
        <Album
          onClick={() => setAlbumData(data[2])}
          url="https://i.kfs.io/album/tw/2161953,1v2/fit/500x500.jpg"
        />
        <Album
          onClick={() => setAlbumData(data[3])}
          url="https://miro.medium.com/max/998/1*Tpl9nuxc8cx601kFjo-H_Q.jpeg"
        />
        <Album
          onClick={() => setAlbumData(data[4])}
          url="https://i.kfs.io/album/global/88484065,0v1/fit/500x500.jpg"
        />
      </div>
      <Wrapper>
        <Top AlbumData={AlbumData}>
          <Button small option={() => setStatus('playList')} active={status==='playList'}>
            PLAYLIST
          </Button>
          <Button small option={() => setStatus('videoList')} active={status==='videoList'}>
            VIDEO
          </Button>
        </Top>
        {status==='playList' ? (
          <Bottom AlbumData={AlbumData} />
        ) :
        (
          <VideoWrapper>{
            (!isLoading && MVList) ? MVList.map((video)=>{
              const id = video.snippet.resourceId.videoId;
              const source = `https://www.youtube.com/embed/${id}`
              return <iframe width="100%" src={source} frameborder="0" allowFullScreen key={id}></iframe>
            }) : (
              <div>
                isLoading...
              </div>
            )
          }
          </VideoWrapper>
        )}
        <HeartList />
      </Wrapper>
    </MainWrapper>
  )
}

const mapStateToProps = (state) => ({
  heart: state.heart.lists,
})

export default connect(mapStateToProps)(App)
