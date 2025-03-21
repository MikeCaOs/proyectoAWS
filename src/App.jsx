import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <a href="index.html">
          <img className="header__logo" src="img/logo.png" alt="Logotipo" />
        </a>
      </header>

      <nav className="navegacion">
        <a className="navegacion__enlace navegacion__enlace--activo" href="index.html">Tienda</a>
        <a className="navegacion__enlace" href="nosotros.html">Nosotros</a>
      </nav>

      <main className="contenedor">
        <h1>Nuestros Productos</h1>

        <div className="grid">
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/1.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">VueJS</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/2.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">AngularJS</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/3.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">ReactJS</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/4.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">Redux</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/5.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">Node.JS</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/6.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">SASS</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/7.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">HTML5</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/8.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">Github</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/9.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">BulmaCSS</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/10.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">TypeScript</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/11.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">Drupal</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/12.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">JavaScript</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/13.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">GraphQL</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
          <div className="producto">
            <a href="producto.html">
              <img className="producto__imagen" src="img/14.jpg" alt="imagen camisa" />
              <div className="producto__informacion">
                <p className="producto__nombre">WordPress</p>
                <p className="producto__precio">$25</p>
              </div>
            </a>
          </div> 
        </div> 
      </main>

      <footer className="footer">
        <p className="footer__texto">Front End Store - Todos los Derechos Reservados 2023</p>
      </footer>
    </>
  );
}

export default App;
