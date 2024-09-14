import styled from 'styled-components';
import ArticleCard from './ArticleCard.js';

const Container = styled.div`
    background: #4C6953;
    padding-top: 8em;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    row-gap: 3%;
    column-gap: -2em;
    margin-bottom: 4em;
    margin-left: 8%;
`;

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
    margin-bottom: 0.4em;
`;

const Center = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin-top: 6em;
    margin-left: 30%;
`;

const Opinion = ({articles}) => {
    const lastCard = articles.length - 1;

    return(
        <>
            <Container>
            <Title>OPINION</Title>
            <Grid>
            {articles.slice(0, -1).map((article, index) => (
                <ArticleCard props={article} />
            ))}
            </Grid>
            <Center><ArticleCard props={articles[lastCard]}/></Center>
            </Container>
        </>
    );
};

export default Opinion;