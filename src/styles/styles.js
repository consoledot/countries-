import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap:2rem;
   
`
export const CardContainer = styled.div`
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius:5px;
    cursor:pointer;
    background-color:white;
    img{
        border-top-right-radius:5px;
        border-top-left-radius:5px;
        width:100%;
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
export const ContainerDiv = styled.div`
    // margin: 3rem 4rem;
    max-width:90%;
    margin:3rem auto;
`
export const Inputs = styled.div`
   display:flex;
   justify-content:space-between;
   flex-wrap:wrap;
   margin-bottom: 1rem;
   div{
       margin-top:0.5rem;
   }
   div:nth-child(1){
       background-color:white;
       border-radius:5px;
       padding-left:1.5rem;
       display:flex;
       align-items:center;
       width:40%;
   }
   input{
       border:none;
       margin-left:1.5rem;
       margin-top:0;
       witdh:auto;
   }
   input,select{
    padding:10px;
   }
   select{
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
   }
   option{
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
   }
`
export const HeaderConatianer = styled.div`
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display:flex;
    justify-content:space-between;
    padding: 1.5rem 1.5rem;
    background-color:white;
    div{
        display:flex;
        align-items:center;
        font-weight: 400;
        cursor:pointer;
        p{
            margin-left:0.5rem;
        }
    }

`

export const CardInfoContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap:2rem ;
    // width:100%;
    img{
        width:90%;
    }
`
export const Button = styled.button`
    border:none;
    background-color:white;
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 0.5rem 1rem;
    margin:1rem 0;
    cursor:pointer;
`
export const CountryDescription = styled.div`
    display:flex;
    flex-wrap:wrap;
`