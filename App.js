/*
1)- Tocreate project enter the following commands in terminal
        npx create-react-app major-project
        npm i web-vitals
        cd major-project
        npm start
 2)-   Create and  Navbar, Body and Footer coponents in Coponent folder and import them into App.js    
3)- To use and import the bootsratp CSS and JS links copy bootstrap CCS link and paste it index.html which is inside public folder just between title and closing head tag
 Similalry to use JS link copy it from bootsrap website and paste it inside index.html of public folder between closing body and closing html tag
4)- To use Routing  and React Router Dom follow below steps:
           4.1)-npm install react-router-dom in terminal
           After this set up the Browser Router
           Browser Router allow us to enable and define the routes. For this
           4.2)-  Go and Update the src/index.js file
                     import{BrowserRouter} from 'react-router-dom';
                 <React.StrictMode> <BrowserRouter> <App /> </BrowserRouter> </React.StrictMode>
          4.3)- Now update src/app.js file
                 import { Routes, Route } from "react-router-dom";

                  <Routes>
                  <Route path="/body" element={<Body/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/features" element={<Features/>}/>
                   </Routes>
          4.4)-  Now update the Navbar.jsx to provide Navigation Links and for this go to Navbar.jsx
                
  5)- Now we create a dumy server using json and for this we create a file inside major-project let's say db.json              
5.1)- To use json server write the following command in  seprate terminal
NOTE: Terminal should be seperate means react should be open in seprate terminal and json-server should be in diff terminal
 npm i -g json-server
 5.2)- After this type the command "json-server --watch db.json --port 5001" in terminal to see the json server working
  but port of json and react should be different. If react is on port 3000 then json should be on different port
 Note: If error occrurs after writing the command: "json-server --watch db.json --port 5001" then write the following 3 commands and then write the json command json-server --watch db.json --port 5001
 set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
 Get-ExecutionPolicy
Get-ExecutionPolicy -list
 After these 3 commands write the json command: json-server --watch db.json --port 5001
 You can see video on youtube
 6)- Now to use CRUD operations specially for sending the request we use axios, and for this type this in another new terminal
                                  npm install axios
And after this go to Free.jsx file inside component folder
7)- Now to create another file AddItem in component folder. Also, add its route and import it in App.js
Now again go to AddItem.jsx filwe for further steps
 */

