import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import Slider from "./Slider";
// import HomeBg from "./HomeBg";

class Home extends Component {
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
                  Hectflix Originals
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
                  Action {"&"} Adventure
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
                  Reality TV
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
                  Recommended
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
export default Home;
