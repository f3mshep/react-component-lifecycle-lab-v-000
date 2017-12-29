import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate(nextProps){
    debugger
    return nextProps.newTweets.length > 0
  }

  componentWillReceiveProps(nextProps){
    let allTweets = this.state.tweets
    debugger
    allTweets.unshift(nextProps.newTweets)
    this.setState({
      tweets: allTweets
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
