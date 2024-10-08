import React from 'react';
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

function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route
                        path='/voyage-global'
                        element={<TourSearchPage/>}
                    ></Route>
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
    )
}

export default App;
