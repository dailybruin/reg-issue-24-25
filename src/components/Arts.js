import styled from 'styled-components';
import ArticleCard from './ArticleCard.js';

const ArtsGrid = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: repeat(6, 40vh);
    column-gap: 5%;

    background: #9AA8B1;


    font-family: "Oswald", sans-serif;
    font-weight: 600;
    font-size: 18vh;

    border: 2px solid black;
    line-height: 22vh;


    .N {
        grid-row: 1;
        grid-column: 1;
        border: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.5vh;
    }
    .E {
        grid-row: 1;
        grid-column: 2;
        border: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.5vh;
    }

    .W {
        grid-row: 2;
        grid-column: 3;
        border: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.5vh;
    }

    .S {
        grid-row: 2;
        grid-column: 4;
        border: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.5vh;
    }
    

    .B5 {
        grid-row: 5;
        grid-column: 1;
        border: inherit;
    }
    .B6 {
        grid-row: 5;
        grid-column: 4;
        border: inherit;
    }

    .A1 {
        grid-row: 1;
        grid-column: 3 / 5;
        border: inherit;
   
    }

    .A2 {
        grid-row: 2;
        grid-column: 1 / 3;
        border: inherit;
        
    }

    .A4 {
        grid-row: 3;
        grid-column: 1/3;
        border: inherit;
        
    }

    .A5 {
        grid-row: 3;
        grid-column: 3/5;
        border: inherit;
       
    }

    .A6 {
        grid-row: 4;
        grid-column: 1/3;
        border: inherit;
       
    }

    .A7 {
        grid-row: 4;
        grid-column: 3/5;
        border: inherit;
     
    }

    .A10 {
        grid-row: 5;
        grid-column: 2/4;
        border: inherit;
     
    }


    .A8 {
        grid-row: 6;
        grid-column: 1/3;
        border: inherit;
       
    }

    .A9 {
        grid-row: 6;
        grid-column: 3/5;
        border: inherit;
     
    }


`;


const Arts = (props) => {
    let a1 = props.arts[0];
            let a2 = props.arts[1];
            let a3 = props.arts[2];
            let a4 = props.arts[3];
            let a5 = props.arts[4];
            let a6 = props.arts[5];
            let a7 = props.arts[6];
            let a8 = props.arts[7];
            let a9 = props.arts[8];
            
    return (
        <>
            <ArtsGrid>
                <ArticleCard
                        position='left'
                        article_title={a1.article_title}
                        article_byline={a1.article_byline}
                        article_image={a1.article_image}
                        article_url={a1.article_url}
                        ></ArticleCard>

                <ArticleCard
                        position='right'
                        article_title={a2.article_title}
                        article_byline={a2.article_byline}
                        article_url={a2.article_url}
                        article_image={a2.article_image}></ArticleCard>

                <ArticleCard
                        position='left'
                        article_title={a3.article_title}
                        article_url={a3.article_url}
                        article_byline={a3.article_byline}
                        article_image={a3.article_image}></ArticleCard>
                    
                <ArticleCard
                        position='right'
                        article_title={a4.article_title}
                        article_url={a4.article_url}
                        article_byline={a4.article_byline}
                        article_image={a4.article_image}></ArticleCard>

                <ArticleCard
                        position='right'
                        article_title={a5.article_title}
                        article_byline={a5.article_byline}
                        article_url={a5.article_url}
                        article_image={a5.article_image}></ArticleCard>

                
                <ArticleCard
                        position='left'
                        article_title={a6.article_title}
                        article_byline={a6.article_byline}
                        article_url={a6.article_url}
                        article_image={a6.article_image}></ArticleCard>

                <ArticleCard
                        position='left'
                        article_title={a7.article_title}
                        article_byline={a7.article_byline}
                        article_image={a7.article_image}
                        article_url={a7.article_url}></ArticleCard>
            
            </ArtsGrid>

        </>
    )
}

export default Arts;