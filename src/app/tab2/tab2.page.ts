import { Component, ViewChild } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    @ViewChild('barCanvas') barCanvas;
    greens: number;
    barChart: any;
    constructor(public navCtrl: NavController) {
        this.greens = 0;
    }

    displayChart() {
        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                datasets: [{
                    data: [this.greens],
                    backgroundColor: [
                        'rgba(0, 255, 0, 1)'
                    ]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
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
