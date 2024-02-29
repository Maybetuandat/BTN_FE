var barChart;

function initializeChart() {
    barChart = new Morris.Bar({
        // Các thuộc tính của đồ thị
        element: 'bar-chart',
        data: [
            { point: '0 - 1', value: 2 },
            { point: '1 - 2', value: 8 },
            { point: '2 - 3', value: 20 },
            { point: '3 - 4', value: 12 },
            { point: '4 - 5', value: 36 },
            { point: '5 - 6', value: 42 },
            { point: '6 - 7', value: 25 },
            { point: '7 - 8', value: 12 },
            { point: '8 - 9', value: 4 },
            { point: '9 - 10', value: 1 },
        ],
        xkey: 'point',
        ykeys: ['value'],
        labels: ['Số lượng'],
        barColors: ['red']
    });
}







