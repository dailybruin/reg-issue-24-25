import styled from 'styled-components';
import ArticleCard from './ArticleCard.js';
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    background: transparent;
    padding-top: 3em;
    padding-bottom: 3em;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    row-gap: 3%;
    column-gap: -2em;
    margin-bottom: 2em;
    margin-left: 6%;
    ${mediaQueries.mobile} {
        margin-left: 0em;
    }
`;

const Center = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin-top: 6em;
    margin-left: 26%;
    ${mediaQueries.mobile} {
        margin-top: ${({ increaseMargin }) => (increaseMargin ? '11em' : '6em')}; /* idk why its diff tbh */
    }
`;

const StyledSvg = styled.svg`
    width: 100%;
    height: 100%;
    font-family: 'Cinzel Decorative', serif;
    font-size: 115px;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 0.4em;
`;

const StyledText = styled.text`
    stroke: #4C6953;
    stroke-width: 20px;
    stroke-linejoin: round;
    fill: #F6E4E1;
    paint-order: stroke;
    ${mediaQueries.mobile} {
        font-size: 45px;
    }
`;

const AnySection = ({ articles, title, increaseMarginTop = false }) => {
    const numArticles = articles.length;
    const isOdd = numArticles % 2 !== 0;
    const lastCard = articles[numArticles - 1]; // Last card, if applicable

    return (
        <Container>
            <StyledSvg xmlns="http://www.w3.org/2000/svg">
                <StyledText
                    x="50%"
                    y="50%"
                    dominantBaseline="central"
                    textAnchor="middle"
                >
                    {title.toUpperCase()} {/* Dynamically sets the title */}
                </StyledText>
            </StyledSvg>
            <Grid>
                {articles.slice(0, isOdd ? -1 : numArticles).map((article, index) => (
                    <ArticleCard key={index} props={article} />
                ))}
            </Grid>
            {/* Only display the last card centered if the number of articles is odd */}
            {isOdd && (
                <Center increaseMargin={increaseMarginTop}>
                    <ArticleCard props={lastCard} />
                </Center>
            )}
        </Container>
    );
};

export default AnySection;
