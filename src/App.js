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
        <div className="Links">
          <a target="_blank" rel="noreferrer" href="https://github.com/nikitaxyz">
            GitHub
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nikitaxyz">
            LinkedIn
          </a>
          <a target="_blank" rel="noreferrer" href="https://leetcode.com/nikitaswe">
            LeetCode
          </a>
        </div>
      </section>
      <section>
        <div className="Bio">
          <p>
            Thank you for visiting my website! You can check GitHub, LeetCode or LinkedIn profiles
            via links above.
          </p>
          <p>
            Willing to grow and create software that has an impact and value for clients/users. Like
            problem solving, algorithmic design, learning new languages/frameworks/fields. Code in
            Java, Python and JavaScript. Studied Electrical and Electronics Engineering. Apply data
            structures and algorithms to create efficient code. Have experience in web development,
            OOP, games. Ready for relocation.
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
