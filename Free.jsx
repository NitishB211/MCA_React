/*

first we import the axios but before that import axios using : npm i axios command in seprate terminal
secondly import useState and useEffect
useEffect is used to  fetch and update the data and useState is used to store the data
axios is used to send the request like "Get or Put request"
1)- import axios from "axios";
2)- import { useEffect, useState } from "react";

thirdly we create a form using formik and we also use yup using command: npm i formik yup in new terminal or powershell
Now create a new component file AddItem in component folder of src

*/


import axios from "axios";
import { useEffect, useState } from "react";

function Free() {
    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/items")// To send the get request using axios use command: axios.get("http://localhost:5001/items") where https//localhost/:5001 is json server port 
            .then(response => {
                setValue(response.data);
            })
            .catch(error => {
                console.error("There was an error:", error);
            });
    }, []);

    return (
        /* Now use the card from BootStrap. Only write this much code
        
                    <div className="card" style={{ width: "18rem" }} key={item.id}>
                        <img src={item.image} className="card-img-top" alt={item.Name} />
           Similarly for other like price or name etc. use {item.price}{item.name}
           like description write  {item.description}
           */
        <>
        
            <h1>Item List</h1>
            <div>
                {value.map(item => (
                    <div className="card" style={{ width: "18rem" }} key={item.id}>
                        <img src={item.image} className="card-img-top" alt={item.Name} />
                        <div className="card-body">
                            <h5 className="card-title">Name: {item.Name}</h5>
                            <h5 className="card-title">Description: {item.Description}</h5>
                            <h5 className="card-title">size: {item.size}</h5>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Free;
