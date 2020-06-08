import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import CFantast from '../assets/capitãofantastico.png';
import Run from '../assets/corra.jpeg';
import Clacket from '../assets/Clacket.png';
import StarWhi from '../assets/Star 1.png';
import StarYel from '../assets/Star 2.png';

const Page = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 425px) {
        height: 226vh;
    }

    @media(max-width: 320px) {
        height: 205vh;
    }
`;

const Header = styled.header`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media(max-width: 768px) {
        height: 14vh;
    }
`;

const ContainerMn = styled.div`
    width: 94%;
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 768px) {
        width: 84%;
        height: 10vh;
    }

    @media(max-width: 425px) {
        width: 80%;
    }
`;

const MainText = styled.h1`
    font-size: 4.5em;
    letter-spacing: -0.015em;
    color: #C74350;

    @media(max-width: 768px) {
        font-size: 3.7em;
    }

    @media(max-width: 425px) {
        font-size: 2.3em;
    }
`;

const ContButtons = styled.div`
    width: 39%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px) {
        width: 30%;
        justify-content: center;
    }

    @media(max-width: 425px) {
        width: 38%;
    }
`;

const ButtonCat = styled.button`
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

    @media(max-width: 768px) {
        display: none;
    }
`;

const ButtonAddFi = styled.button`
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

    @media(max-width: 768px) {
        font-size: 1.7em;
    }

    @media(max-width: 425px) {
        font-size: 1.2em;
        display: none;
    }
`;

const ButtonAddFi2 = styled.button`
    width: 5.1em;
    height: 1.4em;
    display: none;
    border-radius: 0.1em;
    border: 0;
    font-size: 1.2em;
    letter-spacing: -0.015em;
    line-height: 1.5em;
    color: #364859;
    background: #FFFFFF;

    &:hover {
        background: #C74350;
        color: #FFFFFF;
    }

    @media(max-width: 425px) {
        display: block;
    }
`;

const MainPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 425px) {
        height: 209vh;
    }

    @media(max-width: 320px) {
        height: 188vh;
    }
`;

const ContainerPhoto = styled.div`
    width: 100%;
    height: 80vh;

    @media(max-width: 768px) {
        height: 55.7vh;
    }

    @media(max-width: 425px) {
        height: 33vh;
        display: flex;
        justify-content: center;
    }

    @media(max-width: 375px) {
        height: 20vh;
    }
`;

const MainPhoto = styled.div`
    width: 100%;
    height: 35em;
    background-image: url('https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/c6/fd/f6/c6fdf6e3-0e4d-c99b-e8c2-e52900fe9a11/1182643498-BR-AMP_SF.lsr/1200x630.jpg');
    background-size: cover;

    @media(max-width: 768px) {
        height: 27em;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    @media(max-width: 425px) {
        width: 80%;
        height: 12em;
        border-radius: 0.2em;
    }

    @media(max-width: 375px) {
        height: 11em;
    }
`;

const ContainerFilms = styled.div`
    width: 100%;
    height: 135vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 768px) {
        height: 100vh;
    }

    @media(max-width: 425px) {
        height: 174vh;
    }

    @media(max-width: 375px) {
        height: 180vh;
    }

    @media(max-width: 320px) {
        height: 160vh;
    }
`;

const ContainerFilmsTwo = styled.div`
    width: 100%;
    height: 135vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 768px) {
        height: 100vh;
    }

    @media(max-width: 425px) {
        height: 174vh;
    }

    @media(max-width: 375px) {
        height: 180vh;
    }

    @media(max-width: 320px) {
        height: 160vh;
    }
`;

const ContainerFilmsTree = styled.div`
    width: 100%;
    height: 135vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 768px) {
        height: 100vh;
    }

    @media(max-width: 425px) {
        height: 174vh;
    }

    @media(max-width: 375px) {
        height: 180vh;
    }

    @media(max-width: 320px) {
        height: 160vh;
    }
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

    @media(max-width: 768px) {
        font-size: 2.3em;
        width: 32%;
        height: 18%;
    }

    @media(max-width: 425px) {
        font-size: 1.8em;
        width: 58%;
        height: 6%;
    }

    @media(max-width: 375px) {
        height: 3%;
    }

    @media(max-width: 320px) {
        height: 6%;
        font-size: 1.5em;
    }
`;

const TitleFilmsTwo = styled.h2`
    font-size: 2.7em;
    letter-spacing: -0.015em;
    color: #364859;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 12%;

    @media(max-width: 768px) {
        font-size: 2.3em;
        width: 32%;
        height: 18%;
    }

    @media(max-width: 425px) {
        font-size: 1.8em;
        width: 58%;
        height: 6%;
    }

    @media(max-width: 375px) {
        height: 3%;
    }

    @media(max-width: 320px) {
        height: 6%;
        font-size: 1.5em;
    }
`;

