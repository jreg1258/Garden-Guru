import React from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Fence from '../../components/Fence/fence'
import Cards from '../../components/GardenCards'
import Header from '../../components/Header'
import Title from '../../components/Title/index'

function MyGarden(){
    return(
        <div>
                <Row>
                    <Cards />
                </Row>
        </div>
    )
}

export default MyGarden