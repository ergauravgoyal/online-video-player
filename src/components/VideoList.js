import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedVideoList = videos.map((video) => {
        return (
            <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />
        )
    })
    return (
        <div className="ui relaxed divided list">
            {renderedVideoList}
        </div>
    )
}


export default VideoList
