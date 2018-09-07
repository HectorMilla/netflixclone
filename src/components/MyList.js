import React, { Component } from "react";

import { Consumer } from "../context";
import Slider from "./Slider";
// import HomeBg from "./HomeBg";

class MyList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {
            moviesTrending,

            moviesComedy
          } = value;

          return (
            <React.Fragment>
              {/* <HomeBg movieBg={moviesTrending.map(item => item.poster_path)} /> */}
              <div className="home ">
                <h5>My List</h5>
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
                <h5 className="heading">Add To List</h5>
                <div className="slider ">
                  {moviesTrending.map(item => (
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
export default MyList;
