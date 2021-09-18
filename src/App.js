import { useState } from "react";
import "./styles.css";

//creating database of web series
const seriesObject = {
  Action: [
    {
      title: "The Walking Dead",
      releaseDate: "31 October 2010",
      IMDb: "8.2/10"
    },
    { title: "Game of Thrones", releaseDate: "17 April 2011", IMDb: "9.2/10" },
    { title: "Vikings", releaseDate: "3 March 2013", IMDb: "8.5/10" }
  ],
  Comedy: [
    { title: "Sex Education", releaseDate: "11 January 2019", IMDb: "8.3/10" },
    { title: "Friends", releaseDate: "22 September 1994", IMDb: "8.8/10" },
    { title: "The Office", releaseDate: "24 March 2005", IMDb: "8.9/10" }
  ],
  SciFi: [
    { title: "Stranger Things", releaseDate: "15 July 2016", IMDb: "8.7/10" },
    {
      title: "Umbrella Academy",
      releaseDate: "15 February 2019",
      IMDb: "8.0/10"
    },
    { title: "Breaking Bad", releaseDate: "20 January 2008", IMDb: "9.4/10" }
  ],
  Crime: [
    { title: "Money Heist", releaseDate: "2 May 2017", IMDb: "8.3/10" },
    {
      title: "Peaky Blinders",
      releaseDate: "12 September 2013",
      IMDb: "8.8/10"
    },
    { title: "Lucifer", releaseDate: "25 January 2016", IMDb: "8.1/10" }
  ],
  Anime: [
    { title: "Death Note", releaseDate: "3 October 2006", IMDb: "9.0/10" },
    { title: "Dragon Ball Z", releaseDate: "26 April 1989", IMDb: "8.7/10" },
    { title: "Attack on Titan", releaseDate: "7 April 2013", IMDb: "9.0/10" }
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
                padding: "0.5rem 1rem",
                margin: "1rem"
              }}
            >
              <h2
                style={{
                  lineHeight: "1rem"
                }}
              >
                {series.title}
              </h2>
              <h5
                style={{
                  lineHeight: ".5rem"
                }}
              >{`IMDb : ${series.IMDb}`}</h5>
              <h5
                style={{
                  lineHeight: ".5rem"
                }}
              >{`Realese Date : ${series.releaseDate}`}</h5>
            </div>
          ))
        }
      </div>
    </div>
  );
}
