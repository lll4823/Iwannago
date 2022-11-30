import React from 'react';

class Detail extends React.Component{
  componentDidMount()
  {
    const { location, history } = this.props;
  }

  render()
  {
    return <span><img src="https://i.imgur.com/CC4nHv6.jpg"></img></span>;
  }
}

export default Detail;