import Navbar from "./Coponent/Navbar";
import Body from "./Coponent/Body";
import Free from "./Coponent/Free";
import Footer from "./Coponent/Footer";
import Home from "./Coponent/Home";
import AboutUs from "./Coponent/AboutUS";
import Features from "./Coponent/Features";
import ContactUs from "./Coponent/ContactUs";
import { Routes, Route } from "react-router-dom";
import ShowItem from "./Coponent/ShowItem";
import AddPaidItem from "./Coponent/AddPaidItem";
function App(){
return(<>
/*To change the background of our page */
<div class="p-3 mb-2 bg-info text-dark"> 
<Navbar/>

 <Routes>
  <Route path="/" element={<Body/>}/>
  <Route path="/aboutus" element={<AboutUs/>}/>
  <Route path="/free" element={<Free/>}/>
  <Route path="/add-item" element={<AddPaidItem/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/show-item" element={<ShowItem/>}/>
<Route path="/contact-us" element={<ContactUs/>}/>
  <Route path="/features" element={<Features/>}/>
 </Routes>

<Footer/>

</div>


</>)
}
export default App;/*
1)- Tocreate project enter the following commands in terminal
        npx create-react-app major-project
        npm i web-vitals
        cd major-project
        npm start
 2)-   Create and  Navbar, Body and Footer coponents in Coponent folder and import them into App.js    
3)- To use and import the bootsratp CSS and JS links copy bootstrap CCS link and paste it index.html which is inside public folder just between title and closing head tag
 Similalry to use JS link copy it from bootsrap website and paste it inside index.html of public folder between closing body and closing html tag
4)- To use Routing  and React Router Dom follow below steps:
           4.1)-npm install react-router-dom in terminal
           After this set up the Browser Router
           Browser Router allow us to enable and define the routes. For this
           4.2)-  Go and Update the src/index.js file
                     import{BrowserRouter} from 'react-router-dom';
                 <React.StrictMode> <BrowserRouter> <App /> </BrowserRouter> </React.StrictMode>
          4.3)- Now update src/app.js file
                 import { Routes, Route } from "react-router-dom";

                  <Routes>
                  <Route path="/body" element={<Body/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/features" element={<Features/>}/>
                   </Routes>
          4.4)-  Now update the Navbar.jsx to provide Navigation Links and for this go to Navbar.jsx
                
  5)- Now we create a dumy server using json and for this we create a file inside major-project let's say db.json              
5.1)- To use json server write the following command in  seprate terminal
NOTE: Terminal should be seperate means react should be open in seprate terminal and json-server should be in diff terminal
 npm i -g json-server
 5.2)- After this type the command "json-server --watch db.json --port 5001" in terminal to see the json server working
  but port of json and react should be different. If react is on port 3000 then json should be on different port
 Note: If error occrurs after writing the command: "json-server --watch db.json --port 5001" then write the following 3 commands and then write the json command json-server --watch db.json --port 5001
 set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
 Get-ExecutionPolicy
Get-ExecutionPolicy -list
 After these 3 commands write the json command: json-server --watch db.json --port 5001
 You can see video on youtube
 6)- Now to use CRUD operations specially for sending the request we use axios, and for this type this in another new terminal
                                  npm install axios
And after this go to Free.jsx file inside component folder
7)- Now to create another file AddItem in component folder. Also, add its route and import it in App.js
Now again go to AddItem.jsx filwe for further steps
 */

import Navbar from "./Coponent/Navbar";
import Body from "./Coponent/Body";
import Free from "./Coponent/Free";
import Footer from "./Coponent/Footer";
import Home from "./Coponent/Home";
import AboutUs from "./Coponent/AboutUS";
import Features from "./Coponent/Features";
import ContactUs from "./Coponent/ContactUs";
import { Routes, Route } from "react-router-dom";
import ShowItem from "./Coponent/ShowItem";
import AddPaidItem from "./Coponent/AddPaidItem";
function App(){
return(<>
/*To change the background of our page */
<div class="p-3 mb-2 bg-info text-dark"> 
<Navbar/>

 <Routes>
  <Route path="/" element={<Body/>}/>
  <Route path="/aboutus" element={<AboutUs/>}/>
  <Route path="/free" element={<Free/>}/>
  <Route path="/add-item" element={<AddPaidItem/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/show-item" element={<ShowItem/>}/>
<Route path="/contact-us" element={<ContactUs/>}/>
  <Route path="/features" element={<Features/>}/>
 </Routes>

<Footer/>

</div>


</>)
}
export default App;/*
1)- Tocreate project enter the following commands in terminal
        npx create-react-app major-project
        npm i web-vitals
        cd major-project
        npm start
 2)-   Create and  Navbar, Body and Footer coponents in Coponent folder and import them into App.js    
3)- To use and import the bootsratp CSS and JS links copy bootstrap CCS link and paste it index.html which is inside public folder just between title and closing head tag
 Similalry to use JS link copy it from bootsrap website and paste it inside index.html of public folder between closing body and closing html tag
4)- To use Routing  and React Router Dom follow below steps:
           4.1)-npm install react-router-dom in terminal
           After this set up the Browser Router
           Browser Router allow us to enable and define the routes. For this
           4.2)-  Go and Update the src/index.js file
                     import{BrowserRouter} from 'react-router-dom';
                 <React.StrictMode> <BrowserRouter> <App /> </BrowserRouter> </React.StrictMode>
          4.3)- Now update src/app.js file
                 import { Routes, Route } from "react-router-dom";

                  <Routes>
                  <Route path="/body" element={<Body/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/features" element={<Features/>}/>
                   </Routes>
          4.4)-  Now update the Navbar.jsx to provide Navigation Links and for this go to Navbar.jsx
                
  5)- Now we create a dumy server using json and for this we create a file inside major-project let's say db.json              
5.1)- To use json server write the following command in  seprate terminal
NOTE: Terminal should be seperate means react should be open in seprate terminal and json-server should be in diff terminal
 npm i -g json-server
 5.2)- After this type the command "json-server --watch db.json --port 5001" in terminal to see the json server working
  but port of json and react should be different. If react is on port 3000 then json should be on different port
 Note: If error occrurs after writing the command: "json-server --watch db.json --port 5001" then write the following 3 commands and then write the json command json-server --watch db.json --port 5001
 set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
 Get-ExecutionPolicy
Get-ExecutionPolicy -list
 After these 3 commands write the json command: json-server --watch db.json --port 5001
 You can see video on youtube
 6)- Now to use CRUD operations specially for sending the request we use axios, and for this type this in another new terminal
                                  npm install axios
And after this go to Free.jsx file inside component folder
7)- Now to create another file AddItem in component folder. Also, add its route and import it in App.js
Now again go to AddItem.jsx filwe for further steps
 */

import Navbar from "./Coponent/Navbar";
import Body from "./Coponent/Body";
import Free from "./Coponent/Free";
import Footer from "./Coponent/Footer";
import Home from "./Coponent/Home";
import AboutUs from "./Coponent/AboutUS";
import Features from "./Coponent/Features";
import ContactUs from "./Coponent/ContactUs";
import { Routes, Route } from "react-router-dom";
import ShowItem from "./Coponent/ShowItem";
import AddPaidItem from "./Coponent/AddPaidItem";
function App(){
return(<>
/*To change the background of our page */
<div class="p-3 mb-2 bg-info text-dark"> 
<Navbar/>

 <Routes>
  <Route path="/" element={<Body/>}/>
  <Route path="/aboutus" element={<AboutUs/>}/>
  <Route path="/free" element={<Free/>}/>
  <Route path="/add-item" element={<AddPaidItem/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/show-item" element={<ShowItem/>}/>
<Route path="/contact-us" element={<ContactUs/>}/>
  <Route path="/features" element={<Features/>}/>
 </Routes>

<Footer/>

</div>


</>)
}
export default App;/*
1)- Tocreate project enter the following commands in terminal
        npx create-react-app major-project
        npm i web-vitals
        cd major-project
        npm start
 2)-   Create and  Navbar, Body and Footer coponents in Coponent folder and import them into App.js    
3)- To use and import the bootsratp CSS and JS links copy bootstrap CCS link and paste it index.html which is inside public folder just between title and closing head tag
 Similalry to use JS link copy it from bootsrap website and paste it inside index.html of public folder between closing body and closing html tag
4)- To use Routing  and React Router Dom follow below steps:
           4.1)-npm install react-router-dom in terminal
           After this set up the Browser Router
           Browser Router allow us to enable and define the routes. For this
           4.2)-  Go and Update the src/index.js file
                     import{BrowserRouter} from 'react-router-dom';
                 <React.StrictMode> <BrowserRouter> <App /> </BrowserRouter> </React.StrictMode>
          4.3)- Now update src/app.js file
                 import { Routes, Route } from "react-router-dom";

                  <Routes>
                  <Route path="/body" element={<Body/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/features" element={<Features/>}/>
                   </Routes>
          4.4)-  Now update the Navbar.jsx to provide Navigation Links and for this go to Navbar.jsx
                
  5)- Now we create a dumy server using json and for this we create a file inside major-project let's say db.json              
5.1)- To use json server write the following command in  seprate terminal
NOTE: Terminal should be seperate means react should be open in seprate terminal and json-server should be in diff terminal
 npm i -g json-server
 5.2)- After this type the command "json-server --watch db.json --port 5001" in terminal to see the json server working
  but port of json and react should be different. If react is on port 3000 then json should be on different port
 Note: If error occrurs after writing the command: "json-server --watch db.json --port 5001" then write the following 3 commands and then write the json command json-server --watch db.json --port 5001
 set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
 Get-ExecutionPolicy
Get-ExecutionPolicy -list
 After these 3 commands write the json command: json-server --watch db.json --port 5001
 You can see video on youtube
 6)- Now to use CRUD operations specially for sending the request we use axios, and for this type this in another new terminal
                                  npm install axios
And after this go to Free.jsx file inside component folder
7)- Now to create another file AddItem in component folder. Also, add its route and import it in App.js
Now again go to AddItem.jsx filwe for further steps
 */

import Navbar from "./Coponent/Navbar";
import Body from "./Coponent/Body";
import Free from "./Coponent/Free";
import Footer from "./Coponent/Footer";
import Home from "./Coponent/Home";
import AboutUs from "./Coponent/AboutUS";
import Features from "./Coponent/Features";
import ContactUs from "./Coponent/ContactUs";
import { Routes, Route } from "react-router-dom";
import ShowItem from "./Coponent/ShowItem";
import AddPaidItem from "./Coponent/AddPaidItem";
function App(){
return(<>
/*To change the background of our page */
<div class="p-3 mb-2 bg-info text-dark"> 
<Navbar/>

 <Routes>
  <Route path="/" element={<Body/>}/>
  <Route path="/aboutus" element={<AboutUs/>}/>
  <Route path="/free" element={<Free/>}/>
  <Route path="/add-item" element={<AddPaidItem/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/show-item" element={<ShowItem/>}/>
<Route path="/contact-us" element={<ContactUs/>}/>
  <Route path="/features" element={<Features/>}/>
 </Routes>

<Footer/>

</div>


</>)
}
export default App;
