import VideoCard from "./VideoCard"

const VideoList = ({list}) =>{
return <div>
    {list.map((item,idx) => <VideoCard key={idx} item={item}/>)}
</div>
}

export default VideoList