import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people:[
        {
          id: 1,
          name: "David Davidson", 
          company: "New Company inc", 
          Description: "Located in Sweden"
        },
        {
          id: 2,
          name: "Judy Judyson", 
          company: "Judys Company", 
          Description: "Located in Sweden"
        },
        {
          id: 3,
          name: "Mark Markson", 
          company: "Marks company", 
          Description: "Located in Sweden"
        }
      ]
    }
  }

  removePerson (id) {
    this.setState ({ people : this.state.people.filter(person => person.id !== id )});
  }

  render() {
    let peopleCard = this.state.people.map(person => {
      return (
        <Col sm="3">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person}/>
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCard}
        </Row>
      </Container>
    )
  }
}

export default MainArea;