require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import logo from '../images/train.jpg';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	from: 'Slupsk',
    	to: 'Gdansk'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
    	[event.target.name]: event.target.value
    });
  }


  handleSubmit = () => {
    alert('Route from: ' + this.state.from + ' to: ' + this.state.to);
    const item = {};
    item.from = this.state.from;
    item.to = this.state.to;
    //event.preventDefault();
  }

  render() {
    return (
      <div className="index">
      	<img src={logo} alt="Logo" />
	      <div className="notice">Railway search engine</div>
	      <form onSubmit={this.handleSubmit}>
	      	<div className="form">
				<div>From:<br/></div>
		      		<select name="from" value={this.state.from} onChange={this.handleChange}>
				    	<option value="Slupsk">Slupsk</option>
				    	<option value="Wroclaw">Wroclaw</option>
				    	<option value="Gdansk">Gdansk</option>
						<option value="Gdynia">Gdynia</option>
					</select> 
		      	<br/>
			  	<div>To:<br/></div>
				  <select name="to" value={this.state.to} onChange={this.handleChange}>
		            <option value="Slupsk">Slupsk</option>
		            <option value="Chojnice">Chojnice</option>
		            <option value="Gdansk">Gdansk</option>
		            <option value="Gdynia">Gdynia</option>
		          </select>
		      <br/>
			  <div>Time:<br/></div>
			  <input type="text" name="time" />
		  	  <input className="button" type="submit" value="Submit" />
			</div>
		  </form>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
