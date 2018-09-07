import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import Slider from "./Slider";

class Originals extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {
            moviesTrending,
            moviesAction,
            moviesReality,
            moviesAnimation,
            moviesComedy
          } = value;

          return (
            <React.Fragment>
              {/* <HomeBg movieBg={moviesTrending.map(item => item.poster_path)} /> */}
              <div className="home ">
                <h5>Continue Watching</h5>
                <div className="slider continue">
                  {moviesComedy.map(item => (
                    <Slider
                      key={item.id}
                      movie={item.title}
                      image={item.poster_path}
                    />
                  ))}
                </div>
              </div>
              <div className="home">
                <Link to="/originals" className="heading">
                  Trending Now
                </Link>
                <div className="slider">
                  {moviesTrending.map(item => (
                    <Slider
                      key={item.id}
                      movie={item.title}
                      image={item.poster_path}
                    />
                  ))}
                </div>
              </div>
              <div className="home">
                <Link to="/originals" className="heading">
                  Thrillers
                </Link>
                <div className="slider">
                  {moviesAction.map(item => (
                    <Slider
                      key={item.id}
                      movie={item.title}
                      image={item.poster_path}
                    />
                  ))}
                </div>
              </div>
              <div className="home">
                <Link to="/originals" className="heading">
                  Action {"&"} Adventure
                </Link>
                <div className="slider">
                  {moviesReality.map(item => (
                    <Slider
                      key={item.id}
                      movie={item.title}
                      image={item.poster_path}
                    />
                  ))}
                </div>
              </div>
              <div className="home">
                <Link to="/originals" className="heading">
                  Romantic Movies
                </Link>
                <div className="slider">
                  {moviesAnimation.map(item => (
                    <Slider
                      key={item.id}
                      movie={item.title}
                      image={item.poster_path}
                    />
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Originals;
