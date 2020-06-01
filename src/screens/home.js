import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import StarWhi from '../assets/Star 1.png';
import StarYel from '../assets/Star 2.png';

const Page = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const Button = styled.button`
    width: 7.2em;
    height: 1.4em;
    border-radius: 0.1em;
    border: 0;
    font-size: 2em;
    letter-spacing: -0.015em;
    line-height: 1.5em;
    color: #364859;
    background: #FFFFFF;

    &:hover {
        background: #C74350;
        color: #FFFFFF;
    }
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
    height: 135vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleFilms = styled.h2`
    font-size: 2.7em;
    letter-spacing: -0.015em;
    color: #364859;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 12%;
`;

const ContainerCategory = styled.div`
    width: 28vw;
    height: 98vh;
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
    top: 22.5em;
    left: 10em;
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
    top: 22.5em;
    left: 21.6em;
`;

const EmptyContainer = styled.span`
    width: 30vw;
    height: 98vh;
`;

const ContainerItems = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
`;

const ContPhoto = styled.div`
    width: 28vw;
    height: 66vh;
    background: #75A9A4;
    border-radius: 0.3125em;
`;

const Photo = styled.div`
    background-image: url('https://s3-alpha-sig.figma.com/img/3203/a0b8/18c1ab8beddbc96e7fe84f1b50d7426e?Expires=1591574400&Signature=K3b8azWXBcHleJHlpZtWWgEGne8v1pvba0KKsTE3ucQngU23YD3NMtQqTOVNwg5pxNkVQ63FePv1DDL8fYgA7VkJSb5nKU3wOM15EosGG6Ioi8wD3hCzif33ID724-IvtumYTL5ecTrA~pDA4lVEZrBTnxAeQlMQXj-0zSThpF33rLcVs0my6D9uBGjJu19x4vnzqfxMRoBcWf34P3bl18GA2vMWl4YdpAxG-iZYp0D9RMRwtnIFHGaGy3PnEno1vWPzGj3Ra3hn-JZpsL~Pr~tNqvAjhtyNtrTt6ky8AnEWisTXF3VAqeE8qH3y3x7B2J32PZAcJPlpi5dq~~a7dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    background-size: cover;
    background-position: 50% 75%;
    width: 28vw;
    height: 61vh;
    border-radius: 0.3125em 0.3125em 0 0;
`;

const PhotoTwo = styled.div`
    background-image: url('https://s3-alpha-sig.figma.com/img/97d8/7bb5/27e5ca380ae489f3c954bde1bc007e8c?Expires=1591574400&Signature=Z2UUqan0~Eg8g8xMhmsTHxdiGtXH1QlFWymtXaO2~X5SoAIa0P0JHHkkKlJieDLFiKgF536IqSthlX1OsfQ6y9ucWE1Gu1X8hgoAS3PYfTU5SAn9vYessvIqp26Rn56llmduD~NTgQBYMinLBEUA-29hGiWeI94fc4yOptMs-PtddbHtTsmZIO61rvSST~9E0BQ3lNLdpCcvIxBe25noDFFmOYRwgc4Zw2pmCFietT6E5gl9V1CwDhOVdM2U4Mcict-pduag89eRlD6AkR6gzAlLcGnQ8kBKf63Sf2U4so-9vLuShYcyttWYhSioIqVCWgX2sN-2Ef34P1yvFHx-og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    background-size: cover;
    background-position: 50% 64%;
    width: 28vw;
    height: 61vh;
    border-radius: 0.3125em 0.3125em 0 0;
`;

const TextPhoto = styled.p`
    font-size: 1.125em;
    line-height: 1.7em;
    letter-spacing: -0.015em;
    color: #FFFFFF;
    width: 27vw;
    display: flex;
    justify-content: center;
`;

const TitlePhoto = styled.h2`
    font-size: 1.7em;
    letter-spacing: -0.015em;
    color: #364859;
    text-align: left;
    height: 2.4em;
    display: flex;
    align-items: center;
`;

const TextCategory = styled.p`
    font-size: 1.1em;
    letter-spacing: -0.015em;
    color: #94A2AC;
    text-align: left;
    width: 24vw;
`;

const TextCategoryTwo = styled.p`
    font-size: 1.1em;
    letter-spacing: -0.015em;
    color: #94A2AC;
    text-align: left;
    width: 18vw;
`;

const List = styled.ul`
    position: absolute;
    top: 3.4em;
    right: 8.7em;
    background: #FFFFFF;
    list-style: none;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.1em;
    width: 7.2em;
    height: 3.08em;
    display: inline-block;
`;

const ListItem = styled.li`
    font-size: 0.7em;
    color: #364859;
    border-radius: 0.1em;

    &:hover {
        background: #ECECEC;
        font-weight: 900;
    }
`;

const Overlay = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    background: #00000060;
    z-index: 2;
`;

const ContainerModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    min-height: 70vh;
    background: #FFFFFF;
    border-radius: 0.1em;
`;

const ContainerClacket = styled.div`
    width: 48%;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const ClackPhoto = styled.img`
    width: 80%;
`;

const ContAddFilms = styled.div`
    width: 48%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BoxTextButton = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const TextAddFilm = styled.p`
    color: #364859;
    letter-spacing: -0.015em;
    font-weight: 500;
    font-size: 1.6em;
`;

