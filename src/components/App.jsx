class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allVideos: window.blankVideoData,
      currentVideo: window.blankVideoData[0],
      autoplay: false
    };
  }

  componentDidMount() {
    var options = {
      query: 'dog',
      max: 5,
      key: YOUTUBE_API_KEY
    };

    var callback = videos => {
      this.setState({
        allVideos: videos,
        currentVideo: videos[0]
      });
    };

    this.props.searchYouTube(options, callback);
  }

  onClickPlayVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  onChangeUpdateVideos(value) {
    var options = {
      query: value,
      max: 5,
      key: YOUTUBE_API_KEY
    };

    var callback = videos => {
      this.setState({
        allVideos: videos,
        currentVideo: videos[0]
      });
    };

    this.props.searchYouTube(options, callback);
  }

  onClickToggleButton() {
    this.setState({
      autoplay: !this.state.autoplay
    });
  }

  render() {
    return (
      <div>
        <Nav onChangeCallback={this.onChangeUpdateVideos.bind(this)} onClickToggleButton={this.onClickToggleButton.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} autoplay={this.state.autoplay}/>
        </div>
        <div className="col-md-5">
          <VideoList clickCallback={this.onClickPlayVideo.bind(this)} videos={this.state.allVideos}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
