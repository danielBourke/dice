import React, { Component } from "react";
import Die from "./Die";
import { Divider, Grid, Segment,Header, Icon, Button } from "semantic-ui-react";


class RollDice extends Component {
  state = {
    die1: "one",
    die2: "one ",
    sides: ["one", "two", "three", "four", "five", "six"],
    rolling: false,
    animation: true
  };

  handleOnButtonPress() {
    const random1 = Math.floor(Math.random() * 6);
    const random2 = Math.floor(Math.random() * 6);
    this.setState({
      die1: this.state.sides[random1],
      die2: this.state.sides[random2],
      animation: !this.state.animation,
      rolling: !this.state.rolling,
      display: true
    });
    setTimeout(() => {
      this.setState({ animation: !this.state.animation });
    }, 600);

    setTimeout(() => {
      this.setState({ rolling: !this.state.rolling });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
            
              <Die rolling={this.state.animation} face={this.state.die1} />
            </Grid.Column>
            <Grid.Column>
              <Die rolling={this.state.animation} face={this.state.die2} />
            </Grid.Column>
          </Grid>

          <Divider vertical>Roll the dice</Divider>
        </Segment>

        <div className="dice">
          <Segment basic textAlign="center">
            <Button
              className="btn ui button"
              disabled={!this.state.animation}
              color="green"
              onClick={() => {
                this.handleOnButtonPress()
              }}
            >
              {this.state.animation ? "roll the dice" : "rolling"}
            </Button>
          </Segment>
        </div>
        {this.state.display ? (
          <div>
            {this.state.die1 === this.state.die2 ? (
              <Header as="h2" icon textAlign="center">
                <Icon name="money bill alternate" circular />
              </Header>
            ) : (
              <Header as="h2" icon textAlign="center">
                <Icon name="close" circular />
              </Header>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default RollDice;
