import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import userpassions from "../../testpassions.json";
import Modal from "../Modal";

class Home extends Component {
  state = {
    userpassions,
    selected: "",
    action: "",
    show: false
  };

  componentDidMount() {
    console.log('this is the Home component as JSON:');
    console.log(this);
    console.log(`these are the user's selected passions:`);
    console.log(this.state.userpassions);
  }


  handleItemClick = id => {
    console.log(id);
    let title = this.state.userpassions[id].title;
    console.log(`The state was ${this.state.selected}`);
    this.setState({selected: title});
    console.log(`The state has been changed to ${this.state.selected}`);
    this.setState({ show: true });
  };

  /*showModal = () => {
    this.setState({ show: true });
  }*/
  
  hideModal = () => {
    this.setState({ show: false });
  }

  protest = () => {
    console.log(`I'm going to protest for ${this.state.selected}`);
    this.setState({action: "protest"});
    //console.log(this.setState.selected);
    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  petition = () => {
    console.log(`I'm going to petition for ${this.state.selected}`);
    this.setState({action: "petition"});
    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  donate = () => {
    console.log(`I'm going to donate to ${this.state.selected}`);
    this.setState({action: "donate"});
    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  contact = () => {
    console.log(`I'm going to contact by representative about ${this.state.selected}`);
    this.setState({action: "contact"});
    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Nav testlist={this.state.selected} action={this.state.action}/>
        <Header header="What to act on?"/>
        <Container>
          {this.state.userpassions.map(item => (
            <ClickItem
              key={item.id}
              id={item.id - 1}
              handleClick={this.handleItemClick}
              title={item.title}
              keywords={item.keywords}
            /> 
          ))} 
        </Container>
        <Modal show={this.state.show} handleClose={this.hideModal} >
            <h2>{this.state.selected}</h2>
            <button onClick={this.protest} className={`protest ${this.state.selected}`}>protest</button>
            <button onClick={this.petition} className={`petition ${this.state.selected}`}>petition</button>
            <button onClick={this.donate} className={`donate ${this.state.selected}`}>donate</button>
            <button onClick={this.contact} className={`contact ${this.state.selected}`}>contact</button>
        </Modal>

      </div>
    )
  }
}

const container = document.createElement('div');
document.body.appendChild(container);


export default Home;