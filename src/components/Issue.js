import styled from 'styled-components'
  

const Container = styled.div`
    width: 100%;
    height: auto;
    background: #D3D7C6;
    display: flex;
    justify-content: center;
    align-items: flext-start;
    flex-direction: column;
    padding-top: 5em;
    padding-bottom: 5em;
`

const Title = styled.div`
    width: 100%;
    height: auto;
    left: 10em;
    font-family: "Cinzel Decorative", serif;
    font-size: 70px;
    font-weight: 700;
    line-height: 94.36px;
    text-align: center;
    color: #4C6953;
`

const Name = styled.div`
    font-family: Josefin Sans;
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    background: inherit;
    color: inherit;
`

const StyledButton = styled.div`
    width: 16em;
    height: 5.5em;
    margin-top: 1em;
    border-radius: 10px;
    opacity: 0px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    color: #F6E4E1;
    background: #84A98C;
    &:hover {
        color:#84A98C;
        background: #F6E4E1;
        ${Name} {
            color: #84A98C; 
            background: #F6E4E1; 
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    row-gap: 1em;
    column-gap: 1em;
    margin-bottom: 4em;
    margin-left: 2%;
`;

const Issue = (props) => {
    const titles = ["LETTER", "INTERACTIVE", "NEWS", "SPORTS", "ARTS", "OPINION", "QUAD", "MULTIMEDIA", "PRIME", "ABOUT"]
    return(
        <>
        <Container>
            <Title>What is in this issue?</Title>
            <Grid>
            {titles.map((article, index) => (
                <StyledButton>
                    <Name>{article}</Name>
                </StyledButton>
            ))}
            </Grid>
            
        </Container>
        </>
    )
}

export default Issue;