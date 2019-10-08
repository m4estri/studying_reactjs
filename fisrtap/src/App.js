import React, {Component} from 'react';
import './style.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: 0
        };
        this.timer = null;
        this.iniciar = this.iniciar.bind(this);
        this.zerar = this.zerar.bind(this);
    }

    iniciar(){

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }else {
            this.timer = setInterval(() =>{
                let state = this.state;
                state.number += 0.1;
                this.setState(state);
            },100);    
        }
 
    }

    zerar(){

    }

    render(){
        return(
            <div className="container">
               <img src={require('./assets/cronometro.png')} className="img"/>
               <a className="timer">{this.state.number.toFixed(1)}</a>
            <div className="areaBtn">
                <a className="btn" onClick={this.iniciar}>INICIAR</a>
                <a className="btn" onClick={this.zerar}>ZERAR</a>
            </div>
            </div>
        )
    }
}

export default App;