import Link from "next/link";
import React from "react";

function Login() {
	return (
		<section class="h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)] md:flex">
			<div class="hidden relative overflow-hidden bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 lg:flex lg:w-1/2 lg:justify-around lg:items-center">
				<div>
					<h1 class="text-black font-bold text-4xl font-sans">LUXURY RENT CAR</h1>
					<p class="text-black mt-1">The best solution for easy car rental with us</p>
				</div>
				<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			</div>
			<div class="h-full w-full flex justify-center items-center bg-slate-100 lg:w-1/2">
				<form class="bg-slate-50 md:bg-slate-100">
					<h1 class="text-gray-800 font-bold text-2xl mb-1">Login Page</h1>
					<p class="text-sm font-normal text-gray-600 mb-7">Login to make car orders easily and quickly</p>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none bg-slate-100" type="text" name="" id="" placeholder="Email Address" />
					</div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
						</svg>
						<input class="pl-2 outline-none border-none bg-slate-100" type="password" name="" id="" placeholder="Password" />
					</div>
					<button type="submit" class="block w-full bg-slate-700 hover:bg-slate-600 transition-all mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
						Login
					</button>
					<div class="pt-2 text-sm">
						Dont have an account?{" "}
						<Link href={"/register"} className="cursor-pointer text-blue-600 font-semibold hover:underline underline-offset-2">
							Register here
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Login;
