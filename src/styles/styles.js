import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap:2rem;
    margin: 4em;
`
export const CardContainer = styled.div`
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius:5px;
    cursor:pointer;
    img{
        border-top-right-radius:5px;
        border-top-left-radius:5px;
    }
   div:nth-child(2){
       margin:1rem;
       h3{
           font-weight:800;
       }
       .text{
           font-weight:500;
       }
   }
`
export const HeaderConatianer = styled.div`
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display:flex;
    justify-content:space-between;
    padding: 1rem 1.5rem;
   
    div{
        display:flex;
        align-items:center;
        font-weight: 400;
        p{
            margin-left:0.5rem;
        }
    }

`

