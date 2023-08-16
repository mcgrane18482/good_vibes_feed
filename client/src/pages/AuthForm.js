import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const styles = {
    toggleWrap: {
        marginTop: "15px",
    },
    label: {
        marginRight: "3px"
    },
    input: {
        marginRight: "10px"
    }
};

export default function AuthForm(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLogin: true
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleInputChange = e => {
        const prop = e.target.name;
        const value = e.target.value;

        if (prop === "isLogin") {
            return setFormData({
                ...formData,
                isLogin: value === "login" ? true : false
            })
        }

        setFormData({
            ...formData,
            [prop]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!formData.isLogin && formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        const url = formData.isLogin ? "/user/login" : "/user/register";

        try {
            const res = await axios.post(url, formData);
            console.log(res.data);
            props.setState((oldState) => {
                return {
                    ...oldState,
                    user: res.data.user
                }
            });
            setErrorMessage("");
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                isLogin: true
            });

            navigate("/");
        } catch (err) {
            console.log(err);
            setErrorMessage(err.response.data.message);
        }
    };

    return (
        <div className="sticky-footer bg-gray-900">
            <h1 className="text-center header-one text-white authForm-title">{formData.isLogin ? "Log In" : "Register"}</h1>

            <form id="authForm" onSubmit={handleSubmit} className="column">
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                {!formData.isLogin && (

                    <input
                        onChange={handleInputChange}
                        name="username"
                        type="text"
                        value={formData.username}
                        placeholder="Enter your username" />
                )}

                <input
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Enter your email" />

                <input
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    value={formData.password}
                    placeholder="Enter your password" />
                {!formData.isLogin && (
                    <input
                        onChange={handleInputChange}
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        placeholder="Confirm your password" />
                )}

                <button id="authButton">Submit</button>

                <div className="toggle-wrap row justify-center align-center" style={styles.toggleWrap}>
                    <label style={styles.label} htmlFor="login">Login</label>

                    <input
                        name="isLogin"
                        onChange={handleInputChange}
                        style={styles.input}
                        type="radio"
                        id="login"
                        value="login"
                        checked={formData.isLogin} />
                    <label style={styles.label} htmlFor="register">Register</label>

                    <input
                        name="isLogin"
                        onChange={handleInputChange}
                        style={styles.input}
                        type="radio"
                        id="register"
                        value="register"
                        checked={!formData.isLogin} />
                </div>
            </form>
        </div>
    )
}