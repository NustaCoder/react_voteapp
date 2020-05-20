import React, { Component } from "react";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
BreadcrumbItem,Breadcrumb} from "reactstrap";
 
  import { Link } from 'react-router-dom';
 

class DishDetails extends Component {
  constructor(props) {
    super(props);

    //this.state = {
     // dish: this.props.selectedDish
   // };
  }

  showImageAndName(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  //showComments(dish) {
  //  var i;
   // if (dish != null) {
   //   return <div>{}</div>;
    //} else {
    //  return <div></div>;
   // }
 // }
  render() {
    const comm = this.props.comments.map(dish => {
      return (
        <div>
          <h4>{dish.comment}</h4>
          <p>
            --{dish.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(dish.date)))}
          </p>
        </div>
      );
    });
    return (
      <div className="container">
        
        <div className="row">
        <Breadcrumb>

             <BreadcrumbItem>

          
         <Link to = '/menu'>Menu</Link>

                 </BreadcrumbItem>

          <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{this.props.dish.name}</h3>
          <hr/>
          
        </div>
      </div>
      <div className="row">
      <div className="col-12 col-md-5 m-1">
          {this.showImageAndName(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <h3>COMMENTS</h3>
          <Media list>{comm}</Media>
        </div>
        </div>
        </div>
    
    );
  }
}

export default DishDetails;