const TitleFilmsTree = styled.h2`
    font-size: 2.7em;
    letter-spacing: -0.015em;
    color: #364859;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 12%;

    @media(max-width: 768px) {
        font-size: 2.3em;
        width: 32%;
        height: 18%;
    }

    @media(max-width: 425px) {
        font-size: 1.8em;
        width: 58%;
        height: 6%;
    }

    @media(max-width: 375px) {
        height: 3%;
    }

    @media(max-width: 320px) {
        height: 6%;
        font-size: 1.5em;
    }
`;

const ContainerCategory = styled.div`
    width: 28vw;
    height: 98vh;

    @media(max-width: 768px) {
        height: 72vh;
    }

    @media(max-width: 425px) {
        width: 80vw;
        height: 74vh;
    }
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

    @media(max-width: 768px) {
        font-size: 1.8em;
        width: 7vw;
        height: 7.4vh;
        top: 22em;
        left: 7.2em;
    }

    @media(max-width: 425px) {
        font-size: 1.5em;
        width: 11vw;
        height: 8.4vh;
        top: 15.8em;
        left: 14.5em;
    }

    @media(max-width: 375px) {
        width: 12vw;
        top: 14.5em;
        left: 12.8em;
    }

    @media(max-width: 320px) {
        width: 14vw;
        top: 13em;
        left: 10.7em;
    }
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

    @media(max-width: 768px) {
        font-size: 1.8em;
        width: 7vw;
        height: 7.4vh;
        top: 22em;
        left: 16em;
    }

    @media(max-width: 425px) {
        font-size: 1.5em;
        width: 11vw;
        height: 8.4vh;
        top: 35.2em;
        left: 14.5em;
    }

    @media(max-width: 375px) {
        width: 12vw;
        top: 33.9em;
        left: 12.8em;
    }

    @media(max-width: 320px) {
        width: 14vw;
        top: 31.1em;
        left: 10.7em;
    }
`;

const ContainerItems = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;

    @media(max-width: 425px) {
        height: 160vh;
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 320px) {
        height: 150vh;
    }
`;

const ContPhoto = styled.div`
    width: 28vw;
    height: 66vh;
    background: #75A9A4;
    border-radius: 0.3125em;

    @media(max-width: 768px) {
        height: 34vh;
    }

    @media(max-width: 425px) {
        width: 80vw;
        height: 44vh;
    }
`;

const Photo = styled.div`
    background-image: url(${CFantast});
    background-size: cover;
    background-position: 50% 75%;
    width: 28vw;
    height: 61vh;
    border-radius: 0.3125em 0.3125em 0 0;

    @media(max-width: 768px) {
        height: 30vh;
    }

    @media(max-width: 425px) {
        width: 80vw;
        height: 39.4vh;
        background-position: 50% 40%;
    }
`;

const PhotoTwo = styled.div`
    background-image: url(${Run});
    background-size: cover;
    background-position: 50% 64%;
    width: 28vw;
    height: 61vh;
    border-radius: 0.3125em 0.3125em 0 0;

    @media(max-width: 768px) {
        height: 30vh;
    }

    @media(max-width: 425px) {
        width: 80vw;
        height: 39.4vh;
        background-position: 50% 50%;
    }
`;

const TextPhoto = styled.p`
    font-size: 1.125em;
    line-height: 1.7em;
    letter-spacing: -0.015em;
    color: #FFFFFF;
    width: 27vw;
    display: flex;
    justify-content: center;

    @media(max-width: 768px) {
        font-size: 1em;
    }

    @media(max-width: 425px) {
        width: 80vw;
    }
`;

const TitlePhoto = styled.h2`
    font-size: 1.7em;
    letter-spacing: -0.015em;
    color: #364859;
    text-align: left;
    height: 2.4em;
    display: flex;
    align-items: center;

    @media(max-width: 768px) {
        font-size: 1.2em;
    }

    @media(max-width: 425px) {
        font-size: 1.4em;
        height: 2.8em;
    }
`;

const TextCategory = styled.p`
    font-size: 1.1em;
    letter-spacing: -0.015em;
    color: #94A2AC;
    text-align: left;
    width: 24vw;

    @media(max-width: 768px) {
        width: 28vw;
    }

    @media(max-width: 425px) {
        width: 80vw;
        font-size: 1em;
    }

    @media(max-width: 375px) {
        font-size: 0.85em;
    }

    @media(max-width: 320px) {
        font-size: 0.73em;
    }
