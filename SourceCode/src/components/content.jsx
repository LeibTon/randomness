import React from "react";
import MarkDownRender from "./markdown";
function Content(){
  
  return <div style={{padding: "5px 20px"}}>
   <h1 className="content-heading">So What It is?</h1>
   <p className = "content-description"> This is basically a fun experiment just to check how random you can be and then compare your randomness with that of a machine.<br />Here we are trying to fit your input on a model so that we can predict what your future inputs can be. There are many models available for doing this, but we will use Autoregresive models.  You will learn further what are auto regresive models and why we are using this here. <br /> Let's check if machine defeats humans even in creating chaos.</p>
<p className = "content-subheading">What are Auto Regressive Models?</p>
<p className = "content-description">
You certainly would have come across these kind of equations in mathematics, <MarkDownRender source="$x_{k+1} = \lambda x_{k}$" /> This is called an <strong>autoregressive model</strong>, where auto means self. It is a regression of the time series on itself from the past.
The equation as written above is only a function of itself from one step in the past, so we call it a <em>first order autoregressive model</em>.
<br />
High Order autoregression models a future time point based on more than one points in the past.
<MarkDownRender source = "In one dimension, we can write such an order- $r$ model as" />
<MarkDownRender source = "$x_{k+1} = \alpha_0 + \alpha_1 x_k + \alpha_2 x_{k-1} + \alpha_3 x_{k-2} + \dots + \alpha_{r+1} x_{k-r}$" />
<MarkDownRender
source = "where the $\alpha$'s are the $r+1$ coefficients to be fit to the data available." />
</p>
<p className = "content-subheading"> Why we use Auto Regressive Models?</p>
<p className = "content-description"> These models are useful to account for some <strong><em>history dependencies</em></strong> in the trajectory of timeseries. We will then build higher-order AR models to see if we can identify predictable patterns in the time-history of digits you input.</p>
<p className = "content-subheading">What is going behind the scene?</p>
<p className = "content-description">
You enter a sequence of 1's and 0's. The machine then generates a random sequence of 1's and 0's of same length. After that we divide the sequence into train and test data. The train data is used to fit the model and the test one to test the accuracy of the model.
<MarkDownRender
source = "We fit the train data on order -$r$ models where $r$ ranges from $1-20$." /> And then check the accuracy of each model over test data to get the best model out of then.
</p>
<p className = "content-description explore">
Let's explore the result.</p>
</div>
}



export default Content;
