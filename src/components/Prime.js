import styled from 'styled-components';
import ArticleCard from './ArticleCard.js';
import { mediaQueries } from '../shared/config';


const Container = styled.div`
    background: transparent;
    padding-top: 8em;
    ${mediaQueries.mobile} {
        padding-top: 13em;
    }
`

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
            <StyledSvg xmlns="http://www.w3.org/2000/svg">
                    <StyledText
                        x="50%"
                        y="50%"
                        dominantBaseline="central"
                        textAnchor="middle"
                    >
                       PRIME
                    </StyledText>
                </StyledSvg> 
            <Center><ArticleCard props={articles[lastCard]}/></Center>
            </Container>
        </>
    );
};

export default Prime;