import React from 'react'
import {HeaderConatianer} from './styles/styles'

export const Header = ()=>(
    <HeaderConatianer>
        <h3 className="font-bold">Where in the world?</h3>
        <div>
        <ion-icon name="moon-outline"></ion-icon>
            <p>Dark Mode</p>
        </div>
    </HeaderConatianer>
)