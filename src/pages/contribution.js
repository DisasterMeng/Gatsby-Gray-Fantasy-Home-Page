import React from 'react'


export default class Contribution extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            check:0
        }
    }

    render(){
        return (
            <div>
               contribution
                <div>{this.state.check}</div>
            </div>
        )
    }
}