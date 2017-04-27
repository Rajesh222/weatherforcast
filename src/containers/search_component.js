import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';
import PropTypes from 'prop-types';

export class SearchComponent extends Component {

  static propTypes = {
    getWeather: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  handleSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className="input-group">
        <input
          placeholder="Enter city name to find weather forecast"
          className="form-control"
          value={this.state.searchTerm}
          onChange={(e)=> this.handleSearch(e)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchComponent);
