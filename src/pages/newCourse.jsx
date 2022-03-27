import React, { Component } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import "./mainTable.css";

export default class NewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      links: [""],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLinks = (e, id) => {
    let newLinksArray = [...this.state.links];
    newLinksArray[id] = e.target.value;
    this.setState({ links: newLinksArray });
  };

  saveAndContinue = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container
        className="wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="analytics-card">
          <h2>Добавить курс</h2>
          <Form>
            <Form.Group as={Col} controlId="formName">
              <Form.Label className="label">Имя курса</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.state.name}
                name="name"
                required
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formDescription">
              <Form.Label className="label">Описание курса</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.state.description}
                name="description"
                required
                onChange={(e) => this.setState({ description: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formLinks">
              <Form.Label className="label">Ссылки на уроки</Form.Label>
              {this.state.links.map((link, id) => {
                console.log(link);
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ marginRight: "1rem", fontSize: "1.2rem" }}>
                      {id + 1}.
                    </span>
                    <Form.Control
                      type="url"
                      defaultValue={link}
                      name="links"
                      required
                      onChange={(e) => this.handleLinks(e, id)}
                      key={id}
                    />
                  </div>
                );
              })}
            </Form.Group>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="primary"
                style={{
                  background: "#080808",
                  border: "#080808",
                  color: "#83C18E",
                  marginBottom: "1rem",
                  padding: "0.5rem",
                }}
                onClick={() =>
                  this.setState({ links: [...this.state.links, ""] })
                }
              >
                Добавить урок
              </Button>

              <Button
                variant="primary"
                onClick={this.saveAndContinue}
                style={{
                  background: "#080808",
                  border: "#080808",
                  color: "#83C18E",
                  padding: "0.5rem",
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}
