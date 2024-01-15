"use client"

import { authenticate } from "@/actions";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {

    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    const router = useRouter()

    useEffect(()=>{
        if(errorMessage === "Sucesss"){
            router.replace("/")
        }
    }, [errorMessage])


    return (
        <form action={dispatch} className="flex flex-col">

            <label htmlFor="email">Correo electrónico</label>
            <input
                name="email"
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="email" />


            <label htmlFor="password">Contraseña</label>
            <input
                name="password"
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="password" />

            <LoginButton />

            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {errorMessage !== "Sucesss" && errorMessage && (
                    <div className="mb-2 flex flex-row">
                        <IoInformationOutline className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">Credenciales no son correctas</p>
                    </div>
                )}
            </div>


            {/* divisor l ine */}
            <div className="flex items-center my-5">
                <div className="flex-1 border-t border-gray-500"></div>
                <div className="px-2 text-gray-800">O</div>
                <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link
                href="/auth/new-account"
                className="btn-secondary text-center">
                Crear una nueva cuenta
            </Link>

        </form>
    )
}


function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={`${!pending ? "btn-primary" : "btn-disabled"}`}
            disabled={pending}
            >
            Ingresar
        </button>
    );
}