`;

const TextCategoryTwo = styled.p`
    font-size: 1.1em;
    letter-spacing: -0.015em;
    color: #94A2AC;
    text-align: left;
    width: 18vw;

    @media(max-width: 768px) {
        width: 28vw;
    }

    @media(max-width: 425px) {
        width: 80vw;
        font-size: 0.98em;
    }

    @media(max-width: 375px) {
        font-size: 0.87em;
    }

    @media(max-width: 320px) {
        font-size: 0.75em;
    }
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
    justify-content: center;
    width: 60%;
    min-height: 70vh;
    background: #FFFFFF;
    border-radius: 0.1em;

    @media(max-width: 768px) {
        width: 86%;
        justify-content: center;
    }

    @media(max-width: 425px) {
        min-height: 84vh;
    }
`;

const ContainerClacket = styled.div`
    width: 44%;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media(max-width: 768px) {
        align-items: center;
    }

    @media(max-width: 425px) {
        display: none;
    }
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

    @media(max-width: 425px) {
        width: 92%;
        height: 76vh;
    }
`;

const BoxTextButton = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media(max-width: 768px) {
        width: 93%;
    }

    @media(max-width: 425px) {
        width: 100%;
    }
`;

const TextAddFilm = styled.p`
    color: #364859;
    letter-spacing: -0.015em;
    font-weight: 500;
    font-size: 1.6em;

    @media(max-width: 768px) {
        font-size: 1.3em;
    }
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

    @media(max-width: 768px) {
        width: 3vw;
        height: 3vh;
    }

    @media(max-width: 425px) {
        width: 5vw;
        height: 4vh;
        font-size: 1.6em;
    }
`;

const InpBut = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @media(max-width: 768px) {
        width: 93%;
        height: 10.8vh;
        flex-direction: column;
    }

    @media(max-width: 425px) {
        width: 100%;
        height: 14.2vh;
    }
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

    @media(max-width: 768px) {
        width: 15vw;
        height: 3.8vh;
    }

    @media(max-width: 425px) {
        width: 79vw;
        height: 5vh;
        font-size: 0.9em;
    }
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

    @media(max-width: 425px) {
        height: 7vh;
    }
`;

const StarsCont = styled.div`
    width: 56%;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    @media(max-width: 768px) {
        width: 70%;
    }
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

    @media(max-width: 768px) {
        width: 93%;
    }

    @media(max-width: 425px) {
        width: 100%;
        height: 12vh;
    }
`;

const Boxbut = styled.div`
    width: 17vw;
    height: 6vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media(max-width: 768px) {
        width: 23vw;
    }

    @media(max-width: 425px) {
        width: 80vw;
        height: 11vh;
        flex-direction: column;
    }

    @media(max-width: 320px) {
        width: 79vw;
    }
`;

const LastBut = styled.button`
    width: 8.4em;
    height: 2.7em;
    border-radius: 0.2em;
    border: 0;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: -0.015em;
    color: #364859;
    background: #FFFFFF;

    &:hover {
        background: #75A9A4;
        color: #FFFFFF;
    }

    @media(max-width: 768px) {
        width: 6.7em;
        height: 2.3em;
    }

    @media(max-width: 425px) {
        width: 26.26em;
    }

    @media(max-width: 375px) {
        width: 23.2em;
    }

    @media(max-width: 320px) {
        width: 19.7em;
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
                    <ClackPhoto src={Clacket}/>
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
                            <ButtonCat onClick={this.handleButtonClick}>
                                categorias
                                {this.state.menOpen && (
                                    <List>
                                        <ListItem>Quero ver</ListItem>
                                        <ListItem>Já vistos</ListItem>
                                    </List>
                                )}
                            </ButtonCat>
                            <ButtonAddFi onClick={this.openModal}>adicionar filme</ButtonAddFi>
                            <ButtonAddFi2 onClick={this.openModal}>add filme</ButtonAddFi2>
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
                            <ContainerCategory></ContainerCategory>
                        </ContainerItems>
                    </ContainerFilms>
                    <ContainerFilmsTwo>
                        <TitleFilmsTwo>Quero ver:</TitleFilmsTwo>
                        <ContainerItems>
                            <ContainerCategory></ContainerCategory>
                            <ContainerCategory></ContainerCategory>
                            <ContainerCategory></ContainerCategory>
                        </ContainerItems>
                    </ContainerFilmsTwo>
                    <ContainerFilmsTree>
                        <TitleFilmsTree>Já vistos:</TitleFilmsTree>
                        <ContainerItems>
                            <ContainerCategory></ContainerCategory>
                            <ContainerCategory></ContainerCategory>
                            <ContainerCategory></ContainerCategory>
                        </ContainerItems>
                    </ContainerFilmsTree>
                </MainPage>
                {this.state.modOpen ? this.renderModal() : null}
            </Page>
        );
    }
}