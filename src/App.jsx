import { useState } from 'react';
import './App.css';

function App() {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={isSubmitted ? 'app center' : 'app'}>
      {isSubmitted ? (
        <>
          <div className="ty-image">
            <img src="./images/illustration-thank-you.svg" />
          </div>
          <span>You selected {selectedRating} out of 5</span>
          <h1 className="title">Thank You!</h1>
          <p className="subtext">
            We appreciate you taking the time to give a rating.
            <br /> If you ever need support, don't hesitate to <br />
            get in touch!
          </p>
        </>
      ) : (
        <>
          <div className="star">
            <img src="./images/icon-star.svg" alt="star image" />
          </div>
          <h1 className="title">How did we do?</h1>
          <p className="subtext">Please let us know how we did with your support request. All feedback is appreciated to help up improve our offering!</p>
          <form onSubmit={submitHandler}>
            <div>
              {[1, 2, 3, 4, 5].map((val, ind) => (
                <button key={ind} type="button" className={selectedRating === val ? 'selected' : ''} onClick={() => setSelectedRating(val)}>
                  {val}
                </button>
              ))}
            </div>
            <button disabled={isNaN(selectedRating)} type="submit">
              SUBMIT
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
