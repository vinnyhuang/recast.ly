var Autoplay = (props) => (
  <input type="checkbox" onClick={props.onClickToggleButton}>
    <label>&nbsp;Autoplay</label>
  </input>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
