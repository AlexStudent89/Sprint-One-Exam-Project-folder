import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to Alex's Restaurant</h1>
      </header>
      {/* Add your navigation component here */}
      <nav>
        {/* Your navigation links go here */}
      </nav>
      <main>
        {/* Your React components and content go here */}
        <h2>Delicious dishes await you at Alex's Food Restaurant!</h2>
        <p></p>
        <img
          src="pngtree-fried-lamb-png-image_6147685.png"
          alt="Image Description"
          className="right-image"
        />
        <img src="Spices section2.png" alt="Image Description" className="right-image" />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));