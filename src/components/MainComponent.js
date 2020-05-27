import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./Menu";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import {Switch,  Route, Redirect, withRouter } from 'react-router-dom';
import { addComment, fetchDishes} from '../redux/ActionCreators';

import { connect} from 'react-redux';
import CommentForm from "./dishedetails";

const mapStateToProps = state => {
    return {

      dishes: state.dishes,
      comments: state.comments,
      promotions:state.promotions,
      leaders:state.leaders
    }
}
const mapDispatchToProps = (dispatch)=>({
addComment: (dishId,rating, author, comment)=> dispatch(addComment(dishId,rating, author, comment)),
fetchDishes: () => {dispatch(fetchDishes())}
})



class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  
componentDidMount() {
  this.props.fetchDishes();
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
        <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
        dishesLoading={this.props.dishes.dishesLoading}
        dishesErrMess={this.props.dishes.errmess}
        promotion ={this.props.promotions.filter((promo)=>promo.featured)[0]}
        leader ={this.props.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }

  const DishWithId =  ({match}) => {

    return(

      <CommentForm dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errmess={this.props.dishes.errmess}
            comments={this.props.comments.filter((comments) => comments.dishId === parseInt(match.params.dishId,10))}
addComment={this.props.addComment}
      />
    );

  }

  const AboutUs = () => {
    return (
      <About leaders={this.props.leaders} />
    );
  }


    return (
      <div>
        <Header />
        <Switch>

           <Route path="/home" component={HomePage}/>
           <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> }/>  
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
