import React from 'react';

const Register = (props) => {
    const {text} = props.form;
    const updateForm = () =>{
        props.updateForm();
    }
    return (
        <div className="form">
            <form action="" className={props.formState ? 'myForm' : ''}>
                <div className="form-group group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control control" id="name" placeholder="Type Name" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control control" id="email" placeholder="Type Email" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control control" id="password" placeholder="Type Password" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit" name="submitBtn">Register</button>
                </div>
                <div className="group">
                    <span className="link" onClick={updateForm}>{text}</span>
                </div>
            </form>
        </div>
    );
}

export default Register;

