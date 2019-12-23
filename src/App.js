import React from 'react';

const Bemvindo = (props) => {
    return(
        <div>
            <h2>Bem-vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    )
}

function App() {
    return(
        <div>
            Olá Mundo!
            <Bemvindo nome="Bruno" idade="24" />
            <Bemvindo nome="Paula" idade="21" />
            <h1>Curso React</h1>
        </div>
    )
}

export default App;