import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StoryItem from './StoryItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stories: []
    };
  }



  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
  res.json().then((storyIds) => {
    storyIds.slice(0, 50).forEach((storyId) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
        res.json().then((story) => {
                    const storyArr = this.state.stories
                    storyArr.push(story)

                    this.setState({
                      isLoaded: true,
                      stories: storyArr
                    });
                  },
                  // Note: it's important to handle errors here
                  // instead of a catch() block so that we don't swallow
                  // exceptions from actual bugs in components.
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  }
        )
      });
    });
  });
});

}

renderStoryItems(){
  return this.state.stories.map((story, k)=>{
    return <StoryItem title={story.title} id={story.id} author={story.by}/>
  })
}



  render() {

    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">HN Stories</h1>
        </header>

        <div>{this.renderStoryItems()}</div>

      </div>
    );
  }
}

export default App;
