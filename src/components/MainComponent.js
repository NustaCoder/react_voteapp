import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Team_IronMan: 0,
            Team_Captain: 0
        }
    }

    giveVote(team) {
        if (team == 1) {
            this.setState({
                Team_IronMan: this.state.Team_IronMan + 1
            });
        }
        else if (team == 2) {
            this.setState({
                Team_Captain: this.state.Team_Captain + 1
            });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <div class="row row-content  ">
                        <div class="col-12 col-sm-4 ironman align-middle">
                            <button class="align-items-center" onClick={this.giveVote.bind(this, 1)}>Team IronMan : {this.state.Team_IronMan}</button>
                        </div>
                        <div class="col-12 col-sm-4 captain text-center" onClick={this.giveVote.bind(this, 2)}>
                            <button>Team Captain : {this.state.Team_Captain}</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Main;