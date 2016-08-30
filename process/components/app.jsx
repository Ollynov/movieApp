var React = require('react');
var ReactDOM = require('react-dom');


class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		data: [
        {
         title: 'Batman',
         rating: 10,
         image: 'http://screencrave.com/wp-content/uploads/2012/07/Batman-The-Dark-Knight-Rises.jpg'
        }
      ]
  	};
  };


  render() {
    return (
      <div id='container'>
        <div>
          <Title title={this.state.data[0].title} />
        </div>
        <div>

        </div>
        <div>

        </div>
        <p>
  		    <a href="/submit">Submit movie</a> ~ <a href="/">Get Movie Recommendation.</a>
  		  </p>
      </div>
    );
  };
}
// the two links at bootom need to be its own component obviously
//
// <Image image={this.state.data[0].image} />

// <Rating rating={this.state.data[0].rating} />

var Title = ({title}) => (
  <div id="title">
    <h2>{title}</h2>
  </div>
)

// Did we pass in the title between the h2 tags correctly?

// var Image = ({image}) => (
//   <div id="image">
//    <img src={image} alt="batman" />
//   </div>
// )

// var Rating = ({rating}) => (
//   <div id="rating">
//     <p>{rating}</p>
//   </div>
// )

ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;