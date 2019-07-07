import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Video from '../Video/Video';
import ErrorMessage from '../Video/Message/ErrorMessage';
import LoadMessage from '../Video/Message/LoadMessage';
import '../Video/Video.css'
import "./Preview.css"



const Preview=React.forwardRef((props, ref) =>{
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
        document.addEventListener('touchend', props.clicked)
        document.addEventListener("mousedown",props.clicked);
        // cleanup function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", props.clicked);
          document.removeEventListener("touchend", props.clicked);
        };
      }, [props.clicked]);

      useEffect(
        ()=>{
          const fetchYTLink = async ()=>{
              setIsError(false);
              setIsLoading(true);
              try{
                if(props.previewSelected){
                  const response=  await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.previewSelected}`);
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
        },[props.previewSelected])

    return(
      <div className="Video__Container" ref={ref}>   
        { isError && <ErrorMessage/> }
        {isLoading? <LoadMessage/> : youtubeLink && <Video youtubeLink={youtubeLink}/>} 
      </div>
    );
})

export default Preview;