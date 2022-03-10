//VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your 
//basic information for example name, number, date of birth and etc. 
//This div should be hard-coded to prepare for the Medium Challenge.
// import React from 'react';

// import React from 'react';
// import './App.css';

// class App extends React.Component{
//   render(){
//     return (
//       <div className="App">
//         <h1>Name: Guillian Prince</h1>
//         <p>DOB: 03/04/1996</p>
//         <p>Cell: 980-222-3434</p>
//       </div>
//     );
//   }
// }

// export default App;

// EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object
// import React from 'react';
// import './App.css';

// class App extends React.Component{
//   constructor(props){
//     super();
//     this.state = {
//       person: {

//       }
//     }
//   }
//   render(){
//   return (
//     <div className="App">
//     <h1>Name: Guillian Prince</h1>
//     <p>DOB: 03/04/1996</p>
//     <p>Cell: 980-222-3434</p>
//     </div>
//   );
// }
// }

// export default App;

// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)


// import React from 'react';
// import './App.css';
// import BasicInfo from './components/BasicInfo';

// class App extends React.Component{
//   constructor(props){
//     super();
//     this.state = {
//       person: {
//         name: "Guillian Prince",
//         number: "980-222-3434",
//         age: "26",
//         birthdate: "03/04/1996"
//       }
//     }
//   }
//   render(){
//   return (
//     <div className="App">
//       <BasicInfo name={this.state.person.name} age={this.state.person.age} birthday={this.state.person.birthdate} number={this.state.person.number} />
//     </div>
//   );
// }
// }

// export default App;

// HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      persons: [
        {
        name: "Guillian Prince",
        number: "980-222-3434",
        age: "26",
        birthdate: "03/04/1996"
      },
      {
        name: "Maira Baez",
        number: "777-777-777",
        age: "55",
        birthdate: "10/17/1966"
      },
      {
        name: "Jensy Prince",
        number: "222-222-2222",
        age: "19",
        birthdate: "07/02/2002"
      },
      {
        name: "Brandon Anderson",
        number: "015-015-1515",
        age: "29",
        birthdate: "04/15/1992"
      },
    ]
    }
  }
  render(){
  return (
    <div className="App">
      {this.state.persons.map(person =>{
        return <BasicInfo name={person.name} age={person.age} birthdate={person.birthdate} number={person.number} />
      })}
      
    </div>
  );
}
}

export default App;


