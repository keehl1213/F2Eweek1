import React from 'react';
import logo from './assets/logo_desktop.png';
import iconStar from './assets/icon_star.svg';
import iconSignin from './assets/icon_signin.svg';
import forthText from './assets/4th.png';
import circle from './assets/circle.png';
import diamond1 from './assets/diamond1.png';
import diamond2 from './assets/diamond2.png';
import diamond3 from './assets/diamond3.png';
import diamond4 from './assets/diamond4.png';
import diamond5 from './assets/diamond5.png';
import star from './assets/star.png';
import bounceline1 from './assets/bounceline1.png';
import bounceline2 from './assets/bounceline2.png';
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
                <button type="button" className="button enroll">
                    立即報名
                    <img src={iconStar} alt="star" />
                </button>
                <button type="button" className="button signin">
                    登入
                    <img src={iconSignin} alt="sign in icon" />
                </button>
            </header>
            <div className="web-title">
                <div className="web-title-left">
                    <div className="web-title-en">The F2E</div>
                    <div className="web-title-ch">互動式網頁設計</div>
                </div>
                <div className="web-title-right">
                    <img className="web-title-4th" src={forthText} alt="4th" />
                    <img
                        className="web-title-circle"
                        src={circle}
                        alt="circle"
                    />
                </div>
            </div>
            <img
                className="absolute"
                style={{ top: 136, right: 139 }}
                src={diamond1}
                alt="diamond"
            />
            <img
                className="absolute"
                style={{ top: 390, left: 793 }}
                src={diamond2}
                alt="diamond"
            />
            <img
                className="absolute"
                style={{ top: 553, right: 100 }}
                src={diamond3}
                alt="diamond"
            />
            <img
                className="absolute"
                style={{ top: 514, left: 373 }}
                src={diamond4}
                alt="diamond"
            />
            <img
                className="absolute"
                style={{ top: 352, left: 47 }}
                src={diamond5}
                alt="diamond"
            />
            <img
                className="absolute"
                style={{ top: 140, right: 387 }}
                src={star}
                alt="star"
            />
            <img
                className="absolute"
                style={{ top: 406, right: 405, width: 40, height: 40 }}
                src={star}
                alt="star"
            />
            <img
                className="absolute"
                style={{ top: 654, right: 59, width: 40, height: 40 }}
                src={star}
                alt="star"
            />
            <img
                className="absolute"
                style={{ top: 508, left: 528, width: 54, height: 54 }}
                src={star}
                alt="star"
            />
            <img
                className="absolute"
                style={{ top: 665, left: 232, width: 40, height: 40 }}
                src={star}
                alt="star"
            />
            <img
                className="absolute"
                style={{ top: 133, left: 116, width: 40, height: 40 }}
                src={star}
                alt="star"
            />
            <img
                className="absolute"
                style={{ top: 126, right: -43 }}
                src={bounceline1}
                alt="bounceline"
            />
            <img
                className="absolute"
                style={{ top: 514, left: 946 }}
                src={bounceline2}
                alt="bounceline"
            />
            <div
                className="absolute flex flex-col items-center"
                style={{
                    top: 646,
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                }}
            >
                <div className="scrolldown-text">scroll down</div>
                <div className="scrolldown-line" />
            </div>
            <div className="main" />
        </div>
    );
}

export default App;
