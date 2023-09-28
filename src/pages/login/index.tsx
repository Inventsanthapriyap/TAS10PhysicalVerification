import { TextField } from "@mui/material"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import Styles from '@/pages/login/login.module.css'
import inventlogo from "@/assets/inventlogo.png"
import loginlogo from "@/assets/loginlogo.png"
import { getEncodeTokenDetail } from "@/components/helper/Helper";
import CommonServices from "@/services/CommonServices";
import axios from "axios";


interface IAuthenticateModel {
    UserName: "",
    Password: "",
}

export default function Index() {

    const [loginErr, setLoginErr] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm<IAuthenticateModel>({
        defaultValues: {
            UserName: "",
            Password: "",
        }
    })

    const onSubmit: SubmitHandler<IAuthenticateModel> = (data) => {
        axios.post("http://serviceapi.tas10.com/v1/Auth/Login", {}, {
            headers: {
                username: data.UserName,
                password: data.Password
            }
        }).then(res => {
            console.log(res.data)
            if (res.status === 200) {
                if (res.data == "User Name or Password is wrong") {
                    return setLoginErr(res.data);
                }
                if (res.data == "Invalid Credentials") {
                    return setLoginErr(res.data);
                }
                else {
                    localStorage.clear();
                    setLoginErr("");
                    localStorage.setItem("tas-10-token", JSON.stringify(res.data));
                    console.log(res.data)
                    localStorage.setItem("status", JSON.stringify(getEncodeTokenDetail(res.data.token)?.StatusId));
                }
            }
        })

        // CommonServices.post("Auth", "Login", data).then(res => {
        //     console.log(res.data)
        //     if (res.status === 200) {
        //         if (res.data == "User Name or Password is wrong") {
        //             return setLoginErr(res.data);
        //         }
        //         if (res.data == "Invalid Credentials") {
        //             return setLoginErr(res.data);
        //         }
        //         else {
        //             localStorage.clear();
        //             setLoginErr("");
        //             localStorage.setItem("tas-10-token", JSON.stringify(res.data));
        //             console.log(res.data)
        //             localStorage.setItem("status", JSON.stringify(getEncodeTokenDetail(res.data.token)?.StatusId));

        //         }
        //     }
        // })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`container ${Styles.container}`}>
                <div>
                    <div className='pt-0'>
                        <img className={Styles.logo} src={loginlogo.src} alt="" />
                    </div>
                    <div className={Styles.header}>Welcome</div>
                    <div>
                        <div className={Styles.label}>User Name</div>
                        <TextField className={Styles.input} variant="standard"  {...register("UserName", { required: true })}></TextField>
                        {errors.UserName && <p className={Styles.error}>Username is required </p>}
                    </div>
                    <div>
                        <div className={Styles.label}>Password</div>
                        <TextField className={Styles.input} variant="standard"  {...register("Password", { required: true })} type='password'></TextField>
                        {errors.Password && <p className={Styles.error}>Password is required</p>}
                    </div>
                    <div>
                        <button className={Styles.button} type="submit">Login</button>
                    </div>
                    <div>
                        {/* <img className={Styles.inventlogo} src={inventlogo.src} alt="" /> */}
                        <img className={Styles.logo} src={loginlogo.src} alt="" />

                    </div>
                </div>
            </div>
        </form>
    )
}
