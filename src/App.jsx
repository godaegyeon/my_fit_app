import React from "react";

function App() {
  return (
    <div>
      <header>
        <div>
          <img src="" alt="logo" />
          <h1>title</h1>
          <ul>
            <li>
              <h3>login</h3>
              <form action="">
                <fieldset>
                  <legend>login form</legend>
                  <label htmlFor="id">id</label>
                  <input type="text" name="id" id="id"/>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" id="password" />
                </fieldset>
              </form>
            </li>
            <li>
              <h3>create ID</h3>
            </li>
            <li>
              <form action="">
                <fieldset>
                  <legend>create form</legend>
                  <label htmlFor="id"></label>
                  <input type="text" name="id" id="id" />
                  <label htmlFor="name"></label>
                  <input type="text" name="name" id="name" />
                  <label htmlFor="age"></label>
                  <input type="text" name="age" id="age" />
                  <label htmlFor="height"></label>
                  <input type="text" name="height" id="height" />
                  <label htmlFor="weight"></label>
                  <input type="text" name="weight" id="weight" />
                </fieldset>
              </form>
            </li>
          </ul>
        </div>
      </header>
      <article></article>
      <nav></nav>
    </div>
  );
}

export default App;
