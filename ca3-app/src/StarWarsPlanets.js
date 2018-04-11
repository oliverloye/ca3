import React,{Component} from 'react';
import facade from "./apiFacade";
class StarWarsPlanets extends Component {
constructor(props){
    super(props)
    
}

onChange = (evt) => {
    this.setState({[evt.target.id]: evt.target.value})
}
render(){
    return(
        <div>
            <h2>type in an id to find a plante</h2>
         <form  onChange={this.onChange}>
         <label>
            plante id:
          <input placeholder="id" type="number" />
          </label>
          <input type="submit" value="Submit" />
         </form>
         </div>
    )
      
  
}

componentDidMount(){
    facade.fetchDataPlanets().then(res => this.setState({dataFromServer: res}));
        
}



}



export default StarWarsPlanets;