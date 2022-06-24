import { useState } from "react"



const Checkout = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container my-5">
            <h2> Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input value={values.nombre} name="nombre" type={"text"} placeholder="Tu nombre" className="form-control my-2" onChange={handleInputChange}></input>
                <input value={values.email} name="email" type={"text"} placeholder="email@ejemplo.com" className="form-control my-2" onChange={handleInputChange}></input>
                <input value={values.direccion} name="direccion" type={"text"} placeholder="Tu direccion" className="form-control my-2" onChange={handleInputChange}></input>
            </form>

        </div>
    )
}

export default Checkout