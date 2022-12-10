import React from "react";
import Table from "react-bootstrap/Table";
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
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Movies List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td >Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <div className="fotter">
        <h5>MovieFlex@2020</h5>
        <h5>www.moviesFlex.com</h5>
      </div>
    </>
  );
};

export default Hero;
