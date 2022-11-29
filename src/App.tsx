import React from 'react';
import logo from './assets/logo_desktop.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="flex-1">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <ul className="menu flex size">
                    <li>本屆主題</li>
                    <li>關卡資訊</li>
                    <li>時程</li>
                    <li>贊助單位</li>
                </ul>
                <button type="button">立即報名</button>
                <button type="button">登入</button>
            </header>
            <div className="main" />
        </div>
    );
}

export default App;
