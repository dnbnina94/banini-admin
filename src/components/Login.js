import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../redux/actions/auth';
import { startLoading, stopLoading } from '../redux/actions/ui';

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errorMsg: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => {
            return {
                [name]: value
            }
        });
    }

    handleLogin = (e) => {
        e.preventDefault();

        this.props.startLoading();
        this.props.startLogin(this.state.email, this.state.password)
        .then(res => {
            this.props.stopLoading();
        }).catch(err=> {
            this.props.stopLoading();
            this.setState(() => ({ errorMsg: err.message }))
        })
    }

    render() {
        return (
            <div className="d-flex justify-content-center col-lg-4 col-md-5 m-auto">
                <form className="w-100" onSubmit={this.handleLogin}>
                    <label 
                        htmlFor="email"
                        className="mb-0"
                    >
                        Email:
                    </label>
                    <input 
                        className="form-control"
                        type="email" 
                        name="email" 
                        required={true}
                        value={this.state.email} 
                        onChange={this.handleChange}
                    ></input>
                    <label 
                        htmlFor="password"
                        className="mb-0"
                    >
                        Pasword:
                    </label>
                    <input 
                        className="form-control"
                        type="password" 
                        name="password" 
                        required={true}
                        value={this.state.password} 
                        onChange={this.handleChange}
                    ></input>
                    {
                        this.state.errorMsg &&
                        <p
                            className="mb-0 mt-3 login--error-msg"
                        >
                            {this.state.errorMsg}
                        </p>
                    }
                    <button 
                        type="submit" 
                        className="btn btn-primary mt-3 w-100"
                    >
                        Login
                    </button>
                </form>
            </div>
        );  
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (email,password) => dispatch(startLogin(email,password)),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading())
});

export default connect(undefined, mapDispatchToProps)(Login);