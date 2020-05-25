import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Page = styled.div`
    width: 100%;
    min-height: 200vh;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const ContainerMn = styled.div`
    width: 90%;
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MainText = styled.h1`
    font-size: 3.2em;
    letter-spacing: 0.02em;
    color: #E70909;
`;

const ContButtons = styled.div`
    width: 30%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`;

const MainPage = styled.div`
    width: 100%;
    min-height: 180vh;
    background: #a0ec09;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContainerPhoto = styled.div`
    width: 100%;
    height: 80vh;
    background: #191a18;
`;

const MainPhoto = styled.div`
    width: 100%;
    height: 80vh;
    background-image: url('https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/c6/fd/f6/c6fdf6e3-0e4d-c99b-e8c2-e52900fe9a11/1182643498-BR-AMP_SF.lsr/1200x630.jpg');
    background-size: cover;
`;

const ContainerFilms = styled.div`
    width: 100%;
    height: 90vh;
    background: #0b50da;
`;

const TextFilms = styled.h2`
    font-size: 2.4em;
    color: #40413e;
`;

export default class Main extends React.Component {
    render () {
        return (
            <Page>
                <Header>
                    <ContainerMn>
                        <MainText>CineFlix</MainText>
                        <ContButtons>
                            <Button color="#40413e" width="9em">categorias</Button>
                            <Button background="#E70909" width="9em" height="2em">adicionar filme</Button>
                        </ContButtons>
                    </ContainerMn>
                </Header>
                <MainPage>
                    <ContainerPhoto>
                        <MainPhoto>
                        </MainPhoto>
                    </ContainerPhoto>
                    <ContainerFilms>
                        <TextFilms>Minha lista:</TextFilms>
                    </ContainerFilms>
                </MainPage>
            </Page>
        );
    }
}