import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Book.css';

function Goldenbook() {
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [commentary, setCommentary] = useState(false);

  const showCommentary = () => {
    setCommentary(!commentary);
  };

  function handleClick(e) {
    e.preventDefault();
    const message = {
      user: userName,
      message: userMessage,
    };
    axios
      .post('http://localhost:5006/guest', { ...message })
      .then(function (response) {
        console.log(response);
        setUserName('');
        setUserMessage('');
        setMessages([...messages, message]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    axios.get('http://localhost:5006/guest').then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <main className="App-book">
      <button className="commentary-title" type="button" onClick={showCommentary}>
        COMMENTARY
      </button>

      {commentary && (
        <div className="commentary">
          <div className="appguest">
            <ul className="List">
              {messages.map((message, index) => (
                <li key={index} className="message">
                  <span className="namemessage">{message.user}</span> <span className="commentaire"> {message.message} </span>
                </li>
              ))}
            </ul>
          </div>
          <form className="borderbutton" onSubmit={(e) => handleClick(e)}>
            <div className="messagename">Name</div>
            <input
              className="bordermessage"
              placeholder="Your name"
              required
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <div className="messagecomment">Comment</div>
            <textarea
              className="bordermessage1"
              placeholder="Comment..."
              required
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="btn-sends">
              <button className="btn-send" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

export default Goldenbook;
