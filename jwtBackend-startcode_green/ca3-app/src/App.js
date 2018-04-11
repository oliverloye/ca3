import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Link
} from 'react-router-dom'
import facade from "./apiFacade";

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
    }
    login = (evt) => {
        evt.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }
    onChange = (evt) => {
        this.setState({[evt.target.id]: evt.target.value})
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.login} onChange={this.onChange} >
                    <input placeholder="User Name" id="username" />
                    <input placeholder="Password" id="password" />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state= {dataFromServer: "Fetching!!"};
    }
    componentDidMount(){
        facade.fetchData().then(res=> this.setState({dataFromServer: res}));
    }
    render() {
        return (
            <div>
                <h2>Data Received from server</h2>
                <h3>{this.state.dataFromServer}</h3>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false }
    }
    logout = () => {
        facade.logout();
        this.setState({ loggedIn: false });
    }

    login = (user, pass) => {
        facade.login(user,pass)
            .then(res =>this.setState({ loggedIn: true }));
    }
    render() {
        return (
            <div>
                {!this.state.loggedIn ? (<LogIn login={this.login} />) :
                    ( <div>
                        <LoggedIn/>
                        <button onClick={this.logout}>Logout</button>
                    </div>)}
            </div>
        )
    }
}

const Home = () => (
    <div>
        <h2>Welcome</h2>
    </div>
)

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {loggedIn: false}
    }

    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }
}

const Topic = ({ match }) => (
    <div className="topic">
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic}/>
        <Route exact path={match.path} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)




const BasicExample = () => (
    <Router>
        <div>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/login" component={App}/>
        </div>
    </Router>
)
export default BasicExample;