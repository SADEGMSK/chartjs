var xValues = []
var n = 0;
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
     data: [860,1140,1000,1060,1070,1110,1330,2210,7830,2478],
     borderColor: "red",
     fill: false,
     showLine: true,
     spanGap: true,
   },{
     data: [1600,1700,1800,1900,2000,2700,4000,5000,6000,7000],
     borderColor: "green",
     fill: false,
     showLine: true,
     spanGap: true,
   },{
     data: [300,700,2000,5000,6000,4000,2000,1005,200,100],
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

function addData(chart, label, data , data , data) {
   chart.data.labels.push(label);
   chart.data.datasets.forEach((dataset) => {
       dataset.data.push(data);
   });
   chart.update();
}
let random1;
let random2;
let random3;
setInterval(() => {
  random1= Math.floor(Math.random() * 8001)
  random2= Math.floor(Math.random() * 8001)
  random3= Math.floor(Math.random() * 8001)
   addData(chart1,...xValues,random1 , random2 , random3)
}, 3000);

function removeData(chart,label,data) {
   chart.data.labels.pop(label);
   chart.data.datasets.forEach((dataset) => {
      dataset.data.pop(data);
   });
   chart.update();
}
setInterval(() => {
    random1= Math.floor(Math.random() * 8001)
    random2= Math.floor(Math.random() * 8001)
    random3= Math.floor(Math.random() * 8001)
 removeData(chart1,xValues,random1 , random2 , random3)
}, 3000);