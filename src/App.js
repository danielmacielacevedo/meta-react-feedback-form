import './App.css';
import { useState } from 'react';


function App() {
  
  const [score, setScore] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 3 && comment.length <= 10) {
      alert("Please, provide a comment with more info about your poor experience!")
    } else {
      console.log("Form submited!")
      setScore("✅")
      setComment("")
    }
  }

  function starsScore() {
    if (Number(score) == 1) {
      return "⭐"
    } else if (score == 2) {
      return "⭐ ⭐"
    } else if (score == 3) {
      return "⭐ ⭐ ⭐"
    } else if (score == 4) {
      return "⭐ ⭐ ⭐ ⭐"
    } else if (score == 5) {
      return "⭐ ⭐ ⭐ ⭐ ⭐"
    } else if (score == "✅") {
      return "✅"
    } else {
      return "👇"
    }
  }

  return (
    <div className="App">
      <div className='AppContent'>
        <form onSubmit={handleSubmit}>
          <fieldset className='Fieldset'>
            <div className='Field'>
              <label>Rate our service</label>
              <h1>{starsScore()}</h1>
              <div className='RangeField'>
                <p>Worst</p>
                <input type="range" min="1" max="5" value={score} onChange={e => setScore(e.target.value)} />
                <p>Excelent</p>
              </div>
            </div>
            <div className='Field'>
              <label>Comment</label>
              <textarea id="CommentArea" type="text" value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <button className="SubmitButton" type="submit" disabled={!score} >Submit</button>
          </fieldset>
        </form>
      </div>

      <div className="PoweredByDanielMacielAcevedo">
        <p>Powered by Daniel Maciel Acevedo</p>
        <a href="https://github.com/danielmacielacevedo/meta-react-feedback-form" ><span></span>ver codigo</a>
      </div>
    </div>
  );
}

export default App;
