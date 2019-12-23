import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    // Essa função permite ser executado algo depois que a aplicação for montada
    componentDidMount() {

        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);
    }

    // Essa função permite que algo aconteça quando um state é atualizado
    componentDidUpdate() {
        console.log('Atualizou');
    }

    render() {
        return(
            <div>
                <h1>Meu Projeto</h1>
                <h2>{this.state.hora}</h2>
            </div>
        );
    }
}

export default App;