/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  class Numbers extends React.Component {
    constructor(props) {
      super(props);
    }

    checkZero(value) {
      return value < 10 ? `0${value}` : value;
    }

    render() {
      return (
        <span className={this.props.name}>
          {this.checkZero(this.props.type)}
        </span>
      );
    }
  }

  class Display extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="display">
          <div className="numbers">
            <Numbers name="minute" type={this.props.minute} />'
            <Numbers name="second" type={this.props.second} />"
            <Numbers name="milli" type={this.props.milli} />
          </div>
        </div>
      );
    }
  }
  class Button extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className={this.props.className + "-body"}>
          <button
            className={this.props.className}
            onClick={!this.props.running ? this.props.start : ""}
          ></button>
        </div>
      );
    }
  }
  class ButtonsPanel extends React.Component {
    constructor(props) {
      super(props);
    }
    clickTest() {
      alert("ola");
    }

    render() {
      return (
        <div className="btn-body">
          <Button
            name="Start"
            running={this.props.running}
            className="start"
            start={this.props.start}
          />
          <Button name="Stop" className="stop" start={this.props.stop} />
          <Button name="Reset" className="reset" start={this.props.reset} />
        </div>
      );
    }
  }
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        running: false,
        milli: 0,
        second: 0,
        minute: 0
      };
      this.increment = this.increment.bind(this);
      this.start = this.start.bind(this);
      this.update = this.update.bind(this);
      (this.stop = this.stop.bind(this)), (this.reset = this.reset.bind(this));
    }

    start() {
      this.setState({
        running: true
      });
      console.log("start");
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.increment();
      }, 10);
      $(".start-body").css({
        "z-index": "-1"
      });
      $(".start-body").animate(
        {
          top: "0px",
          left: "2px"
        },
        100,
        function() {
          $(".start-body").animate(
            {
              top: "-10px",
              left: "-8px"
            },
            100,
            function() {
              $(".start-body").css({
                "z-index": "1"
              });
            }
          );
        }
      );
    }

    stop() {
      this.setState({
        running: false
      });
      clearInterval(this.interval);
      $(".stop-body").css({
        "z-index": "-1"
      });
      $(".stop-body").animate(
        {
          top: "0px",
          right: "42px"
        },
        100,
        function() {
          $(".stop-body").animate(
            {
              top: "-10px",
              right: "32px"
            },
            100,
            function() {
              $(".stop-body").css({
                "z-index": "1"
              });
            }
          );
        }
      );
    }

    reset() {
      this.setState({
        running: false
      });
      clearInterval(this.interval);
      this.setState({
        milli: 0,
        second: 0,
        minute: 0
      });
      $(".reset-body").css({
        "z-index": "-1"
      });
      $(".reset-body").animate(
        {
          top: "-42px"
        },
        100,
        function() {
          $(".reset-body").animate(
            {
              top: "-50px"
            },
            100,
            function() {
              $(".reset-body").css({
                "z-index": "1"
              });
            }
          );
        }
      );
    }

    increment() {
      let milli = this.state.milli + 1;
      let second = this.state.second;
      let minute = this.state.minute;

      milli === 100 ? ((milli = 0), (second = second + 1)) : (milli = milli);
      second === 60 ? ((second = 0), (minute = minute + 1)) : (second = second);
      this.update(milli, second, minute);
    }

    update(milli, second, minute) {
      this.setState({
        milli: milli,
        second: second,
        minute: minute
      });
    }

    render() {
      return (
        <div className="chrono-body">
          <ButtonsPanel
            running={this.state.running}
            start={this.start}
            stop={this.stop}
            reset={this.reset}
          />
          <Display
            milli={this.state.milli}
            second={this.state.second}
            minute={this.state.minute}
          />
          <div className="units">
            <span className="min">MIN.</span>
            <span className="sec">SEC.</span>
            <span className="mil">1/100s</span>
          </div>
        </div>
      );
    }
  }

  React.render(<App />, document.getElementById("app"));
};
