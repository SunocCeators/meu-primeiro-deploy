import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Meu Primeiro Deploy</h1>
        <div className="divider"></div>
        <p className="author">por <span>Iuri Reis</span></p>
      </div>

      {/* Foguete voando pela tela */}
      <div className="flying-rocket">
        <div className="rocket-trail"></div>
        <span className="rocket-emoji">&#128640;</span>
      </div>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${Math.random() * 5}s`,
            '--x': `${Math.random() * 100}vw`,
            '--duration': `${3 + Math.random() * 4}s`,
            '--size': `${2 + Math.random() * 4}px`,
          }} />
        ))}
      </div>
    </div>
  )
}

export default App
