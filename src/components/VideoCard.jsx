import  {Card, Container, Row, Col} from 'react-bootstrap'
const VideoCard = ({item}) =>{
  //console.log(item)
  let title = item.snippet.title;
  if(title.length>40)
  {
    title= title.slice(0,50)+"..."; 
  }
return <Container style={{marginBottom:50, height:80}}>
  <Row>
    <Col sm='6'><Card.Img variant="top" src={item.snippet.thumbnails.default.url}/></Col>
    <Col sm='6' className="text-wrap"  style={{height:50}}>{title}</Col>
  </Row>
</Container>
}

export default VideoCard;