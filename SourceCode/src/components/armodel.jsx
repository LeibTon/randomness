import React from "react";
import MarkDownRender from "./markdown";
import {round} from "mathjs"
function Armodel(props)
{
function getMarkdown(model)
{
var result = "$x_{k+1}$ $=$ $"+round(model[0],3).toString()+"$ $+$ $"+round(model[1],3).toString()+"$ $*$ $x_{k}$ ";
for(var i=2;i<model.length;i++)
{
result+="$+$ $";
result+=round(model[i],3).toString()
result+="$ $*$ $x_{k-"
result+=(i-1).toString()
result+="}$ ";
}
return result;
}
return <div className="armodel-container">
<div className="token-head">Human Generated Data:</div>
<div>
<span className = "token">Train Error:</span>
<span className = "token_des">{round(props.input.input_train_error,4)}</span>
</div><div><span className = "token">Test Error:</span>
<span className = "token_des">{round(props.input.input_test_error,4)}</span>
</div><div><span className="token">AR Model: </span><span className = "token_des special_markdown">
<MarkDownRender source ={getMarkdown(props.input.input_p)} /></span>
</div><div><span className = "token">Overfitting:</span>
<span className = "token_des">{props.input.random_test_error-props.input.random_train_error>0.4 ? "Yes": "No"}</span>
</div>
<div className="token-head">Machine Generated Data:</div>
<div>
<span className = "token">Train Error:</span>
<span className = "token_des">{round(props.input.random_train_error,4)}</span>
</div><div><span className = "token">Test Error:</span>
<span className = "token_des">{round(props.input.random_test_error,4)}</span>
</div><div><span className="token">AR Model: </span><span className = "token_des special_markdown">
<MarkDownRender source ={getMarkdown(props.input.random_p)} /></span>
</div><div><span className = "token">Overfitting:</span>
<span className = "token_des">{props.input.random_test_error-props.input.random_train_error>0.35? "Yes": "No"}</span>
</div>
<span className = "token collll">{props.input.random_test_error<props.input.input_test_error?"Machine ": "Human "}Generated Data is fitted better in {props.input["r-value"]} order AR model. As per this model, {props.input.random_test_error > props.input.input_test_error?"Machine ": "Human "} is good at generating random numbers.</span>
</div>
}


export default Armodel;
