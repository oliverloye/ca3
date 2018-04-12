import React,{Component} from 'react';
import facade from "./StarWarsFacade";
class StarWarsPerson extends Component {
constructor(props){
    super(props)
    
}

onChange = (evt) => {
    this.setState({[evt.target.id]: evt.target.value})
}
render(){
    return(
        <div>
            <h2>type in an id to find a person</h2>
         <form  onChange={this.onChange}>
         <label>
            person id:
          <input placeholder="id" type="number" />
          </label>
          <input type="submit" value="Submit" />
         </form>
         </div>
    )
      
  
}

componentDidMount(){
    facade.fetchDataPeople().then(res => this.setState({dataFromServer: res}));
        
}



}


export default StarWarsPerson;