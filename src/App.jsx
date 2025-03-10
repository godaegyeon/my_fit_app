import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div>
          <div className="logo_box mx-auto d-flex column gap-3 mw-150">
            <img
              src="public/images/logo.png"
              alt="logo"
              className="logo_img mx-auto mw-100"
            />
            <h1 className="logo_title text-center">muscleLog</h1>
          </div>
          <div className="welcome_box d-flex column gap-2 mw-300 mx-auto">
            <button className="btn btn_login">Log In</button>
            <button className="btn btn_signup">Sign Up</button>
          </div>
          <ul>
            <li>
              <form className="login_form">
                <fieldset>
                  <legend>login form</legend>
                  <div>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" className="id" />
                  </div>
                  <div>
                    <label htmlFor="pass">비밀번호</label>
                    <input type="password" name="pass" className="pass" />
                  </div>
                </fieldset>
              </form>
            </li>
            <li>
              <form className="create_form">
                <fieldset>
                  <legend>create form</legend>
                  <div>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" className="id" />
                  </div>
                  <div>
                    <label htmlFor="pass">비밀번호</label>
                    <input type="password" name="pass" className="pass" />
                  </div>
                  <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                      type="password"
                      name="password"
                      className="password"
                    />
                  </div>
                  <div>
                    <label htmlFor="name">이름</label>
                    <input type="text" name="name" className="name" />
                  </div>
                  <div>
                    <label htmlFor="age">나이</label>
                    <input type="text" name="age" className="age" />
                  </div>
                  <div>
                    <label htmlFor="height">신장</label>
                    <input type="text" name="height" className="height" />
                  </div>
                  <div>
                    <label htmlFor="weight">체중</label>
                    <input type="text" name="weight" className="weight" />
                  </div>
                </fieldset>
              </form>
            </li>
          </ul>
        </div>
      </header>
      <article className="calendar_sec">
        <div className="calendar_box">
          <div>
            <select>
              <option>2025</option>
              <option>2026</option>
            </select>
          </div>
          <div>
            <select>
              <option value="1">Jan.</option>
              <option value="2">Feb.</option>
              <option value="3" selected>
                Mar.
              </option>
              <option value="4">Apr.</option>
              <option value="5">May</option>
              <option value="6">Jun.</option>
              <option value="7">Jul.</option>
              <option value="8">Aug.</option>
              <option value="9">Sep.</option>
              <option value="10">Oct.</option>
              <option value="11">Nov.</option>
              <option value="12">Dec.</option>
            </select>
          </div>
          <div>
            <div>
              <span class="material-symbols-outlined">arrow_back_ios_new</span>
            </div>
            <ul>
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <div>
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
            <ul>
              <li>
                <p></p>
                <div>
                  <span className="material-symbols-outlined">
                    radio_button_checked
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className="input_sec">
        <form action="" className="fit_input_form">
          <fieldset>
            <legend>log input form</legend>
            <ul>
              <li>
                <label htmlFor="fit_section">운동부위</label>
                <input type="text" name="fit_section" className="fit_section" />
              </li>
              <li>
                <label htmlFor="fit_name">운동명</label>
                <input type="text" name="fit_name" className="fit_name" />
              </li>
              <li>
                <ul>
                  <li>
                    <label htmlFor="fit_weight">하중</label>
                    <input
                      type="number"
                      name="fit_weight"
                      className="fit_weight"
                    />
                  </li>
                  <li>
                    <label htmlFor="fit_num">운동횟수</label>
                    <input type="number" name="fit_num" className="fit_num" />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="fit_speed">운동속도</label>
                <input type="number" name="fit_speed" className="fit_speed" />
              </li>
              <li>
                <label htmlFor="fit_time">운동시간</label>
                <input type="number" name="fit_time" className="fit_time" />
              </li>
              <li>
                <label htmlFor="fit_set_num">운동반복셋트수</label>
                <input
                  type="number"
                  name="fit_set_num"
                  className="fit_set_num"
                  defaultValue="3"
                />
              </li>
            </ul>
          </fieldset>
        </form>
      </article>
      <article className="my_page_sec"></article>
      <nav>
        <ul>
          <li>
            <span className="material-symbols-outlined">search_insights</span>
          </li>
          <li>
            <span className="material-symbols-outlined">add</span>
          </li>
          <li>
            <span className="material-symbols-outlined">person</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
