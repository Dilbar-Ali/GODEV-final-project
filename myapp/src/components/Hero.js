import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
    <div className="Hero-sec">
      <div className="main-hero">
        <div className="hero-content">
          <h1>Rate your favorite Movies</h1>
          <p>Rate your favorite Movies</p>
        </div>
        <div className="hero-inputs">
          <input placeholder="Enter your Name" />
          <input placeholder="Enter your Last" />
        </div>
        <div className="hero-btn">
          <input placeholder="Favourite Movies" />
          <button>ADD</button>
        </div>

        <div className="List">
          <h1>Favorite Movie</h1>
          <table >
            <thead>
              <tr>
                <th>Username</th>
                <th>Movie name</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Username</td>
                <td>text1.2</td>
                <td>text1.3</td>
                <td>text1.3</td>
              </tr>
              <tr>
                <td>text2.1</td>
                <td>text2.2</td>
                <td>text2.2</td>
                <td>text2.3</td>
              </tr>
              <tr>
                <td>text3.1</td>
                <td>text3.2</td>
                <td>text3.2</td>
                <td>text3.3</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
    
      </div>
 
      </div>

      <div className="fotter">
<h3>MovieFlex@2020</h3>
<h3>www.moviesFlex.com</h3>
      </div>
    </>
  );
};

export default Hero;
