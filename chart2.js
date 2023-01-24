var xValues = [0 , 10]
var n = 2;
setInterval(() => { 
  let label = n*10
  xValues.push(label)
  n++;
}, 3000);
const ctx = document.getElementById('myChart')
const chart1 = new Chart(ctx, {
 type: "line",
 data: {
   labels: xValues,
   datasets: [{
     data: [],
     borderColor: "red",
     fill: false,
     showLine: true,
     spanGap: true,
   },{
     data: [],
     borderColor: "green",
     fill: false,
     showLine: true,
     spanGap: true,
   },{
     data: [],
     borderColor: "blue",
     fill: false,
     showLine: true,
     spanGap: true,
   }]
 },
 options: {
   responsive: true,
   maintainAspectRatio:true,
   legend: {display: false}
 }
});

function addData(oldData) {
  var labels = oldData.data.labels;
  var dataSetA = oldData["datasets"][0]["data"];
  var dataSetB = oldData["datasets"][1]["data"];

  labels.shift();
  count++;
  labels.push(count.toString());
  var newDataA = dataSetA[9] + (20 - Math.floor(Math.random() * (41)));
  var newDataB = dataSetB[9] + (20 - Math.floor(Math.random() * (41)));
  dataSetA.push(newDataA);
  dataSetB.push(newDataB);
  dataSetA.shift();
  dataSetB.shift();   

}
let random1;
let random2;
let random3;
setInterval(() => {
  random1= Math.floor(Math.random() * 8001)
  random2= Math.floor(Math.random() * 8001)
  random3= Math.floor(Math.random() * 8001)
  chart1.data.datasets[0].data[5] = random1;
  chart1.data.datasets[1].data[5] = random2;
  chart1.data.datasets[2].data[5] = random3;
  chart1.data.labels[5] = "Newly Added";
  chart1.update();}, 3000);

function removeData(chart) {
   chart.data.labels.pop();
   chart.data.datasets.forEach((dataset) => {
      dataset.data.shift();
   });
   chart.update();
}
setInterval(() => {
 removeData(chart1)
}, 3000);