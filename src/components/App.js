import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  componentDidMount(){
    this.onVideoSearch('React.js Crash Course')
  }
  onVideoSearch = async searchText => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyB-Y0np6umKZ2lH8DXaA-N1j-tLBZCxVfM&q=${searchText}`)
    this.setState({
      videos: response.data.items,
      selectedVideo:response.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onVideoSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;