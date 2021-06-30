import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      com: []
    }
  }
  
  componentDidMount() {
    fetch('./data/comments_data.json')
    .then(response => {
      return response.json()
    }).then(data => {
      // console.table(data.comments)
      this.setState({com: data.comments}) 
    })
  }
  
  render() {
    let chatItems = <h2>NoItems</h2>
    if (this.state.com.length>0) {
      chatItems = this.state.com.map(item => {
        
        if (typeof item.replies !== 'undefined' ) {
          const replies = item.replies.map(item_child => {
            return <h2 key={item_child.key}>{item_child.comment}</h2>
          })
          return <CommentItem key={item.key} comment={item.comment} username={item.username} date={item.date} time={item.time}>
            {replies}
          </CommentItem>
        }
        return <CommentItem key={item.key} comment={item.comment}></CommentItem>
      })
    }
    
    return (
    <div>
    {chatItems}
    </div>)
  }
}


function CommentItem(prop) {
  return (
    <div className="com-item">
    <div>
    <h3 className="com-username">{prop.username}</h3>
    <h3 className="com-date-time">{prop.time} {prop.date}</h3>
    </div>
    <h2 className="com-comment">{prop.comment}</h2>
    {prop.children}
    </div>
    )
}


const root = document.getElementById('react-app')
ReactDOM.render(<App/>, root)
