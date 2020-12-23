import React from 'react'
import {Card} from './Card'
import {CardsContainer} from './styles/styles'
export const Container = ()=>(
    <div>
        <div>
            <input type="text" placeholder="Search for a country"/>
        </div>
    <CardsContainer>
        <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
    </CardsContainer>
    </div>
)