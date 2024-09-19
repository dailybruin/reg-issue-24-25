import styled from 'styled-components';
import ArticleCard from './ArticleCard.js';

const Container = styled.div`
    background: transparent;
    padding-top: 8em;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    row-gap: 3%;
    column-gap: -2em;
    padding: 4em;
    margin-left: 8%;
`;

const StyledSvg = styled.svg` /*https://stackoverflow.com/questions/4919076/outline-effect-to-text*/
    width: 100%;
    height: 100%;
    font-family: 'Cinzel Decorative', serif;
    font-size:  115px;
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
`;



const Quad = ({articles}) => {

    return(
        <>
            <Container>
            <StyledSvg xmlns="http://www.w3.org/2000/svg">
                    <StyledText
                        x="50%"
                        y="50%"
                        dominantBaseline="central"
                        textAnchor="middle"
                    >
                        THE QUAD
                    </StyledText>
                </StyledSvg> 
            <Grid>
            {articles.map((article, index) => (
                <ArticleCard props={article} />
            ))}
            </Grid>
            </Container>
        </>
    );
};

export default Quad;