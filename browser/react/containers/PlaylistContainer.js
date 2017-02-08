import React from 'react';
import NewPlaylist from '../components/NewPlaylist.js'

export default class PlaylistContainer extends React.Component {

  constructor () {
    super();
    this.state = { inputValue: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (evt) {
    console.log('change handled playlist container')
    console.log(this.state.inputValue)
  }

  handleChange (evt) {
    const value = evt.target.value;
    console.log(value);
    this.setState({
      inputValue: value
    });
  }

  render () {
    return (
      <div>
        <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }

}
