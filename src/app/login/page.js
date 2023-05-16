import Button from "@/components/Button";
import EffectCircle from "@/components/EffectCircle";
import Link from "next/link";
import React from "react";

function Login() {
	return (
		<>
			<section class="h-auto md:flex">
				<div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 justify-around items-center hidden">
					<div>
						<h1 class="text-black font-bold text-4xl font-sans">LUXURY RENT CAR</h1>
						<p class="text-black mt-1">The best solution for easy car rental with us</p>
					</div>
					<EffectCircle />
				</div>
				<div class="flex h-screen md:w-1/2 justify-center items-center bg-slate-50 md:bg-slate-100">
					<form class="bg-slate-50 md:bg-slate-100">
						<h1 class="text-gray-800 font-bold text-2xl mb-1">Login Page</h1>
						<p class="text-sm font-normal text-gray-600 mb-7">Login to make car orders easily</p>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
							</svg>
							<input class="pl-2 outline-none border-none bg-slate-50 md:bg-slate-100" type="text" name="" id="" placeholder="Email Address" />
						</div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none bg-slate-50 md:bg-slate-100" type="password" name="" id="" placeholder="Password" />
						</div>
						<Button name="Login" />
						<Link href={"/register"}>
							<span class="text-sm ml-2 hover:text-slate-500 cursor-pointer">Dont have an account? Register here</span>
						</Link>
					</form>
				</div>
			</section>
		</>
	);
}

export default Login;
