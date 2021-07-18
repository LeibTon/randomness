import React,{useState} from "react"
import {Line} from "react-chartjs-2";
import Armodel from "./armodel";
import Conclusion from "./final";


function Main(props){

   var [input, setInput] = useState("NULL");
   if(input==="NULL")
{
var r_value=1;
var min =100;
for(var i=0;i<20;i++)
{
var tem = props.resource.training_part[i]
if(Math.abs(tem.input_test_error-tem.input_train_error)<min)
{
min = Math.abs(tem.input_test_error-tem.input_train_error)
r_value = i+1;}
}
setInput(r_value)
}
   function handleChange(event)
{
     var value = event.target.value;
     setInput(value);
}

   var option = {
        scales: {
            yAxes: [{
                ticks: {
                    max: 1.0,
                min: 0,
                stepSize: 0.1
                }
            }]
        }
    }
   var dataset = [
        {
          label: "Human Generated Data(Train)",
          data: props.resource.training_part.map(x=>x.input_train_error),
          fill: 'none',
          pointRadius: 2,
          borderColor: 'red',
          borderWidth: 1.7,
          lineTension: 0
        },
        {
          label: "Human Generated Data(Test)",
          data: props.resource.training_part.map(x=>x.input_test_error),
          fill: 'none',
          pointRadius: 2,
          borderColor: 'blue',
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Machine Generated Data(Train)",
          data: props.resource.training_part.map(x=>x.random_train_error),
          fill: 'none',
          pointRadius: 2,
          borderColor: 'green',
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: "Machine Generated Data(Test)",
          data: props.resource.training_part.map(x=>x.random_test_error),
          fill: 'none',
          pointRadius: 2,
          borderColor: 'yellow',
          borderWidth: 1,
          lineTension: 0
        }
      ]
    var data1 = {
      labels: props.resource["r-values"],
      datasets: [dataset[0],dataset[1]],
      options: option
    }

   var data2 = {
    labels: props.resource["r-values"],
      datasets: [dataset[2],dataset[3]],
      options: option}
   
   var data3 = {
labels: props.resource["r-values"],
      datasets: [dataset[0],dataset[2]]}
   
   var data4 = {
labels: props.resource["r-values"],
      datasets: [dataset[1],dataset[3]],
      options: option}


    return <div>
<div>
<div className="plot-input-details">
<h4 className="heading_for_down">Data Struture</h4>
<table>
<tbody>
<tr>
<td>Human Generated Data:</td>
<td className="break">{props.resource.input_original.join("")}</td>
</tr>
<tr>
<td>Machine Generated Data: </td>
<td className="break">{props.resource.random_original.join("")}</td>
</tr>
<tr>
<td>Length of Data:</td>
<td className="break">{props.resource.input_length}</td>
</tr>
<tr>
<td>Length Used For Training:</td>
<td className="break">{props.resource.train_length}</td>
</tr>
</tbody>
</table>
</div>

<h4 className="heading_for_down">Visualisation Using Graphs</h4>
<p className="plot-details"> Here We Compare the peformance of AR models for differet orders over train and test data for your input and computer generated data. <br />
This Visualisation helps us to conclude which model is overfitting and which on is capturing the pattern properly.
</p>
<div className = "chart-plot"><p className = "plot-title">Plot of Train vs Test Errors for Human Generated Data</p><Line data = {data1} /> </div>
<div className = "chart-plot"><p className = "plot-title">Plot of Train vs Test Errors for Machine Generated Data</p><Line data = {data2} /> </div>
</div>
<div style={{clear: "left"}} ></div>
<div>
<p className = "plot-details">
Here we are comparing the fitting of your input and computer generated data for different order-AR models to check which one is good at generating randomness.
</p> 
<div className = "chart-plot"><p className = "plot-title">Plot of Train Error for Human vs Machine Generated</p><Line data = {data3} /> </div>
<div className = "chart-plot"><p className = "plot-title">Plot of Test Error for Human vs Machine Generated</p><Line data = {data4} /> </div>
</div>
<div style={{clear: "left"}} ></div>
<div style={{marginTop: "10px"}}>
<input className="ar-model-input" type="text" onChange= {handleChange}value={input} /><span className="heading_for_down" style={{marginLeft: "2px"}}>- order Autoregressive model</span>
</div>
{parseInt(input)>0 && parseInt(input)<21 ? <Armodel input = {props.resource.training_part[parseInt(input)-1]}/> : null}
<Conclusion />
</div>
}



export default Main;
