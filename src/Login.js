import React from 'react';

const Login = (props) => {
    const {text} = props.form;
    const updateForm = () =>{
        props.updateForm();
    }
    return (
        <div className="form">
            <form action=""  className={props.formState ? 'myForm' : ''}>
                <div className="form-group group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control control" id="email" placeholder="Type Email" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control control" id="password" placeholder="Type Password" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit" name="submitBtn">Login</button>
                </div>
                <div className="group">
                    <span className="link" onClick={updateForm}>{text}</span>
                </div>
            </form>
        </div>
    );
}

export default Login;

