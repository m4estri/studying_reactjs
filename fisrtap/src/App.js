import React, {Component} from 'react';
import './style.css'


class App extends Component {
    render(){
        return(
            <div className="container">
               <img src={require('./assets/cronometro.png')} className="img"/>
               <a className="timer">0.0</a>
            <div className="areaBtn">
                <a className="btn">INICIAR</a>
                <a className="btn">ZERAR</a>
            </div>
            </div>
        )
    }
}

export default App;