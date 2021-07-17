import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import '../App.css';


 const navStyle = {
        color: 'blue'
    }


function UserDetail({match}) {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`https://minitwitter-crossover.herokuapp.com/api=${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
      
    }, []);

    console.log(match)

  return (
    <div className="App">
      <h1>{data.text}</h1>
    </div>
  );
}
export default UserDetail;