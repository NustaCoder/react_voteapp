import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./Menu";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import {Switch,  Route, Redirect, withRouter } from 'react-router-dom';
import { postComment, fetchDishes, fetchPromos,
 fetchComments, fetchLeaders} from '../redux/ActionCreators';
import { actions} from 'react-redux-form';
import { connect} from 'react-redux';
import CommentForm from "./dishedetails";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {

      dishes: state.dishes,
      comments: state.comments,
      promotions:state.promotions,
      leaders:state.leaders
    }
}
const mapDispatchToProps = (dispatch)=>({
postComment: (dishId,rating, author, comment)=> dispatch(postComment(dishId,rating, author, comment)),
fetchDishes: () => {dispatch(fetchDishes())},
resetFeedbackForm: ()=> {dispatch(actions.reset('feedback'))},
fetchComments: () => {dispatch(fetchComments())},
fetchPromos: () => {dispatch(fetchPromos())},
fetchLeaders: () => {dispatch(fetchLeaders())}
})



class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  
componentDidMount() {
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchPromos();
  this.props.fetchLeaders();
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
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errmess}

        promotion ={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errmess}

        leader ={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess={this.props.leaders.errmess}
        />
      );
    }

  const DishWithId =  ({match}) => {

    return(

      <CommentForm dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errmess={this.props.dishes.errmess}
            comments={this.props.comments.comments.filter((comments) => comments.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errmess}
            postComment={this.props.postComment}
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

        <TransitionGroup>
          <CSSTransition key = {this.props.location.key} 
          classNames = "page" timeout = {300}>
        <Switch>
           <Route path="/home" component={HomePage}/>
           <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> }/>  
            <Route exact path="/contactus" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
            <Route path = "/menu/:dishId" component={DishWithId}/>
            <Route path = "/aboutus" component={AboutUs}/>
            <Redirect to="/home"/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
