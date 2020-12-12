import React,{Component} from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        account: {username : "", password:""},
        errors:{}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    }


    validate=()=>{
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
        errors[item.path[0]] = item.message;

        return errors;


    }

    handleSubmit=e=>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return ;
        // calling the server
        console.log("Submitted");
    }

    validateProperty=({name, value})=>{
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleChange=({currentTarget:input})=>{
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete  errors[input.name];

        const account = {...this.state.account};
        account[input.name]= input.value;
        this.setState({account, errors});
    }
    render() { 
        return ( <React.Fragment>
            <h1>Login Form</h1>
            <form onSubmit={this.handleSubmit}>
                <Input error={this.state.errors.username} name="username" value={this.state.account.username} label="Username" onChange={this.handleChange}/>
                <Input error={this.state.errors.password} name="password" value={this.state.account.password} label="Password" onChange={this.handleChange}/>
                <button disabled={this.validate()} className="btn btn-primary">Log in</button>
            </form>
        </React.Fragment> );
    }
}
 
 
export default Form;