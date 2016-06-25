class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

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

    console.log('mount function exectued');
    this.props.searchYouTube(options, callback);
  }

  onClickPlayVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  // componentDidMount() {
  //   var options = {
  //     query: 'dog',
  //     max: 5,
  //     key: YOUTUBE_API_KEY
  //   };

  //   var callback = videos => {
  //     this.setState({
  //       allVideos: videos,
  //       currentVideo: videos[0]
  //     });
  //   };

  //   console.log('mount function exectued');
  //   this.props.searchYouTube(options, callback);
  // }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
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
