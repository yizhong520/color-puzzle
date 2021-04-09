import React from 'react';

function HomePage() {
  return (
    <div>
      <section className="main-content">
        <div className="break">
          <img className="flower" src="img/flower-line.png" alt="decoration-flower"></img>
        </div>
        <h2 className="header-members text-dark">Explore the Color World Here</h2>
        <div>
          <p className="text-dark"> When creating their own art pieces, many designers and artists 
          would borrow ideas from the masterpieces' palettes. By analyzing the color choices' 
          expressive and conceptual intention, artists gain inspiration and may put them into 
          their own work.</p>
          <p className="text-dark"> This project aims to display and categorize a gallery of famous 
          paintings by their dominating colors. With our web app, artists could choose the 
          paintings to observe and learn more selectively; they may pick based on their interests 
          in the palettes they like.</p>
          <p className="text-dark"> Other than that, showing the dominating colors could help artists 
          to identify the key tone of the paintings more intuitively. At the same time, our web app 
          also encourages ordinary people to appreciate art better.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;