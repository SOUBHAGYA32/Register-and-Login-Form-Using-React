import React from "react"
import Login from "./Login";
import Register from "./Register";


const Forms = () => {
    const [form, setForm] = React.useState({register: true, login: false, text: 'Login'});
    const [formState, setFormStatus] = React.useState(false);
    const updateForm = () =>{
        setForm({register: !form.register, login: !form.login, text: form.text == "Login" ? 'Register': 'Login'});
        setFormStatus(true);
    }
    return (
        <div className="row">
            <div className="left"></div>
            <div className="right">
                {form.register ? <Register form={form} updateForm={updateForm} formState={formState}/> : <Login form={form} updateForm={updateForm} formState={formState}/> }
            </div>
        </div>
    );
}

export default Forms;
