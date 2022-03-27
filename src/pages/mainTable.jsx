import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./mainTable.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Scatter } from "react-chartjs-2";
import faker from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Количество заданий за месяцы",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export const options1 = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  title: {
    display: true,
    text: "Количество попыток за месяцы",
  },
};

export const data1 = {
  datasets: [
    {
      label: "A dataset",
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

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
          <div className="analytics">
            <div className="analytics-card">
              <Bar options={options} data={data} />
            </div>
            <div className="analytics-card">
              <Scatter options={options1} data={data1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
