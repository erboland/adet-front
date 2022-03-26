import React, { Component } from "react";

import { Card, Row } from "react-bootstrap";
import "./mainTable.css";
export default class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    this.setState({
      courses: [
        {
          name: "First",
          description: "Simple description",
          course_id: "1",
          subject_name: "math",
          course_rating: "4.5",
        },
        {
          name: "Second",
          description: "Simple description",
          course_id: "2",
          subject_name: "math",
          course_rating: "4",
        },
        {
          name: "Third",
          description: "Simple description",
          course_id: "3",
          subject_name: "math",
          course_rating: "5",
        },
      ],
    });
  }
  render() {
    return (
      <div className="container wrapper">
        <Row xs={2} md={4}>
          {this.state.courses.map((course) => {
            return (
              <Card style={{ marginRight: "1rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </div>
    );
  }
}
