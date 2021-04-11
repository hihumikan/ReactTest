import "./App.css";
import React from "react";
/*
class クラス名 extends 親クラス名 {
// クラスの定義
} */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.title = "カウントアプリ";
  }
  countUp() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h2>{this.title}</h2>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.countUp();
          }}
        >
          COUNT UP
        </button>
      </div>
    );
  }
}

export default App;
