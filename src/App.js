import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "A passionate software developer who loves to create amazing applications.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, timeSinceMounted } = this.state;

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>My First Class-Based Component</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={Person.imgSrc}
              alt={Person.fullName}
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <h3>{Person.profession}</h3>
          </div>
        )}
        <div style={{ marginTop: "20px" }}>
          <h3>Time since mounted: {timeSinceMounted} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;

