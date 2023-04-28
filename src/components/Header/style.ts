import styled from "styled-components";

export const StyledHeader = styled.header`
 display: flex;
align-items: center;
justify-content: space-between;

padding: 0 55px;

height: 70px;

background-color: rgba(0,0,0,0.9);

.logoImg{
    width: 65px;
    height: 65px;
    margin-left: 10px;
}

.logoWriting{
width: 200px;
height: 65px;
}

a{
    color: white;
    border-bottom: 3px solid #F9CC00 ;

    font-size: 18px;
    font-weight: 600;
}

@media(min-width: 769px){
    height: 80px;

    display: flex;

    .logoImg{
        margin-left: 15px;
    }
}
    

`