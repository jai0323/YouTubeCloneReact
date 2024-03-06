import VideoCard from "./VideoCard"

const VideoList = ({list, selected}) =>{
    const selectedVideo = (idx)=>{
        selected(idx);
    }
return <div>
    {list.map((item,idx) => <VideoCard key={idx} item={item} onClick={selectedVideo.bind(idx)}/>)}
</div>
}

export default VideoList