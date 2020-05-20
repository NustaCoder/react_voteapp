import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./Menu";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes.js";
import { COMMENTS } from "../shared/comments.js";
import { PROMOTIONS } from "../shared/promotions.js";
import { LEADERS } from "../shared/leaders.js";
import {Switch,  Route, Redirect} from 'react-router-dom';
import DishDetails from "./dishedetails";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
      
    };
  }

 

 // callComponent(dish) {
   // if (dish != null) {
    //  return (
    //    <DishDetails
      //    selectedDish={
         //   this.state.dishes.filter(
         //     dish => dish.id === this.state.selectedDish
           // )[0]
      //    }
      //  />
     // );
   // }
 // }
  render() {

    const HomePage=()=> {
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion ={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader ={this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }

  const DishWithId =  ({match}) => {

    return(

      <DishDetails dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
      
            comments={this.state.comments.filter((comments) => comments.dishId === parseInt(match.params.dishId,10))}

      />
    );

  }

  const AboutUs = () => {
    return (
      <About leaders={this.state.leaders} />
    );
  }


    return (
      <div>
        <Header />
        <Switch>

           <Route path="/home" component={HomePage}/>
           <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/> }/>  
            <Route exact path="/contactus" component={Contact}/>
            <Route path = "/menu/:dishId" component={DishWithId}/>
            <Route path = "/aboutus" component={AboutUs}/>
            <Redirect to="/home"/>
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default Main;
