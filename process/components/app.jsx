var React = require('react');
var ReactDOM = require('react-dom');


class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		data: []
  	};
  }

  render() {
    return (
      <div id='container'>
        <div>
          <Title title={this.state.data.title} />
        </div>
        <div>
          <Image image={this.state.data.image} />
        </div>
        <div>
          <Rating rating={this.state.data.rating} />
        </div>
        <p>
  		    <a href="/submit">Submit movie.</a> ~ <a href="/">Get Movie Recommendation.</a>
  		  </p>
      </div>
    );
  }
}
// the two links at bootom need to be its own component obviously


var Title = ({title}) => (
  <div id="title">
    <h2>{this.props.title}</h2>
  </div>
);
// Did we pass in the title between the h2 tags correctly?

// var Image = ({image}) => (
//   <div id="title">
//     <a href={this.props.image}/>
//   </div>
// );

// var Rating = ({rating}) => (
//   <div id="title">
//     <div>{this.props.rating}</div>
//   </div>
// );

ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;