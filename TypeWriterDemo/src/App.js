import React from "react";
import TypingString from "./TypingString";
import styling from "./app.module.css";

class App extends React.Component {

  constructor(){
    super();
    this.state={
        typeWritter:false,
    }
  }

  handleTypeWritter=(()=>{
     this.setState({
          typeWritter:!this.state.typeWritter,
     })
  })

  render(){
    return (
      <>

      <div className={styling.wrapper}>
           <button className={styling.btn} onClick={this.handleTypeWritter}>{this.state.typeWritter?"Stop":"Start"}</button>
           <TypingString typeWritter={this.state.typeWritter}/>
      </div>       
        
      </>
    );
  }
}

export default App;
