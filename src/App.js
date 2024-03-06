import { Container, Row ,Col} from "react-bootstrap"
import Search from "./components/Search"
import MainVideo from "./components/MainVideo"
import VideoList from "./components/VideoList"
import { useEffect, useState } from "react"
import youtube from "./api/youtube"

const App = () =>{
  const [searchTerm,setSearchTerm] = useState('teri batton')
  const [list,setList] = useState([])
  const [selectedVideo,setSelectVideo] = useState(0);

  const onSubmitHandler = async () =>{
    const response = await youtube.get("search",{
      params:{
        part:"snippet",
        maxResults:10,
        key:'AIzaSyCqF0k3lbl_WS722bEHxLelws71_2zCHoY',
        q:searchTerm
      }
    })

    setList(response.data.items)
  }

  useEffect(()=>{
    onSubmitHandler()
  },[])

  console.log("selected ==",selectedVideo)

return <>
  <Container>
    <Search  setSearchTerm={setSearchTerm} handleSubmit={onSubmitHandler}/>
    <Row className="mt-4">
      <Col sm={9} >
        <MainVideo video={list.length===0?'':list[selectedVideo]}/>
      </Col>
      <Col sm={3}>
        <VideoList list={list} selected={setSelectVideo}/>
      </Col>
    </Row>
  </Container>
</>
}

export default App