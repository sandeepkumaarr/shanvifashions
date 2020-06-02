import React from 'react';

class ShowWindowDimensions extends React.Component {
  state = { width: window.innerWidth, height: window.innerHeight };
  render() {
    return <span>Window size: {this.state.width} x {this.state.height}</span>;
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
}


export default ShowWindowDimensions;