import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import Header from "./components/Header";
import Loading from "./components/Loading";
import Redirect from "./components/Redirect";

// Pages
import NotFound from "./pages/NotFound404";
import AuthForm from "./pages/AuthForm";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";


export default function App() {
    const [state, setState] = useState({
        user: null,
        loading: true
    });

    useEffect(() => {
        // useEffect does not allow async
        if (state.loading) {
            axios.get("/user/authenticated")
                .then(res => {
                    setState({
                        ...state,
                        user: res.data.user,
                        loading: false
                    });
                });
        }
    }, [state]);


    return (
        <>
            <Header state={state} setState={setState} />

            {state.loading && <Loading />}

            <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/auth" element={(
                    <Redirect user={state.user}>
                        <AuthForm setState={setState} />
                    </Redirect>
                )} />

                <Route path="/dashboard" element={(
                    <Redirect user={state.user}>
                        <Dashboard state={state} setState={setState} />
                    </Redirect>
                )} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}