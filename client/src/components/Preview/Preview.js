import React,{useEffect} from 'react';
import Video from '../Video/Video';
import "./Preview.css"



const Preview=React.forwardRef((props, ref) =>{


    useEffect(() => {
        // add when mounted
        document.addEventListener('touchend', props.clicked)
        document.addEventListener("mousedown",props.clicked);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", props.clicked);
          document.removeEventListener("touchend", props.clicked);
        };
      }, [props.clicked]);


    return(
        <Video ref={ref}/>
    )
})

export default Preview;