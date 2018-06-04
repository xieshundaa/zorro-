import { Component, OnInit, AfterViewInit } from '@angular/core';
import DataSet from '@antv/data-set';
import { DashboardService } from '../../../common/service/dashboard/dashboard.service';
import { LoginService } from '../../../common/service/login/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public lineChart = {};
  public barChart = {};
  private ChartData = [];
  private lineData = [];
  // private dv = new DataSet.View().source(this.ChartData).transform({
  //   type: 'fold',
  //   fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
  //   key: '月份',
  //   value: '月均降雨量',
  // });
  public Chartsdata: any;

  constructor(private chartService: DashboardService, private logins: LoginService) {
  }

  ngOnInit() {
    this.getLine();
    this.getChart();
  }

  ngAfterViewInit() {
  }
  // 柱状图
  getChart() {
    this.chartService.getCustomers().subscribe((data) => {
      console.log(data);
      this.ChartData = data.data;
      const dv = new DataSet.View().source(this.ChartData).transform({
        type: 'fold',
        fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
        key: '月份',
        value: '月均降雨量',
      });
      this.Chartsdata = dv.rows;
      this.barChart = {
        forceFit: true,
        height: 400,
        data: this.Chartsdata,
        adjust: [{
          type: 'dodge',
          marginRatio: 1 / 32,
        }]
      };
    });
  }
  getLine() {
    this.chartService.getLines().subscribe((data) => {
      console.log(data);
      this.lineData = data.data;
      // 线形图
      this.lineChart = {
        data: this.lineData,
        scale: [
          {
            dataKey: 'value',
            min: 0,
          },
          {
            dataKey: 'year',
            min: 0,
            max: 1,
          }
        ],
        forceFit: true,
        height: 400,
        fields: ['cut', 'clarity']
      };
    });
  }
}
