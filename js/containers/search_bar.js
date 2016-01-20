import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions';

class SearchBar extends Component {
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return (
      <form onSubmit={event => this.onFormSubmit(event)}>
        <input type="search"
          placeholder="City"
          value={this.state.term}
          onChange={event => this.onInputChange(event)}/>
        <input type="submit" />
      </form>
    );
  }

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
