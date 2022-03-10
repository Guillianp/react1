import React from 'react';
import './BasicInfo.css'

class BasicInfo extends React.Component{
  render(){
  return (
    <div className='Info'>   
      <h3>{this.props.name}</h3>
      <p>Age: {this.props.age}</p>
      <p>D.O.B: {this.props.birthdate}</p>
      <p>Number: {this.props.number}</p>
    </div>
  );
}
}

export default BasicInfo;