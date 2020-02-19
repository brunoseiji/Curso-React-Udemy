import React, { Component } from 'react';
import { Container, Head, Titulo, BemVindo } from './styles';

class App extends Component {
    render() {
        return(
            <Container>
                <Head>
                    <Titulo>Projeto Styled</Titulo>
                </Head>

                <BemVindo cor="0000FF" tamanho={25}>Bem vindo ao sistema</BemVindo>
            </Container>
        )
    }
}

export default App;