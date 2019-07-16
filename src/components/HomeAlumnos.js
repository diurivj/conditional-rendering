import React from 'react'
import { Card, Alert } from 'antd'

function Alumno({ obj }) {
  return <Alert type="success" message={`${obj.name} tiene ${obj.age} años`} />
}

function HomeAlumnos(props) {
  return (
    <>
      {props.alumnos.map((alumno, i) => (
        <Card key={i} style={{ width: '100vw' }}>
          <Alumno obj={alumno} />
        </Card>
      ))}
    </>
  )
}

export default HomeAlumnos
