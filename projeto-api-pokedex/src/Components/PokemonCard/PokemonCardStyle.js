import styled from "styled-components";

export const CardContainer = styled.article`
height: 210px;
width: 440px;
margin: 20px;
background-color: #729F92;
border-radius: 16px;


.name-id-type{
    color: white;
    display: flex;
    flex-direction: column;
}

.layout-card {
    height: 200px;
    width: 400px;

    img{
        height: 200px;
        width: 200px;
        display:flex;
        justify-content: flex-end;
    }
}

.button-and-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`