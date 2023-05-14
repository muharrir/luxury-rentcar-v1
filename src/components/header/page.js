"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

function Header() {
	const navs = [
		{ text: "Home", href: "/" },
		{ text: "Catalog", href: "/catalog" },
		{ text: "Stories", href: "/stories" },
	];

	const pathname = usePathname();
	const [navMenuState, setNavMenuState] = useState(false);

	function handleClick() {
		setNavMenuState((navMenuState) => !navMenuState);
	}
	let toogleClassNavMenu = navMenuState ? "" : "hidden ";

	return (
		<>
			<nav class="relative my-6 md:my-5 flex items-center justify-between z-20 mx-6 md:mx-10 lg:mx-40">
				<Link href={"/"}>
					<h1 class="font-bruno font-bold text-2xl md:text-3xl cursor-pointer">LUXURY</h1>
				</Link>
				<ul class={`${toogleClassNavMenu} absolute top-full right-0 w-52 p-5 md:p-0 bg-slate-100 md:bg-white md:w-auto rounded-2xl block md:static md:flex gap-20 shadow-xl md:shadow-none`}>
					{navs.map((v, i) => (
						<li class="my-5" key={i}>
							<Link href={v.href} class={`hover:text-black ${pathname == v.href ? "font-medium hover:text-gray-400" : "text-gray-400"}`}>
								{v.text}
							</Link>
							<div class={`${pathname == v.href ? "mt-2 h-1 w-7 bg-black rounded-full" : ""}`}></div>
						</li>
					))}
				</ul>
				<div class={`${pathname == "/login" ? "hidden" : "hidden md:block"} `}>
					<Link href={"/login"} class="border border-gray-300 px-9 py-4 rounded-full  font-semibold hover:bg-indigo-950 hover:border-0 hover:text-white ">
						Log In
					</Link>
				</div>
				<button class="block md:hidden">
					<Hamburger onToggle={handleClick} />
				</button>
			</nav>
		</>
	);
}

export default Header;
