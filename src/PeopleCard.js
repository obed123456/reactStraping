import React, { Component  } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
  constructor (props){
    super(props);
  }
  render() {
    let {id, name, company, description} = this.props.person; 
    let {removePerson} = this.props; 

    return(
      <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.person.name}</CardTitle>
          <CardSubtitle>{this.props.person.company}</CardSubtitle>
          <CardText>{this.props.person.description}</CardText>
          <Button color="danger" onClick = {() => this.props.removePerson(id)}>Delete</Button>
        </CardBody>
      </Card>
    </div>
    )
  }
}
export default PeopleCard;