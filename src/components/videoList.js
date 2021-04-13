import React from "react";
import Video from "./video";

const VideoList = (props) => {
  return (
    <div className="col-md-5">
      <ul className="list-group">
        {props.videos.map((v, i) => {
          return (
            <Video
              key={v.etag}
              index={i}
              vid={v}
              updateSelectedVideo={props.updateSelectedVideo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default VideoList;
