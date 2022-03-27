import React, { Component } from "react";

import { Card, Row, Button } from "react-bootstrap";
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
          name: "Язык Solidity и смарт-контракты Ethereum",
          description:
            "Поговорим о языке Solidity, использующемся для написания смарт-контрактов Ethereum. Также поговорим о Remix IDE, напишем первый контракт, развернём его в тестовом блокчейне и попробуем перевести на него денежные средства через Metamask.",
          url: "https://youtu.be/DgsnHmNukv8",
          imgUrl:
            "https://i.ytimg.com/vi/DgsnHmNukv8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAdEveSKWZDyVWwssyBe0BVJgLVPw",
          course_id: "1",
          subject_name: "math",
          course_rating: "4.5",
        },
        {
          name: "Linear Algebra Done Right",
          description:
            "Introduction to the series of videos on my book Linear Algebra Done Right.",
          url: "https://youtu.be/lkx2BJcnyxk",
          imgUrl:
            "https://i.ytimg.com/vi/lkx2BJcnyxk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCLmbVDN7UGr27aqN_C4fHXw4N2ew",
          course_id: "2",
          subject_name: "math",
          course_rating: "4",
        },
        {
          name: "Urban Economics",
          description:
            "Urban economics is a course to learn the economicss of the cities, conglomerates, and corporations",
          url: "https://youtu.be/jakevMrCbJY",
          imgUrl:
            "https://i.ytimg.com/vi/jakevMrCbJY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBKddltbNYwHcYBrzFq7WDxwjObOA",
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
                <Card.Img
                  variant="top"
                  src={course.imgUrl}
                  style={{ marginBottom: "1rem " }}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => (window.location = course.url)}
                  >
                    Пройти на курс
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </div>
    );
  }
}
