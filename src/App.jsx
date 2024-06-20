import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import CarDetails from './components/CarDetails'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const [cars] = useState([
    { id: 1, name: 'Civic', brand: 'Honda', color: 'Branco', km: 0, newCar: true },
    { id: 2, name: '208', brand: 'Peugeot', color: 'Azul', km: 5000, newCar: false },
    { id: 3, name: 'X1', brand: 'BMW', color: 'Prata', km: 10000, newCar: false }
  ])

  return (
    <>
      <h1 className='title-cars'>Meus Carros</h1>

      <div className='cars'>
        {cars.map((car) => (
            <CarDetails key={car.id} car={car} />
        ))}
      </div>
    </>
  )
}

export default App
