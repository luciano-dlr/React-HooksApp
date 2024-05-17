import {  useEffect,  } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, handleOnInputChange,handleResetForm,username,password,email } = useForm({
        username: 'leonardo',
        email: 'leonardo@gmail.com',
        password: ''
    })

    // const {username,email,password} = formState


    useEffect(() => {
        //  console.log('useEffect called');

    }, [])

    useEffect(() => {
        //  console.log('form state change lionard');

    }, [formState])

    useEffect(() => {
        //  console.log('email change lionard');

    }, [email])


    return (
        <>
            <h1>Formulario</h1>

            <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleOnInputChange}

            />

            <input type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={handleOnInputChange}
            />
            <input type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleOnInputChange}
            />

            <button onClick={handleResetForm} className="btn btn-primary mt-2">Borrar</button>


     

        </>
    )
}


