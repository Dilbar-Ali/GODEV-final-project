import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./hero.css";
const Hero = () => {
  const [inputList, setinputList] = useState("");
  const [inputList1, setinputList1] = useState("");
  const [inputList2, setinputList2] = useState("");
  const [items, setitems] = useState([]);
  const [items1, setitems1] = useState([]);
  const [items2, setitems2] = useState([]);

  const ListofItem = () => {
    setitems((olditems) => {
      return [...olditems, inputList];
    });
    setitems1((olditems) => {
      return [...olditems, inputList1];
    });
    setitems2((olditems) => {
      return [...olditems, inputList2];
    });
  };
  const itemEvent = (e) => {
    setinputList(e.target.value);
  };
  const itemEvent1 = (e) => {
    setinputList1(e.target.value);
  };
  const itemEvent2 = (e) => {
    setinputList2(e.target.value);
  };
  return (
    <>
      <div className="Hero-sec">
        <div className="main-hero">
          <div className="hero-content">
            <h1>Rate your favorite Movies</h1>
            <p>Rate your favorite Movies</p>
          </div>
          <div className="hero-inputs">
            <input
              placeholder="Enter your Name"
              type="text"
              onChange={itemEvent}
            />
            <input
              placeholder="Enter your Last"
              type="text"
              onChange={itemEvent1}
            />
          </div>
          <div className="hero-btn">
            <input
              placeholder="Favourite Movies"
              type="text"
              onChange={itemEvent2}
            />
            <button onClick={ListofItem}>ADD</button>
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
               
                  {items.map((itemval) => {
                    return <td>{itemval}</td>;
                  })}
                  {items1.map((itemval) => {
                    return <td>{itemval}</td>;
                  })}
                  {items2.map((itemval) => {
                    return <td>{itemval}</td>;
                  })}
               
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
