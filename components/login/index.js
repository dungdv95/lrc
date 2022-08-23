import Image from "next/image";
import { Fragment } from "react";
import logo from '../../public/images/logo.png'
import style from './login.module.css'

function Login() {
    return (
        <Fragment>
            {/* <div className="container mx-auto">
                <div className="columns-2">
                    <div className="w-full">
                        logo
                    </div>
                    <div className="w-full">
                        form
                    </div>
                </div>
            </div> */}
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <div className="flex flex-col">
                                <div className="flex justify-center my-2">
                                    <Image src={logo} />
                                </div>
                                <div className="flex justify-center my-2">
                                    <h1>
                                        <b>Hệ thống quản lý lưu trữ ECM</b>
                                    </h1>
                                </div>
                                <div className="flex justify-center my-2">
                                    <h6 className="text-sm">
                                        Quản lý lưu trữ, thống kê tài liệu (Hóa đơn điện tử, văn bản quan trọng ......)
                                    </h6>
                                </div>

                            </div>
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-10">
                            {/* <div className="mb-6">
                                a
                            </div>
                            <div className="mb-6">
                                b
                            </div> */}
                            {/* <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                    <div>ĐĂNG NHẬP HỆ THỐNG</div>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                        <p className="text-gray-700 text-base mb-4">
                                            Some quick example text to build on the card title and make up the bulk of the card's
                                            content.
                                        </p>
                                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                    </div>
                                </div>
                            </div> */}

                            <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className={`flex justify-center h-14 items-center rounded-t-lg bg-indigo-700 ${style.cl_white}`}>
                                    <span>ĐĂNG NHẬP HỆ THỐNG</span>
                                </div>
                                <div className="flex justify-center">
                                    Form
                                </div>
                                <div className="flex justify-center">
                                    Footer
                                </div>
                                {/* <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
        // <section className="h-screen">
        //     <div className="container px-6 py-12 h-full">
        //         <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        //             <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        //                 <img
        //                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
        //                     className="w-full"
        //                     alt="Phone image"
        //                 />
        //             </div>
        //             <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        //                 <form>
        //                     <div className="mb-6">
        //                         <input
        //                             type="text"
        //                             className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        //                             placeholder="Email address"
        //                         />
        //                     </div>
        //                     <div className="mb-6">
        //                         <input
        //                             type="password"
        //                             className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        //                             placeholder="Password"
        //                         />
        //                     </div>

        //                     <div className="flex justify-between items-center mb-6">
        //                         <div className="form-group form-check">
        //                             <input
        //                                 type="checkbox"
        //                                 className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        //                                 id="exampleCheck3"
        //                                 checked
        //                             />
        //                             <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
        //                         </div>
        //                         <a
        //                             href="#!"
        //                             className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</a>
        //                     </div>
        //                     <button
        //                         type="submit"
        //                         className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        //                         data-mdb-ripple="true"
        //                         data-mdb-ripple-color="light"
        //                     >
        //                         Sign in
        //                     </button>

        //                     <div
        //                         className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
        //                     >
        //                         <p className="text-center font-semibold mx-4 mb-0">OR</p>
        //                     </div>

        //                     <a
        //                         className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        //                         // style="background-color: #3b5998"
        //                         style={{ backgroundColor: '#3b5998' }}
        //                         href="#!"
        //                         role="button"
        //                         data-mdb-ripple="true"
        //                         data-mdb-ripple-color="light"
        //                     >
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             viewBox="0 0 320 512"
        //                             className="w-3.5 h-3.5 mr-2"
        //                         >

        //                             <path
        //                                 fill="currentColor"
        //                                 d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        //                             /></svg>Continue with Facebook
        //                     </a>
        //                     <a
        //                         className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        //                         // style="background-color: #55acee"
        //                         style={{ backgroundColor: '#55acee' }}
        //                         href="#!"
        //                         role="button"
        //                         data-mdb-ripple="true"
        //                         data-mdb-ripple-color="light"
        //                     >
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             viewBox="0 0 512 512"
        //                             className="w-3.5 h-3.5 mr-2"
        //                         >

        //                             <path
        //                                 fill="currentColor"
        //                                 d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        //                             /></svg>Continue with Twitter
        //                     </a>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}
export default Login;