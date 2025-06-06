import React, { useState } from 'react'
import { useEffect } from 'react'
import './Recommended.css'
import { API_KEY, BASE_URL } from '../../config';
import { value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {

   const[apiData,setApiData] = useState([]);
   const fetchData = async () => {
      const relatedVideos_url=`${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=50&key=${API_KEY} `
      await fetch(relatedVideos_url).then(res => res.json()).then(data => setApiData(data.items))
   }
   useEffect(() => {
      fetchData();
   },[])

  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
          return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">

               <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className=" vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} views</p>
          </div>
           </Link>
       
            )
        })}
       
    </div>
  )
}

export default Recommended