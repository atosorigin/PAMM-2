import {Component, OnInit} from "@angular/core";
declare let d3: any;

@Component({
    selector: "chart",
    template: `
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>`,
    styles: [`div {margin: 10px; padding: 10px; border:1px solid }`]
})

export class ChartComponent implements OnInit {
    options: any;
    data: any;

    ngOnInit() {
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d: any) {
                    return d.label;
                },
                y: function (d: any) {
                    return d.value;
                },
                showValues: true,
                valueFormat: function (d: any) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };

        this.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label": "A",
                        "value": -29.765957771107
                    },
                    {
                        "label": "B",
                        "value": 0
                    },
                    {
                        "label": "C",
                        "value": 32.807804682612
                    },
                    {
                        "label": "D",
                        "value": 196.45946739256
                    },
                    {
                        "label": "E",
                        "value": 0.19434030906893
                    },
                    {
                        "label": "F",
                        "value": -98.079782601442
                    },
                    {
                        "label": "G",
                        "value": -13.925743130903
                    },
                    {
                        "label": "H",
                        "value": -5.1387322875705
                    }
                ]
            }
        ];
    }

}