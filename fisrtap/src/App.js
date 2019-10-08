import React, {Component} from 'react';
import './style.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: 0,
            button: 'INICIAR'
        };
        this.timer = null;
        this.iniciar = this.iniciar.bind(this);
        this.zerar = this.zerar.bind(this);
    }

    iniciar(){
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.button = 'INICIAR'
        }else {
            this.timer = setInterval(() =>{
                let state = this.state;
                state.number += 0.1;
                this.setState(state);
            },100);    
            state.button = 'PAUSAR'
        }
        this.setState(state);
    }

    zerar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        } 

        let state = this.state;
        state.number = 0;
        state.button = 'INICIAR';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
               <img src={require('./assets/cronometro.png')} className="img"/>
               <a className="timer">{this.state.number.toFixed(1)}</a>
            <div className="areaBtn">
                <a className="btn" onClick={this.iniciar}>{this.state.button}</a>
                <a className="btn" onClick={this.zerar}>ZERAR</a>
            </div>
            </div>
        )
    }
}

export default App;