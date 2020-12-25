import React from 'react'
import {Container} from './styles/styles'
import {Button} from './styles/styles'

export const Error = ()=>(
    <Container>
        <h1>Your Search Appears not to be Valid</h1>
        <Button onClick={()=> window.location.reload()}>Try Again</Button>
    </Container>
)
