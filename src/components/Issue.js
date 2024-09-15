import styled from 'styled-components'
  

const Container = styled.div`
    width: 100%;
    height: 30em;
    left: -2px;
    background: #D3D7C6;
    display: flex;
    justify-content: center;
    align-items: flext-start;
    padding-top: 3em;
`

const Title = styled.div`
    width: 15em;
    height: 94px;
    left: 10em;
    font-family: "Cinzel Decorative", serif;
    font-size: 70px;
    font-weight: 700;
    line-height: 94.36px;
    text-align: center;
    color: #4C6953;
`

const Issue = (props) => {
    return(
        <>
        <Container>
            <Title>What is in this issue?</Title>
        </Container>
        </>
    )
}

export default Issue;