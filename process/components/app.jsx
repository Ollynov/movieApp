var React = require('react');
var ReactDOM = require('react-dom');


class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		placeholder: []
  	};
  }

  render() {
    return (
      <p>
		    <a href="/submit">Submit movie.</a> ~ <a href="/">Get Movie Recommendation.</a>
		  </p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;