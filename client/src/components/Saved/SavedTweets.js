import React, { Component } from 'react';
import axios from 'axios';

class SavedTweets extends Component {
    constructor(props) {
        super(props) 
        this.state ={
            posts: []
        };
    }
        componentDidMount = () => {
            this.getTweets();
        };

        getTweets = () => {
            axios.get('/api/tweets')
            .then((response) => {
                const data = response.data;
                console.log("Data Received!");
                this.setState({ posts: data })
                console.log(this.state.posts);
                
            })
            .catch(() => {
                console.log("Error with Database!");
            })
        }

    

    render() {
        return (
            <div className="savedList">
                {this.state.posts.map((post) => (
                    <div className="savedTweet">
                        <img className="pic" src={post.pic} alt=""></img>
                        <h2 className="name">{post.name}</h2>
                        <h6 className="userName">@{post.username}</h6>
                        <p className="following">{post.following} Following</p>
                        <p className="followers">{post.followers} Followers</p>
                        <p className="userTweet">{post.userTweet} Tweets</p>
                        <p className="tweet">{post.tweet}</p>
                        <p className="date">{post.date}</p>
                        <p className="likes">{post.likes} Likes</p>
                        <p className="retweets">{post.retweets} Retweets</p>
                        <p className="replies">{post.replies} Replies</p>
                    </div>

                    
                    
                ))}
            </div>
        )
    }
}

    



export default SavedTweets;