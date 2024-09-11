import React from 'react';
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { Header } from "./components/Header";
import { ContactsPage } from "./pages/ContactsPage";
import { Navigation } from "./components/Navigation";
import './App.scss';
import { TourSearchPage } from "./pages/TourSearchPage";
import { NewsPage } from "./pages/NewsPage";
import { Footer } from "./components/Footer";
import { FeedbacksPage } from "./pages/FeedbackPage";

function App() {
    return (
        <>
            <Header/>
            <div className='fake-header'></div>
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={<TourSearchPage/>}
                    ></Route>
                    <Route
                        path='/main'
                        element={<MainPage/>}
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
                        path='/feedback'
                        element={<FeedbacksPage/>}
                    ></Route>
                </Routes>
                <Footer/>
            </main>
        </>
    )
}

export default App;
