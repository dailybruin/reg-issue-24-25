import styled from 'styled-components';
import ArticleCard from './ArticleCard.js';
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    background: transparent;
    padding-top: 8em;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    row-gap: 3%;
    column-gap: -2em;
    margin-bottom: 4em;
    margin-left: 6%;
    ${mediaQueries.mobile} {
        margin-left: 0em;
    }
`;

const Title = styled.div`
    width: 95%;
    height: auto;
    font-family: 'Cinzel Decorative', serif;
    font-size:  115px;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
    color: #F6E4E1;
    margin-bottom: 0.4em;
    -webkit-text-stroke: 5px #4C6953;
`;


const Center = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin-top: 6em;
    margin-left: 30%;
    ${mediaQueries.mobile} {
        margin-top: 18em;
    }
`;

const News = ({articles}) => {
    const lastCard = articles.length - 1;

    return(
        <>
            <Container>
            <Title>NEWS</Title>
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

export default News;