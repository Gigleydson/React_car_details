import styles from './CarDetails.module.css'

const CarDetails = ({ car }) => {

    return (
        <>
            <div className={styles.car_details}>
                <h2>{car.name}</h2>
                <p><strong>Marca: </strong>{car.brand}</p>
                <p><strong>Cor: </strong>{car.color}</p>
                <p><strong>Km: </strong>{car.km}</p>

                {car.newCar && <p><span>Este carro é novo!</span></p>}
            </div>
        </>
    )
}

export default CarDetails