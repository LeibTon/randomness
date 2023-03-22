import React,{useState} from 'react';
import Main from "./components/main"
import Content from "./components/content"
import Loading from "./components/loading"


function App() {
  let [random,setRandom] = useState("");
  let [error1,seterror1] = useState("");
  let [error, setError] = useState("");
  let [content, setContent] = useState(false);
  let [resource,setResource] = useState()
  function check(string)
  {
    for(var i=0;i<string.length;i++)
    {
      if(string[i]!=='0' && string[i]!=='1')
      return false;
    }
    return true;
  }
  function handleChange(event)
  {
    setError("");
    var value = event.target.value;
    if(!check(value))
    {
      seterror1("You must only enter 0 and 1.")
    }
    else{
      seterror1("")
    setRandom(value)
  }

  }

  function handleClick(event)
  {
    event.preventDefault();
    if(random.length<75)
    {
      setError("You must input atleast 75 characters.")
    }
    else
    {
      setContent(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"random": random,"r":21,"part":4})
      };
      fetch("https://flaskbackend-p5ch.onrender.com//project/random_experiment/", requestOptions)
        .then((response) => response.json())
        .then(data=> {
          console.log(data)
          setResource(data)
        })
        .catch(err=> {
          setError("Server side Error! Please try Again.")
        })
      }

  }
  return (
    <div className="main-container">
    <h1 className="heading_of_page">How Random You Can Be?</h1>
    <form className="input-form" method="post">
    <div className="input-details"><span className = "total-input">{random.length>=75?"Total Digits: "+String(random.length):String(75-random.length)+" Still Required !"}</span><span className="input-error">{error1}</span></div>
        <input type="text" name="random" value={random} placeholder="Enter Random 0's and 1's" onChange={handleChange} />
    <div className="submit-details" > <button type="submit" name="button" onClick={handleClick}>Submit</button> <span className="input-error">{error}</span></div>
    </form>
    <div>
    {content && <Content />}
    {resource?<Main resource= {resource} />: content? <Loading/ >: null}
    </div>
    </div>
  );
}

export default App;
