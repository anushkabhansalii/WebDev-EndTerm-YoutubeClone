import React, { useState } from 'react'
import { useEffect } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, BASE_URL } from '../../config'; 
import { value_converter } from '../../data';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom'

const PlayVideo = () => {

    const {videoId} = useParams();

   const [apiData, setApiData] = useState(null);
   const[channelData, setChannelData] = useState(null);
   const [commentData, setCommentData] = useState([]);

   const fetchVideoData = async () => {
       //Fetching videos data
       const videoDetails_url = 
        `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
       await fetch (videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
   }
   const fetchOtherData = async () => {
       //Fetching channel data
       const channelData_url = 
           `${BASE_URL}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
         await fetch (channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

       //Fetching comment data
       const commentData_url = 
          `${BASE_URL}/commentThreads?part=snippet%2Cid&videoId=${videoId}&key=${API_KEY}`;
       await fetch (commentData_url).then(res => res.json()).then(data => setCommentData(data.items))
   }

   useEffect(() => {
       fetchVideoData();
   },[videoId])

   useEffect(() => {
       fetchOtherData();
   },[apiData])



  return (
    <div className='play-video'>
       {/* <video src={video1} controls autoPlay muted></video> */}
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{apiData?apiData.snippet.title:"Title not found"}</h3>
       <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):"0"}views &bull;{apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
          <div>
            <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):"0"}</span>
            <span> <img src={dislike} alt="" /></span>
            <span> <img src={share} alt="" />Share</span>
            <span> <img src={save} alt="" />Save</span>
          </div>
       </div>
       <hr />
       <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""}alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTitle:"Channel not found"}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"0"} Subscribers</span>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):"0"} comments</h4>

        {commentData.map((item,index) => {
            return(
                <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                    <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            )
        })}
        
       </div>
    </div>
  )
}

export default PlayVideo