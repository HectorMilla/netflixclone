import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    moviesTrending: [],
    moviesAction: [],
    moviesReality: [],
    moviesAnimation: [],
    moviesComedy: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=308f9ae9f93379edf27aad577ddc7585`
      )
      .then(res => {
        this.setState({
          moviesTrending: res.data.results.filter(item => item.vote_average > 5)
        });
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=308f9ae9f93379edf27aad577ddc7585&language=en-US&page=2`
      )
      .then(res => {
        this.setState({
          moviesAction: res.data.results.filter(item =>
            item.genre_ids.includes(12)
          )
        });
      });
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/28/similar?api_key=308f9ae9f93379edf27aad577ddc7585&language=en-US&page=1`
      )
      .then(res => {
        this.setState({
          moviesReality: res.data.results.filter(item =>
            item.genre_ids.includes(28)
          )
        });
      });
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/top_rated?api_key=308f9ae9f93379edf27aad577ddc7585&language=en-US&page=3&region=US`
      )
      .then(res => {
        this.setState({
          moviesAnimation: res.data.results.filter(
            item => item.vote_average > 5
          )
        });
      });
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/now_playing?api_key=308f9ae9f93379edf27aad577ddc7585&language=en-US&page=1&region=US`
      )
      .then(res => {
        this.setState({
          moviesComedy: res.data.results.filter(item => item.vote_average > 7)
        });
      })

      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
