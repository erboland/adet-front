import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./mainTable.css";
export default class MainTable extends Component {
  render() {
    return (
      <div className="container wrapper">
        <div className="mainTableContainer">
          <h3>Все ученики зарегистрированные на курсе</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Имя пользователся</th>
                <th>Возраст</th>
                <th>Рейтинг</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>20</th>
                <th>4</th>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <th>21</th>
                <th>3</th>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <th>14</th>
                <th>2</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
