import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Page = styled.div`
    width: 100%;
    min-height: 234vh;
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
    width: 94%;
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MainText = styled.h1`
    font-size: 4.5em;
    letter-spacing: -0.015em;
    color: #C74350;
`;

const ContButtons = styled.div`
    width: 39%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MainPage = styled.div`
    width: 100%;
    min-height: 180vh;
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
    height: 35em;
    background-image: url('https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/c6/fd/f6/c6fdf6e3-0e4d-c99b-e8c2-e52900fe9a11/1182643498-BR-AMP_SF.lsr/1200x630.jpg');
    background-size: cover;
`;

const ContainerFilms = styled.div`
    width: 100%;
    height: 90vh;
    
`;

const TextFilms = styled.h2`
    font-size: 3em;
    letter-spacing: -0.015em;
    color: #364859;
    width: 25%;
`;

const ContainerCategory = styled.div`
    width: 30vw;
    height: 67vh;
`;

const Score = styled.div`
    color: #FFFFFF;
    font-size: 2.25em;
    background: #75A9A4;
    width: 5vw;
    height: 9.4vh;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: absolute;
    top: 23.6em;
    left: 9.46em;
`;

const ScoreTwo = styled.div`
    color: #FFFFFF;
    font-size: 2.25em;
    background: #C74350;
    width: 5vw;
    height: 9.4vh;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: absolute;
    top: 23.6em;
    left: 21.4em;
`;

const EmptyContainer = styled.span`
    width: 30vw;
    height: 67vh;
    background: #777777;
`;

const ContainerItems = styled.div`
    width: 100%;
    height: 69vh;
    display: flex;
    justify-content: space-around;
`;

const ContPhoto = styled.div`
    width: 28vw;
    height: 66vh;
    background: #75A9A4;
`;

const Photo = styled.div`
    background-image: url('https://s3-alpha-sig.figma.com/img/3203/a0b8/18c1ab8beddbc96e7fe84f1b50d7426e?Expires=1591574400&Signature=K3b8azWXBcHleJHlpZtWWgEGne8v1pvba0KKsTE3ucQngU23YD3NMtQqTOVNwg5pxNkVQ63FePv1DDL8fYgA7VkJSb5nKU3wOM15EosGG6Ioi8wD3hCzif33ID724-IvtumYTL5ecTrA~pDA4lVEZrBTnxAeQlMQXj-0zSThpF33rLcVs0my6D9uBGjJu19x4vnzqfxMRoBcWf34P3bl18GA2vMWl4YdpAxG-iZYp0D9RMRwtnIFHGaGy3PnEno1vWPzGj3Ra3hn-JZpsL~Pr~tNqvAjhtyNtrTt6ky8AnEWisTXF3VAqeE8qH3y3x7B2J32PZAcJPlpi5dq~~a7dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    background-size: cover;
    background-position: 50% 75%;
    width: 28vw;
    height: 61vh;
`;

const PhotoTwo = styled.div`
    background-image: url('https://s3-alpha-sig.figma.com/img/97d8/7bb5/27e5ca380ae489f3c954bde1bc007e8c?Expires=1591574400&Signature=Z2UUqan0~Eg8g8xMhmsTHxdiGtXH1QlFWymtXaO2~X5SoAIa0P0JHHkkKlJieDLFiKgF536IqSthlX1OsfQ6y9ucWE1Gu1X8hgoAS3PYfTU5SAn9vYessvIqp26Rn56llmduD~NTgQBYMinLBEUA-29hGiWeI94fc4yOptMs-PtddbHtTsmZIO61rvSST~9E0BQ3lNLdpCcvIxBe25noDFFmOYRwgc4Zw2pmCFietT6E5gl9V1CwDhOVdM2U4Mcict-pduag89eRlD6AkR6gzAlLcGnQ8kBKf63Sf2U4so-9vLuShYcyttWYhSioIqVCWgX2sN-2Ef34P1yvFHx-og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    background-size: cover;
    background-position: 50% 64%;
    width: 28vw;
    height: 61vh;
`;

const TextPhoto = styled.p`
    font-size: 1.125em;
    line-height: 0.1em;
    letter-spacing: -0.015em;
    color: #FFFFFF;
`;

const TitlePhoto = styled.h2`
    font-size: 2em;
    letter-spacing: -0.015em;
    color: #364859;
    text-align: left;
`;

const TextCategory= styled.p`
    font-size: 1.4em;
    letter-spacing: -0.015em;
    color: #94A2AC;
    text-align: left;
    width: 25vw;
`;

export default class Main extends React.Component {
    render () {
        return (
            <Page>
                <Header>
                    <ContainerMn>
                        <MainText>CineFlix</MainText>
                        <ContButtons>
                            <Button color="#364859" width="7.2em" height="1.4em">categorias</Button>
                            <Button background="#C74350" width="7.2em" height="1.4em">adicionar filme</Button>
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
                        <ContainerItems>
                            <ContainerCategory>
                                <Score>5.0</Score>
                                <ContPhoto>
                                    <Photo></Photo>
                                    <TextPhoto>quero ver</TextPhoto>
                                </ContPhoto>
                                <TitlePhoto>Capitão Fantástico</TitlePhoto>
                                <TextCategory>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</TextCategory>
                            </ContainerCategory>
                            <ContainerCategory>
                                <ScoreTwo>2.0</ScoreTwo>
                                <ContPhoto>
                                    <PhotoTwo></PhotoTwo>
                                    <TextPhoto>quero ver</TextPhoto>
                                </ContPhoto>
                                <TitlePhoto>Corra!</TitlePhoto>
                                <TextCategory>Um jovem fotógrafo descobre um segredo sombrio quando conhece os pais aparentemente amigáveis da sua namorada.</TextCategory>
                            </ContainerCategory>
                            <EmptyContainer></EmptyContainer>
                        </ContainerItems>
                    </ContainerFilms>
                </MainPage>
            </Page>
        );
    }
}