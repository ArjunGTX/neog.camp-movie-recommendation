import { useState } from "react";
import "./styles.css";

//creating database of web series
const seriesObject = {
  Action: [
    {
      title: "The Walking Dead",
      releaseDate: "31 October 2010",
      IMDb: "8.2/10",
      description:
        "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive."
    },
    {
      title: "Game of Thrones",
      releaseDate: "17 April 2011",
      IMDb: "9.2/10",
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },
    {
      title: "Vikings",
      releaseDate: "3 March 2013",
      IMDb: "8.5/10",
      description:
        "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean."
    }
  ],
  Comedy: [
    {
      title: "Sex Education",
      releaseDate: "11 January 2019",
      IMDb: "8.3/10",
      description:
        "A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school."
    },
    {
      title: "Friends",
      releaseDate: "22 September 1994",
      IMDb: "8.8/10",
      description:
        "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan."
    },
    {
      title: "The Office",
      releaseDate: "24 March 2005",
      IMDb: "8.9/10",
      description:
        "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium"
    }
  ],
  SciFi: [
    {
      title: "Stranger Things",
      releaseDate: "15 July 2016",
      IMDb: "8.7/10",
      description:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
    },
    {
      title: "Umbrella Academy",
      releaseDate: "15 February 2019",
      IMDb: "8.0/10",
      description:
        "A family of former child heroes, now grown apart, must reunite to continue to protect the world."
    },
    {
      title: "Breaking Bad",
      releaseDate: "20 January 2008",
      IMDb: "9.4/10",
      description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."
    }
  ],
  Crime: [
    {
      title: "Money Heist",
      releaseDate: "2 May 2017",
      IMDb: "8.3/10",
      description:
        "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain."
    },
    {
      title: "Peaky Blinders",
      releaseDate: "12 September 2013",
      IMDb: "8.8/10",
      description:
        "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby."
    },
    {
      title: "Lucifer",
      releaseDate: "25 January 2016",
      IMDb: "8.1/10",
      description:
        "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels."
    }
  ],
  Anime: [
    {
      title: "Death Note",
      releaseDate: "3 October 2006",
      IMDb: "9.0/10",
      description:
        "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."
    },
    {
      title: "Dragon Ball Z",
      releaseDate: "26 April 1989",
      IMDb: "8.7/10",
      description:
        "After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies."
    },
    {
      title: "Attack on Titan",
      releaseDate: "7 April 2013",
      IMDb: "9.0/10",
      description:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction"
    }
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
                width: "150px",
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
                maxWidth: "300px",
                padding: "0.5rem 1rem",
                margin: "1rem"
              }}
            >
              <h2>{series.title}</h2>
              <h5>
                <em>{series.description}</em>
              </h5>
              <h5>{`IMDb : ${series.IMDb}`}</h5>
              <h5>{`Realese Date : ${series.releaseDate}`}</h5>
            </div>
          ))
        }
      </div>
    </div>
  );
}
