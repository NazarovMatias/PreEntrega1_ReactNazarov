import Button  from './Button/Button'
import Navbar  from './Navbar/Navbar'
import Alert from './Alert/Alert' 
import React from 'react'
import ItemListContainer from './ItemListContainer'

const Landing = () => {
    return (
        <>
            <Navbar />

            <div style={{padding: 30}}>
                <Button buttonName="Permitir" isUsedBootstrap={true} />
                <Button buttonName="Denegar" isUsedBootstrap={false} styleCondition={true} />
            </div>  

        <div>
            <Alert />
        </div>
        <ItemListContainer greeting= "Bienvenidos a mi PetShop Virtual" />
        </>
    )
}

export default Landing