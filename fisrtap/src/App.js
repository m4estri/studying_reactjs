import React from 'react';
import './style.css';


const Body = (props) => {

  return(
    
    <body id ="bd">
      <hr/>
        <h5>Welcome to the Hell {props.name}</h5>
      <hr/>
    </body>
    
    );

}

const Header = () => {
return(
  <nav id="menu">
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Missão</a></li>
          <li><a href="#">Links</a></li>
          <li><a href="#">Contato</a></li>
      </ul>
  </nav>
 );
}


function App() {
  return(
    <div>
      <Header/>
      <Body name="Bruce Wayne" />
    </div>
  );
}

export default App;
