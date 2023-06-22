import React from "react";

export default function ModalCreateBrand() {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<button className="mb-10 bg-blue-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(true)}>
				Create
			</button>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-2/5 my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-2xl font-semibold">Create New Brand</h3>

									<button className="text-red-600 font-bold h-6 w-6 text-2xl" onClick={() => setShowModal(false)}>
										x
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<div className="px-6 py-6 lg:px-8">
										<form className="space-y-6" action="#">
											<div>
												<label for="name" className="block mb-2 text-sm font-semibold text-gray-900">
													Brand Name
												</label>
												<input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
											</div>
										</form>
									</div>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
										Close
									</button>
									<button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
