//VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your 
//basic information for example name, number, date of birth and etc. 
//This div should be hard-coded to prepare for the Medium Challenge.
// import React from 'react';


// function App() {
//   return (
//     <div>

//     </div>
//   );
// }

   
import React from 'react';
import './App.css';

export default App;

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <h1> Name: Guillian Prince</h1>
        <p>DOB: 03/04/1996</p>
        <p>#: 704-315-9679</p>
      </div>
    );
  }
}

export default App;
