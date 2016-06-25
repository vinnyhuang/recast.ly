var Search = (props) => {
  var debounceUpdate = _.debounce(props.onChangeCallback, 500);

  return (
    <div className="search-bar form-inline" >
      <input className="form-control" type="text" onChange={function(event) { 
        var value = event.target.value;
        debounceUpdate(value); 
      }}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  ); 
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;