import React,{Component} from 'react';
import facade from "./apiFacade";
class StarWars extends Component {
constructor(props){
    super(props)
    
}
render(){
    return(
        <div>
            <h2>type in an id to find a person</h2>
         <form>
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


