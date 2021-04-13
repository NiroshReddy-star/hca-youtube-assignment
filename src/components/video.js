import React from "react";

const getDateAndTime = (date) => {
  const d = new Date(date);
  return d.toLocaleString();
};

const Video = (props) => {
  const imageUrl = props.vid.snippet.thumbnails.default.url;

  return (
    <li
      class="media recommend-video "
      onClick={() => props.updateSelectedVideo(props.index)}
    >
      <img class="mr-3" src={imageUrl} alt={props.vid.snippet.title} />
      <div class="media-body">
        <h5 class="mt-0 mb-1 video-title">{props.vid.snippet.title}</h5>
        <p className="video-description">{props.vid.snippet.description}</p>
        <p className="video-time text-bold">
          Published At: {getDateAndTime(props.vid.snippet.publishedAt)}
        </p>
      </div>
    </li>
  );
};

export default Video;
