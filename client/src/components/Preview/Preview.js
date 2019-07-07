import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Video from '../Video/Video';
import ErrorMessage from '../Video/Message/ErrorMessage';
import LoadMessage from '../Video/Message/LoadMessage';
import '../Video/_video.scss'




const Preview=React.forwardRef(({clicked,previewSelected}, ref) =>{
  const [youtubeLink,setYoutubeLink]= useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const convertYoutubeLink=(link)=>{
    const YTREGEX = /watch\?v=/;        //we need to convert the watch endpoint to embed endpoint to use iframe 
    const embedYoutube = link.replace(YTREGEX,'embed/');
    return embedYoutube
  }

    useEffect(() => {
        // add when mounted
        document.addEventListener('touchend', clicked)
        document.addEventListener("mousedown",clicked);
        // cleanup function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", clicked);
          document.removeEventListener("touchend", clicked);
        };
      }, [clicked]);

      useEffect(
        ()=>{
          const fetchYTLink = async ()=>{
              setIsError(false);
              setIsLoading(true);
              try{
                if(previewSelected){
                  const response=  await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${previewSelected}`);
                  const ytLink = response.data.meals[0].strYoutube;
                  const embedLink = convertYoutubeLink(ytLink);
                  setYoutubeLink(embedLink);
                }
              }
              catch(error){
                  setIsError(true);
              }
              setIsLoading(false);
          };
          fetchYTLink();
        },[previewSelected])

    return(
      <div className="Video__Container" ref={ref}>   
        { isError && <ErrorMessage/> }
        {isLoading? <LoadMessage/> : youtubeLink && youtubeLink != "" ? <Video youtubeLink={youtubeLink}/> : <ErrorMessage/> } 
      </div>
    );
})

export default Preview;