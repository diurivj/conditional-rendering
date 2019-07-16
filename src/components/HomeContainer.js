import React, { Component } from 'react'
import { tituloHome } from './styles.module.css'
import HomeAlumnos from './HomeAlumnos'
import { Spin, Button } from 'antd'

const data = [
  {
    id: 0,
    name: 'Mariana',
    age: 20
  },
  {
    id: 1,
    name: 'Eric',
    age: 23
  },
  {
    id: 2,
    name: 'Cris',
    age: 25
  }
]

class HomeContainer extends Component {
  state = {
    title: 'Home'
  }

  fetchInitialAlumnos = () => {
    this.setState({ alumnos: data })
  }

  fetchMoreAlumnos = () => {
    const { alumnos } = this.state
    alumnos.push(...alumnos)
    this.setState({ alumnos })
  }

  render() {
    const { title, alumnos = [] } = this.state
    if (alumnos.length === 0)
      return (
        <>
          <Spin />
          <Button onClick={this.fetchInitialAlumnos}>Traeme a los alumnos</Button>
        </>
      )
    return (
      <>
        <h1 className={tituloHome}>Esto es el {title}</h1>
        <HomeAlumnos alumnos={alumnos} />
        {alumnos.length < 5 ? <Button onClick={this.fetchMoreAlumnos}>Agregas más alumnos</Button> : ''}
      </>
    )
  }
}

export default HomeContainer
