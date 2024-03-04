import { Container, Row ,Col} from "react-bootstrap"
import Search from "./components/Search"
import MainVideo from "./components/MainVideo"
import VideoList from "./components/VideoList"
import { useEffect, useState } from "react"
import youtube from "./api/youtube"

const App = () =>{
  const [searchTerm,setSearchTerm] = useState('teri batton')
  const [list,setList] = useState([])

  const onSubmitHandler = async () =>{
    const response = await youtube.get("search",{
      params:{
        part:"snippet",
        maxResults:10,
        key:'AIzaSyBuV4S-D419Bn8gpCPhBNJI2gtw0vTiUio',
        q:searchTerm
      }
    })

    setList(response.data.items)
  }

  useEffect(()=>{
    onSubmitHandler()
  },[])

return <>
  <Container>
    <Search  setSearchTerm={setSearchTerm} handleSubmit={onSubmitHandler}/>
    <Row className="mt-4">
      <Col sm={9} >
        <MainVideo video={list.length===0?'':list[0]}/>
      </Col>
      <Col sm={3}>
        <VideoList list={list}/>
      </Col>
    </Row>
  </Container>
</>
}

export default App