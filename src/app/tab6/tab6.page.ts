import {Component, ViewChild } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page {


    @ViewChild('lineCanvas') lineCanvas;
    greens: number;
    lineChart: any;

    constructor(public navCtrl: NavController) {
        this.greens = 0;
    }

    displayChart() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                datasets: [{
                    data: [{
                        x: 0,
                        y: 65
                    }, {
                        x: 10,
                        y: 67,
                    }, {
                        x: 50,
                        y: 68
                    }, {
                        x: 80,
                        y: 65,
                    }, {
                        x: 100,
                        y: 64
                    }, {
                        x: 120,
                        y: 68
                    }]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                },
                title: {
                    display: false,
                    fontStyle: 'bold',
                    fontSize: 18
                }
            },

        });

    }
}
