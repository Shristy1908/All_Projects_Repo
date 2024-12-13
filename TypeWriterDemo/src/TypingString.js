import React from "react";

export default class TypingString extends React.Component{

    
    constructor(){

        super();
        this.state={
            index:0,
        }
        this.timer=null;
    }
    render(){
        var string="Coding Ninjas";
        return(
            <>
                <h1>
                    {string.substring(0, this.state.index)}
                </h1>
            </>
        )
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.typeWritter!==this.props.typeWritter){
            if(this.props.typeWritter){
                this.timer=setInterval(()=>{
                    this.setState({
                        index:this.state.index+1,
                    })
                    
                },1000);
            }
            else{
                clearInterval(this.timer);
            }

        }
    }

}