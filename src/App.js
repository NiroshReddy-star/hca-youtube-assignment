import React, { Component } from "react";
import axios from "axios";

import Search from "./components/search";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";
import "./App.css";

const API_KEY = "AIzaSyCvKtPaIx7KigltfivaMU-gQlLOB6sXlZQ";
const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVid: null, term: "HCA" };
    this.updateSelectedVid = this.updateSelectedVid.bind(this);

    this.loadData();
  }

  onChange = (term) => {
    this.setState({ term: term }, this.loadData);
  };

  loadData = () => {
    const url = `${SEARCH_URL}?part=snippet&key= ${API_KEY}&channelId=UCL03ygcTgIbe36o2Z7sReuQ&q=${this.state.term}&type=video&order=date`;
    axios.get(url).then((resp) => {
      const data = resp.data;
      this.setState({ videos: data.items, selectedVid: data.items[0] });
    });
  };

  updateSelectedVid(index) {
    let vid = this.state.videos;
    this.setState({ selectedVid: vid[index] });
  }

  render() {
    return (
      <div className="container">
        <Search onChange={this.onChange} />
        <div className="row">
          <VideoDetail vidDtl={this.state.selectedVid} />
          <VideoList
            videos={this.state.videos}
            updateSelectedVideo={this.updateSelectedVid}
          />
        </div>
      </div>
    );
  }
}

export default App;
