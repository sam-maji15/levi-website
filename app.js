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
            return <CommentItemReply key={item_child.key} username={item_child.username} comment={item_child.comment} img={item_child.img}/>
          })
          return <CommentItem key={item.key} comment={item.comment} username={item.username} date={item.date} time={item.time} img={item.img}>
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
    <div>
    <div className="com-con">
    <img className="com-profile" src={prop.img} />
    <div>
    <h2 className="com-username">@{prop.username}</h2>
    <h2 className="com-comment">{prop.comment}</h2>
    </div>
  </div>
  {prop.children}
  </div>
    )
}

function CommentItemReply(prop) {
  return (
  <div class="com-con-rep">
    <CommentItem username={prop.username} comment={prop.comment} img={prop.img}/>
  </div>
    )
}


const root = document.getElementById('comments')
ReactDOM.render(<App/>, root)
