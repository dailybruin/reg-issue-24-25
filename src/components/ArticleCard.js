import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;

    width: 100%;
    height: 20vh;
    border: 6px solid #4C6953;
    border-radius: 2vw;
    position: relative;

    background-color: #D3D7C6;
    transition: color 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #758A76;
        color: #F6E4E1;
    }

    ${mediaQueries.mobile} {
        width: 100%;
        height: 35vh;
        border: 4px solid #4C6953;
        border-radius: 2vw;

        padding-top: 1vh; // Adjust padding to move content up
    }
`;

const Title = styled.div`
    background-color: transparent;
    width: 40%;
    height: fit-content;
    margin-left: 55%;
    margin-top: 1vh;

    p {
        font-family: "Josefin Sans", sans-serif;
        font-weight: bolder;
        font-style: normal;
        font-size: 1.75vh;
        text-align: left;
        line-height: normal;
        color: inherit;
        transition: color 0.3s ease;
        text-transform: uppercase;
    }

    ${mediaQueries.mobile} {
        width: 90%;
        height: fit-content;
        margin-left: 5%;
        margin-top: 80%;
    }
`

const ByLine = styled.div`
    background-color: transparent;
    width: 90%;
    height: fit-content;
    padding-bottom: 0.5vh;
    margin-left: 55%;
    margin-top: -2vh;

    p {
        font-family: "PT Sans", sans-serif;
        font-weight: lighter;
        font-size: 1.5vh;
        font-style: normal;
        text-align: left;
        line-height: normal;
        color: inherit;
        transition: color 0.3s ease;
    }

    ${mediaQueries.mobile} {
        width: 90%;
        height: fit-content;
        margin-left: 5%;
        margin-top: -10%;
    }
`

const Image = styled.img`
    width: 50%;
    height: 18vh;
    
    object-fit: cover;
    border: 2px 2px 2px 0px;
    position: absolute;
    padding-top: 1vh;
    padding-left: 1vw;
    border-radius: 2vw;

    ${mediaQueries.mobile} {
        width: 90%;
        height: 19vh;
        border-radius: 2vh;

        
        left: 2.5%;
        top: 0.5vh;
    }
`

const ArticleCard = (props) => {
    return (
            <Container>
                    <Image src={props.article_image} alt="Article image"/>
                <Title>
                    <p>
                        {props.article_title}
                    </p>
                </Title>
                <ByLine>
                    <p className='byline-font'>
                        By {props.article_byline}
                    </p>
                </ByLine>
            </Container>
    )
}

export default ArticleCard;
