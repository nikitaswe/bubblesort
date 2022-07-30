import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Photo">
          <img src="/photo.jpg" alt="Me" />
        </div>

        <div className="Titles">
          <h1>Nikita Kukshynsky</h1>
          <h2>
            <i>Software Engineer</i>
          </h2>
        </div>
      </header>
      <section>
        <div className="links">
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/nikitaxyz">
                GitHub
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nikitaxyz">
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://leetcode.com/nikitaswe">
                LeetCode
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="Bio">
          <p>
            Thank you for visiting my website! You can check GitHub, LeetCode or LinkedIn profiles
            via links above.
          </p>
        </div>
        <div className="Bio">
          <p>
            I love coding and engineering! Bachelor's degree in Electrical and Electronics
            Engineering (not the US), but now focused on becoming Full Stack Software Engineer.
            Quickly learn new skills and programming languages, enjoy problem-solving, grind and
            apply data structures and algorithms to make programs efficient. I create different
            projects for learning purposes and curiosity: I'm always excited to learn and try
            something new.
          </p>
          <p>As for languages, libraries, and frameworks I currently use:</p>
          <ul>
            <li>
              <strong>Languages</strong>: Python, Java, JavaScript
            </li>
            <li>
              <strong>Web Development</strong>: React, Node.JS, Express.JS, Django, Bootstrap
            </li>
            <li>
              <strong>Databases & API</strong>: SQL, MongoDB, GraphQL, REST
            </li>
            <li>
              <strong>Game development & desktop UI</strong>: PyGame, JavaFX
            </li>
            <li>
              <strong>Other</strong>: C++, Git/GitHub, OOP, TDD, MVC, HTML, CSS, Jupyter Notebook,
              Data Structures, Algorithms, basics of Machine Learning
            </li>
          </ul>
        </div>
        <div className="Bio">
          <p>
            I worked as a full-time Electrical Engineer, WordPress Developer, Stocker, and Grocery
            Shopper. But I was always passionate about software engineering. Now it's time to show
            my skills and apply them to delivering happiness!
          </p>
        </div>
      </section>
      <footer className="App-footer">
        <h3>
          <a href="mailto:bubblesort.xyz@gmail.com">bubblesort.xyz@gmail.com</a>
        </h3>
      </footer>
    </div>
  )
}

export default App
