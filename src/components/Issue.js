import styled from 'styled-components'
  

const Container = styled.div`
    width: 100%;
    height: 30em;
    left: -2px;
    background: #D3D7C6;
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
            <Title>WHAT IS IN THIS ISSUE?</Title>
        </Container>
        </>
    )
}

export default Issue;