import React from 'react';


const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social fb={props.facebook} linkedin={props.linkedin} youtube={props.youtube}/>
            <hr/>
        </div>
    )
}

const Sobre = (props) => {
    return(
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a href={props.linkedin}>LinkedIn </a>
            <a href={props.youtube}>Youtube </a>
        </div>
    )
}

function App() {
    return(
        <div>
            <h1>Conheça nossa equipe: </h1>
            <Equipe nome="Lucas" cargo="Programador" idade="29" facebook="https://www.facebook.com" linkedin="https://www.linkedin.com" youtube="https://www.youtube.com"/>
            <Equipe nome="Bruno" cargo="Front-end" idade="24" facebook="https://www.facebook.com" linkedin="https://www.linkedin.com" youtube="https://www.youtube.com"/>
            <Equipe nome="Amanda" cargo="Designer" idade="21" facebook="https://www.facebook.com" linkedin="https://www.linkedin.com" youtube="https://www.youtube.com"/>
        </div>
    )
}

export default App;