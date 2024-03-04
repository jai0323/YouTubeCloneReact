import { Card } from "react-bootstrap"

const MainVideo = ({video}) =>{

  const videoSrc = `https://www.youtube.com/embed/${video?.id?.videoId}`
 
return    <Card >
  <iframe style={{height:500}} src={videoSrc}/>
<Card.Body>
<Card.Title>{video?.snippet?.title}</Card.Title>
  <Card.Text>{video?.snippet?.channelTitle}</Card.Text>
  <Card.Text>
  {video?.snippet?.description}
  </Card.Text>
</Card.Body>
</Card>
}

export default MainVideo