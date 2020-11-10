import React,{Component} from 'react';

class Form extends Component {
    state = {
        account: {username : "", password:""}
    }
    handleSubmit=e=>{
        e.preventDefault();
        console.log("Submitted");
    }
    handleChange=({currentTarget:input})=>{
        const account = {...this.state.account};
        account[input.name]= input.value;
        this.setState({account});
    }
    render() { 
        return ( <React.Fragment>
            <h1>Login Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group"><label htmlFor="username">Username</label>
                <input 
                autoFocus 
                name="username"
                value={this.state.account.username} 
                onChange={this.handleChange} 
                id="username" type="text" 
                className="form-control"/>
                </div>
                <div className="form-group"><label htmlFor="password">Password</label><input
                name="password"
                value = {this.state.account.password} 
                onChange={this.handleChange}
                id="password" 
                type="text" 
                className="form-control"/>
                </div>
                <button className="btn btn-primary">Log in</button>
            </form>
        </React.Fragment> );
    }
}
 
 
export default Form;