import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import MessagesComponent from "../../../components/Messages";
import StatComponent from "../../../components/Stat";
import ProgressListComponent from "../../../components/ProgressList";
import { Bar, Line, Doughnut, Pie, Radar } from 'react-chartjs-2';
import { authHeader } from "../../../helpers/auth-header";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: {
        income: {},
        visits: {},
        orders: {},
        new_accounts: {}
      },
      charts: {
        barChart: {},
        lineChart: {},
        doughnutChart: {},
        pieChart: {},
        radarChart: {}
      },
      sales: [],
      messages: []
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }

  componentWillMount() {
    this.loadSummaryData();
    this.loadChartsData();
    this.loadSalesData();
    this.loadMessagesData();
  }

  loadSummaryData() {
    fetch('http://127.0.0.1:3003/stats/summary', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let summary = response.data && response.data.length > 0 ? response.data[0] : {};
        this.setState({summary})
      });
  }

  loadChartsData() {
    fetch('http://127.0.0.1:3003/stats/charts', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let charts = response.data ? response.data[0] : {};
        this.setState({charts})
      });
  }

  loadSalesData() {
    fetch('http://127.0.0.1:3003/stats/sales', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let sales = response.data;
        this.setState({sales})
      });
  }

  loadMessagesData() {
    fetch('http://127.0.0.1:3003/messages', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let messages = response.messages;
        this.setState({messages})
      });
  }

  render() {
      let summary = this.state.summary;
      if (!summary.income) {
        summary = {income : {},visits : {},orders : {},new_accounts : {}}
      }
      return (
      <div className="container-fluid px-5 mt-5 mb-4">


      </div>
    );
  }
}

export default DashboardPage;
