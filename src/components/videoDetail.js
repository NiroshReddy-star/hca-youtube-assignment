import React from "react";

const VideoDetail = (props) => {
  if (!props.vidDtl) {
    return <p>Loading...</p>;
  }

  const videoId = props.vidDtl.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-7">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          title={videoId}
          className="embed-responsive-item"
        ></iframe>
      </div>
      <div className="details">
        <h3>{props.vidDtl.snippet.title}</h3>
        <p>{props.vidDtl.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
