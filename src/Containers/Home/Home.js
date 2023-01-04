import React from 'react'
import "./Home.css"
import Card from '../../Components/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {getArticles} from '../../redux/articles/articleReducer'
import  {v4 as uuidv4} from 'uuid'

export default function Home() {
  return (
    <>
    <h1 className="home-title">Tous les articles</h1>

    <div className="container-cards">
        <Card > <h2> bonjour</h2>
        </Card>
    
    </div>
    </>
  )
}
