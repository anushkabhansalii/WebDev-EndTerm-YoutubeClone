import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
       <video src={video1} controls autoPlay muted></video>
       <h3>Watch Anushka Jain on YouTube</h3>
       <div className="play-video-info">
        <p>20M views &bull; 5 days ago</p>
          <div>
            <span><img src={like} alt="" />125</span>
            <span> <img src={dislike} alt="" />0</span>
            <span> <img src={share} alt="" />Share</span>
            <span> <img src={save} alt="" />Save</span>
          </div>
       </div>
       <hr />
       <div className="publisher">
        <img src={jack}alt="" />
        <div>
            <p>Anushka Jain</p>
            <span>200 Subscribers</span>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="vid-description">
        <p>Educational Content </p>
        <p>Subscribe to my channel to get access to exclusive content</p>
        <hr />
        <h4>130 comments</h4>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bharath Bhansali <span>1 day ago</span></h3>
                <p>Very Good video , keep it up , keep growing</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bharath Bhansali <span>1 day ago</span></h3>
                <p>Very Good video , keep it up , keep growing</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bharath Bhansali <span>1 day ago</span></h3>
                <p>Very Good video , keep it up , keep growing</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bharath Bhansali <span>1 day ago</span></h3>
                <p>Very Good video , keep it up , keep growing</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default PlayVideo