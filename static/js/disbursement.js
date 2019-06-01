Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

    Chart.defaults.global.defaultFontColor = '#292b2c';

    var ctx = document.getElementById("myBarChart");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "Disbursement",
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: [5312, 6251, 7841, 9821, 14984, 0],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });

    // Configure Pusher instance
    const pusher = new Pusher('PU0361d036ce45f4e6365b', {
        cluster: 'ap2',
        encrypted: true
    });

    // Subscribe to poll trigger
    var disbursementChannel = pusher.subscribe('disbursement');

    // Listen to 'disbursement placed' event
    var disbursement = document.getElementById('disbursement-count')
    disbursementChannel.bind('country', function(data) {
      myLineChart.data.datasets.forEach((dataset) => {
          dataset.data.fill(parseInt(data.units),-1);
      });
      myLineChart.update();
      disbursement.innerText = parseInt(disbursement.innerText)+1
    });