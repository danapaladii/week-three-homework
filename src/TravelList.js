import { Component } from "react";
import check from './checkmark.jpg';

export class TravelList extends Component{
    state = {
       userInput: "",
       travelList: [] 
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input){
        if (input === '') {
            alert ("Please enter destination")
        }

        else {
            let listArray = this.state.travelList;
            listArray.push(input)
            this.setState({travelList: listArray, userInput: ''})

        }
    }

    deleteItem() {
        let listArray = this.state.travelList;
        listArray = [];
        this.setState ({travelList: listArray})
    }   

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');

    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <div className="container1">
                        <input type="text"
                        placeholder="Where do you want to go?"
                        onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} />
                    </div>

                    <div className="container1">
                        <button onClick={()=>this.addItem(this.state.userInput)} className="add">Add</button>
                    </div>

                    <ul>
                    {this.state.travelList.map((item, index)=> (
                        <li onClick={this.crossedWord} key={index}><img src={check} width="40px" />{item}</li>

                        
                    ))}
                    
                    
                    </ul>
                    <div className="container1">
                        <button onClick = {() => this.deleteItem()} className="delete">Clear</button>
                    </div>
                </form>
            </div>
        )
    }

    
}