import { useState } from "react";
import "./styles.css";

//creating database of web series
const seriesObject = {
  Action: [
    { title: "The Walking Dead", releaseDate: "31 October 2010" },
    { title: "Game of Thrones", releaseDate: "17 April 2011" },
    { title: "Vikings", releaseDate: "3 March 2013" }
  ],
  Comedy: [
    { title: "Sex Education", releaseDate: "11 January 2019" },
    { title: "Friends", releaseDate: "17 April 2011" },
    { title: "Vikings", releaseDate: "22 September 1994" }
  ],
  SciFi: [
    { title: "Stranger Things", releaseDate: "15 July 2016" },
    { title: "Umbrella Academy", releaseDate: "15 February 2019" },
    { title: "Breaking Bad", releaseDate: "20 January 2008" }
  ],
  Crime: [
    { title: "Money Heist", releaseDate: "2 May 2017" },
    { title: "Peaky Blinders", releaseDate: "12 September 2013" },
    { title: "Lucifer", releaseDate: "25 January 2016" }
  ]
};

export default function App() {
  //initializing state
  const [selectedGenre, setGenre] = useState("Action");

  //function to update the state when click event occurs
  function clickHandler(genre) {
    //updating state
    setGenre(genre);
  }

  return (
    <div className="app">
      <h1>Popular Web Series</h1>
      <p>Select a genre to view the most popular Web Series.</p>
      <div className="button-div">
        {
          /*creating array from object and mapping each 
        element in the array to create buttons*/
          Object.keys(seriesObject).map((genre) => (
            <button
              onClick={() => clickHandler(genre)}
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                margin: "1rem",
                border: "3px solid #000",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "#000",
                color: "#fff"
              }}
            >
              {genre}
            </button>
          ))
        }
      </div>

      <div className="list-div">
        {
          //displaying the list of series
          seriesObject[selectedGenre].map((series) => (
            <div
              style={{
                border: "3px solid black",
                borderRadius: "5px",
                width: "230px",
                padding: "0 1rem",
                margin: "1rem"
              }}
            >
              <h3>{series.title}</h3>
              <p>{`Realese Date : ${series.releaseDate}`}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