const ButClose = styled.button`
    width: 2vw;
    height: 4vh;
    letter-spacing: -0.015em;
    color: rgba(54, 72, 89, 0.25);
    background: #FFFFFF;
    font-size: 1.9em;
    font-weight: 600;
    border-radius: 0.1em;
    border: 0;
`;

const InpBut = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

const ButAddimg = styled.button`
    width: 10.7vw;
    height: 4.7vh;
    background: #75A9A4;
    color: #FFFFFF;
    border: 0;
    border-radius: 0.2em;
    font-size: 0.75em;
    font-weight: 600;
    letter-spacing: -0.015em;
`;

const TextNote = styled.p`
    color: #364859;
    letter-spacing: -0.015em;
    font-size: 0.9em;
`;

const Boxstars = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

const StarsCont = styled.div`
    width: 56%;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

const PhotoStars = styled.img`
    width: 15%;
    cursor: pointer;
`;

const FinButs = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

const Boxbut = styled.div`
    width: 17vw;
    height: 6vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const LastBut = styled.button`
    width: 8.4em;
    height: 2.7em;
    border-radius: 0.2em;
    border: 0;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.5em;
    color: #364859;
    background: #FFFFFF;

    &:hover {
        background: #75A9A4;
        color: #FFFFFF;
    }
`;

export default class Main extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                menOpen: false,
                modOpen: false, 
            }
        }

        openModal = (event) => {
            event.preventDefault()
            this.setState({
                modOpen: true,
            })
        }

        handleButtonClick = () => {
            this.setState(state => {
                return {
                    menOpen: !state.menOpen,
                };
            });
        }

        handleClickOutside = event => {
            if (this.ContButtons.current && !this.ContButtons.current.contains(event.target)) {
                this.setState({
                    menOpen: false,
                });
            };
        };

        ContButtons = React.createRef();
            state = {
                menOpen: false,
            };

        componentDidMount() {
            document.addEventListener("mousedown", this.handleClickOutside);
        }
        componentWillUnmount() {
            document.removeEventListener("mousedown", this.handleClickOutside);
        }
        
    renderModal = () => (
        <Overlay>
            <ContainerModal>
                <ContainerClacket>
                    <ClackPhoto src="https://lh3.googleusercontent.com/proxy/e2uz6fEr3NUXkPKDR_gTRuPSgIqwf4rEU0Sp5f_QAowP-IoHuACa-h3kmu2rENbwf7JnviNoi6bEwVCpOgwHC02u-aaeB7EJUFpBWDmBRwdBxgTo5g1n0GxqKCkgI31XOdcwNW3e57vvAku-JiJ23FbzMyZHLEDB-3J1aqB-rr639Q"/>
                </ContainerClacket>
                <ContAddFilms>
                    <BoxTextButton>
                        <TextAddFilm>Adicionar novo filme:</TextAddFilm>
                        <ButClose onClick={() => this.setState({modOpen: false})}>X</ButClose>
                    </BoxTextButton>
                    <Input type="text" labelText="Nome:" width="23rem"/>
                    <Input type="text" labelText="Descrição:" width="23rem"/>
                    <Input type="text" labelText="Status:" width="23rem"/>
                    <InpBut>
                        <Input type="text" labelText="Imagem de exibição:" width="14rem"/>
                        <ButAddimg>adicionar imagem</ButAddimg>
                    </InpBut>
                    <TextNote>Nota:</TextNote>
                    <Boxstars>
                        <StarsCont>
                            <PhotoStars src={StarWhi || StarYel}/>
                            <PhotoStars src={StarWhi || StarYel}/>
                            <PhotoStars src={StarWhi || StarYel}/>
                            <PhotoStars src={StarWhi || StarYel}/>
                            <PhotoStars src={StarWhi || StarYel}/>
                        </StarsCont>
                    </Boxstars>
                    <FinButs>
                        <Boxbut>
                            <LastBut>cancelar</LastBut>
                            <LastBut>feito</LastBut>
                        </Boxbut>
                    </FinButs>
                </ContAddFilms>
            </ContainerModal>
        </Overlay>
    )    

    render () {
        return (
            <Page>
                <Header>
                    <ContainerMn>
                        <MainText>ToDoFlix</MainText>
                        <ContButtons ref={this.ContButtons}>
                            <Button onClick={this.handleButtonClick} color="#364859" width="7.2em" height="1.4em">
                                categorias
                                {this.state.menOpen && (
                                    <List>
                                        <ListItem>Quero ver</ListItem>
                                        <ListItem>Já vistos</ListItem>
                                    </List>
                                )}
                            </Button>
                            <Button onClick={this.openModal} color="#364859" width="7.2em" height="1.4em">adicionar filme</Button>
                        </ContButtons>
                    </ContainerMn>
                </Header>
                <MainPage>
                    <ContainerPhoto>
                        <MainPhoto>
                        </MainPhoto>
                    </ContainerPhoto>
                    <ContainerFilms>
                        <TitleFilms>Minha lista:</TitleFilms>
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
                                <TextCategoryTwo>Um jovem fotógrafo descobre um segredo sombrio quando conhece os pais aparentemente amigáveis da sua namorada.</TextCategoryTwo>
                            </ContainerCategory>
                            <EmptyContainer></EmptyContainer>
                        </ContainerItems>
                    </ContainerFilms>
                </MainPage>
                {this.state.modOpen ? this.renderModal() : null}
            </Page>
        );
    }
}