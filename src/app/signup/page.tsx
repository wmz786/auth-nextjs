"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";


export default function SignupPage() { 
    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: ""
    })

    const onSignup =async () => {
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="test-center text-white text-2xl">Sign up Page</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" name="username" id="username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder="username"/>
            <label htmlFor="email">email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="email" name="email" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"/>
            <label htmlFor="password">password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="password" name="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password"/>
            <button className=""></button>
        </div>
    )
}