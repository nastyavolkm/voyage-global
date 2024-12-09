import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { Header } from "./components/Header";
import { ContactsPage } from "./pages/ContactsPage";
import './styles/custom-scroll.scss';
import './App.scss';
import { TourSearchPage } from "./pages/TourSearchPage";
import { NewsPage } from "./pages/NewsPage";
import { Footer } from "./components/Footer";
import { FeedbacksPage } from "./pages/FeedbackPage";
import { CruiseSearchPage } from "./pages/CruiseSearchPage";
import { PayPage } from "./pages/PayPage";
import { Spinner } from "./components/Spinner";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (<>
                    <Header/>
                    <main>
                        <Routes>
                            <Route
                                path='/'
                                element={<TourSearchPage/>}
                            ></Route>
                            <Route
                                path='/cruises'
                                element={<CruiseSearchPage/>}
                            ></Route>
                            <Route
                                path='/about'
                                element={<AboutPage/>}
                            ></Route>
                            <Route
                                path='/contacts'
                                element={<ContactsPage/>}
                            ></Route>
                            <Route
                                path='/news'
                                element={<NewsPage/>}
                            ></Route>
                            <Route
                                path='/pay'
                                element={<PayPage/>}
                            ></Route>
                            <Route
                                path='/feedback'
                                element={<FeedbacksPage/>}
                            ></Route>
                        </Routes>
                    </main>
                    <Footer/>
                </>
            )}
        </>
    )
}

export default App;
