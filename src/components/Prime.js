import styled from 'styled-components';
import ArticleCard from './ArticleCard.js';

const Container = styled.div`
    background: #4C6953;
    padding-top: 8em;
`

const Title = styled.div`
    width: 95%;
    height: auto;
    border: 15px 0px 0px 0px;
    font-family: 'Cinzel Decorative', serif;
    font-size: 115px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    color: #F6E4E1;
    border: 15px solid #4C6953;
    padding-bottom: 0.em;
`;

const Center = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    padding-top: 2em;
    margin-left: 30%;
    padding-bottom: 10em;
`;

const Prime = ({articles}) => {
    const lastCard = articles.length - 1;

    return(
        <>
            <Container>
            <Title>PRIME</Title>
            <Center><ArticleCard props={articles[lastCard]}/></Center>
            </Container>
        </>
    );
};

export default Prime;