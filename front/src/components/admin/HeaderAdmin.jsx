import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../../api/api.get";
import config from "../../config/main";
import { token } from "../../services/tokenService";

const HeaderAdmin = () => {
    const settings = useSelector(state => state.settingsReducer.settings);
    const logo = useMemo(() => settings.filter(setting => setting.type === 'logo') || [], [settings]);
    const logout = () => {
        token.removeToken();
        api.postJson('/api/auth/logout',{});
        <Redirect to={"/"}></Redirect>
    }
    return (
        <>
            <nav className="bg-gray-900 max-w-[70px] px-4 hover:max-w-[300px] transition-all absolute z-10 h-full w-full justify-between flex flex-col ">
                <div className="mt-10 mb-10 overflow-hidden">
                    <a href="#" className="flex w-full justify-center items-center">
                        <img
                            src={config.domain + logo[0]?.value}
                            className="rounded bg-white object-cover w-24 h-10 mb-3 mr-4"
                        />
                    </a>
                    <div className="mt-10 overflow-hidden">
                        <ul>
                            <li className="mb-6">
                                <Link to={"/admin/main"} className="flex w-full items-center">
                                    <span className="mr-4">
                                        <svg className="text-white h-8 w-8 transition-all hover:text-gray-300 fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 460.298 460.297">
                                            <g>
                                                <g>
                                                    <path d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629 c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939
                                                                            z"/><path d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816
                                                                            c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245
                                                                            c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136
                                                                            c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998
                                                                            L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125
                                                                            c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="text-white font-bold transition-all hover:text-gray-300 w-full py-4">
                                        Главная
                                    </span>
                                </Link>
                            </li>
                            <li className="mb-6">
                                <Link to={"/admin/bouquets"} className="flex w-full items-center">
                                    <span className="mr-4">
                                        <svg version="1.1" className="text-white h-8 w-8 transition-all hover:text-gray-300 fill-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title /><desc /><g><path d="M23,22c0-1.654-1.346-3-3-3s-3,1.346-3,3s1.346,3,3,3S23,23.654,23,22z M19,22c0-0.552,0.448-1,1-1s1,0.448,1,1   s-0.448,1-1,1S19,22.552,19,22z" /><path d="M55,22c0-1.641-0.993-3.055-2.41-3.67c0.501-1.359,0.207-2.947-0.883-4.037s-2.678-1.386-4.037-0.883   C47.055,11.993,45.641,11,44,11c-0.493,0-0.962,0.099-1.399,0.263c-0.417-0.861-1.132-1.551-2.012-1.933   c0.501-1.359,0.207-2.947-0.883-4.037S37.029,3.907,35.67,4.41C35.055,2.993,33.641,2,32,2s-3.055,0.993-3.67,2.41   c-1.361-0.503-2.948-0.207-4.037,0.883c-1.09,1.09-1.384,2.678-0.883,4.037c-0.88,0.382-1.595,1.072-2.012,1.933   C20.962,11.099,20.493,11,20,11c-1.641,0-3.055,0.993-3.67,2.41c-1.361-0.503-2.948-0.207-4.037,0.883   c-1.09,1.09-1.384,2.678-0.883,4.037C9.993,18.945,9,20.359,9,22s0.993,3.055,2.41,3.67c-0.501,1.359-0.207,2.947,0.883,4.037   c1.089,1.089,2.676,1.384,4.037,0.883c0.485,1.118,1.471,1.963,2.67,2.274V35c0,2.134,0.511,4.175,1.479,6.017   c-0.408,0.073-0.806,0.213-1.16,0.453C18.492,42.028,18,42.957,18,43.954v6.092c0,0.997,0.492,1.926,1.318,2.484   c0.825,0.559,1.87,0.672,2.796,0.302l3.039-1.216C25.061,52.071,25,52.532,25,53v8c0,0.553,0.447,1,1,1h12c0.553,0,1-0.447,1-1v-8   c0-0.468-0.061-0.929-0.153-1.384l3.039,1.216c0.926,0.37,1.971,0.257,2.796-0.302C45.508,51.972,46,51.043,46,50.046v-6.092   c0-0.997-0.492-1.926-1.318-2.484c-0.354-0.24-0.752-0.38-1.16-0.453C44.489,39.175,45,37.134,45,35v-2.136   c1.199-0.311,2.185-1.156,2.67-2.274c1.359,0.501,2.947,0.206,4.037-0.883c1.09-1.09,1.384-2.678,0.883-4.037   C54.007,25.055,55,23.641,55,22z M25,11c0.404,0,0.77-0.243,0.924-0.617c0.155-0.374,0.069-0.804-0.217-1.09   c-0.713-0.713-0.713-1.873,0-2.586s1.873-0.713,2.586,0c0.287,0.287,0.717,0.374,1.09,0.217C29.757,6.77,30,6.404,30,6   c0-1.103,0.897-2,2-2s2,0.897,2,2c0,0.404,0.243,0.77,0.617,0.924c0.374,0.156,0.804,0.07,1.09-0.217   c0.713-0.713,1.873-0.713,2.586,0s0.713,1.873,0,2.586c-0.286,0.286-0.372,0.716-0.217,1.09C38.23,10.757,38.596,11,39,11   c0.914,0,1.678,0.62,1.916,1.458c-0.237,0.287-0.436,0.606-0.586,0.952c-1.361-0.503-2.948-0.207-4.037,0.883   c-1.09,1.09-1.384,2.678-0.883,4.037c-0.327,0.142-0.625,0.341-0.905,0.566C33.818,18.34,32.95,18,32,18s-1.818,0.34-2.505,0.896   c-0.28-0.225-0.578-0.424-0.905-0.566c0.501-1.359,0.207-2.947-0.883-4.037s-2.678-1.386-4.037-0.883   c-0.15-0.346-0.349-0.665-0.586-0.952C23.322,11.62,24.086,11,25,11z M38.076,26.383C38.23,26.757,38.596,27,39,27   c1.103,0,2,0.897,2,2s-0.897,2-2,2c-0.404,0-0.77,0.243-0.924,0.617c-0.155,0.374-0.069,0.804,0.217,1.09   c0.713,0.713,0.713,1.873,0,2.586s-1.873,0.713-2.586,0c-0.286-0.286-0.715-0.372-1.09-0.217C34.243,35.23,34,35.596,34,36   c0,1.103-0.897,2-2,2s-2-0.897-2-2c0-0.404-0.243-0.77-0.617-0.924C29.259,35.024,29.129,35,29,35c-0.26,0-0.516,0.102-0.707,0.293   c-0.713,0.713-1.873,0.713-2.586,0s-0.713-1.873,0-2.586c0.286-0.286,0.372-0.716,0.217-1.09C25.77,31.243,25.404,31,25,31   c-1.103,0-2-0.897-2-2s0.897-2,2-2c0.404,0,0.77-0.243,0.924-0.617c0.155-0.374,0.069-0.804-0.217-1.09   c-0.713-0.713-0.713-1.873,0-2.586s1.873-0.713,2.586,0c0.287,0.287,0.717,0.374,1.09,0.217C29.757,22.77,30,22.404,30,22   c0-1.103,0.897-2,2-2s2,0.897,2,2c0,0.404,0.243,0.77,0.617,0.924c0.374,0.156,0.804,0.07,1.09-0.217   c0.713-0.713,1.873-0.713,2.586,0s0.713,1.873,0,2.586C38.007,25.579,37.921,26.009,38.076,26.383z M41.507,32.109   c0.441,0.353,0.948,0.608,1.493,0.749V35c0,2.416-0.769,4.693-2.215,6.608l-5.101,2.041C34.769,42.643,33.464,42,32,42   s-2.769,0.643-3.685,1.649l-5.101-2.041C21.769,39.693,21,37.416,21,35v-2.142c0.545-0.142,1.051-0.396,1.493-0.749   c0.279,0.225,0.585,0.417,0.917,0.561c-0.501,1.359-0.207,2.947,0.883,4.037c1.089,1.089,2.676,1.385,4.037,0.883   C28.945,39.007,30.359,40,32,40s3.055-0.993,3.67-2.41c1.359,0.502,2.947,0.206,4.037-0.883c1.09-1.09,1.384-2.678,0.883-4.037   C40.922,32.526,41.229,32.334,41.507,32.109z M29,47c0-1.654,1.346-3,3-3s3,1.346,3,3s-1.346,3-3,3S29,48.654,29,47z M18,29   c0-0.404-0.243-0.77-0.617-0.924c-0.374-0.156-0.804-0.069-1.09,0.217c-0.713,0.713-1.873,0.713-2.586,0s-0.713-1.873,0-2.586   c0.286-0.286,0.372-0.716,0.217-1.09C13.77,24.243,13.404,24,13,24c-1.103,0-2-0.897-2-2s0.897-2,2-2   c0.404,0,0.77-0.243,0.924-0.617c0.155-0.374,0.069-0.804-0.217-1.09c-0.713-0.713-0.713-1.873,0-2.586s1.873-0.713,2.586,0   c0.287,0.286,0.717,0.373,1.09,0.217C17.757,15.77,18,15.404,18,15c0-1.103,0.897-2,2-2s2,0.897,2,2   c0,0.404,0.243,0.77,0.617,0.924c0.374,0.156,0.803,0.069,1.09-0.217c0.713-0.713,1.873-0.713,2.586,0s0.713,1.873,0,2.586   c-0.286,0.286-0.372,0.716-0.217,1.09C26.23,19.757,26.596,20,27,20c0.402,0,0.788,0.127,1.116,0.348   c-1.311-0.399-2.79-0.089-3.823,0.945c-1.09,1.09-1.384,2.678-0.883,4.037C21.993,25.945,21,27.359,21,29   c0,0.533,0.114,1.037,0.304,1.502C20.942,30.816,20.483,31,20,31C18.897,31,18,30.103,18,29z M21.372,50.975   c-0.313,0.125-0.653,0.089-0.933-0.101C20.16,50.686,20,50.383,20,50.046v-6.092c0-0.337,0.16-0.64,0.439-0.828   c0.279-0.189,0.619-0.226,0.933-0.101l5.917,2.367C27.115,45.9,27,46.435,27,47s0.115,1.1,0.289,1.607L21.372,50.975z M37,53v7H27   v-7c0-0.828,0.212-1.64,0.601-2.363l0.714-0.286C29.231,51.357,30.536,52,32,52s2.769-0.643,3.685-1.649l0.714,0.286   C36.788,51.36,37,52.172,37,53z M44,43.954v6.092c0,0.337-0.16,0.64-0.439,0.828c-0.279,0.189-0.619,0.226-0.933,0.101   l-5.917-2.367C36.885,48.1,37,47.565,37,47s-0.115-1.1-0.289-1.607l5.917-2.367c0.313-0.125,0.653-0.089,0.933,0.101   C43.84,43.314,44,43.617,44,43.954z M51,24c-0.404,0-0.77,0.243-0.924,0.617c-0.155,0.374-0.069,0.804,0.217,1.09   c0.713,0.713,0.713,1.873,0,2.586s-1.873,0.713-2.586,0c-0.285-0.286-0.715-0.373-1.09-0.217C46.243,28.23,46,28.596,46,29   c0,1.103-0.897,2-2,2c-0.483,0-0.942-0.184-1.304-0.498C42.886,30.037,43,29.533,43,29c0-1.641-0.993-3.055-2.41-3.67   c0.501-1.359,0.207-2.947-0.883-4.037c-1.034-1.034-2.513-1.344-3.823-0.945C36.212,20.127,36.598,20,37,20   c0.404,0,0.77-0.243,0.924-0.617c0.155-0.374,0.069-0.804-0.217-1.09c-0.713-0.713-0.713-1.873,0-2.586s1.873-0.713,2.586,0   c0.287,0.286,0.716,0.373,1.09,0.217C41.757,15.77,42,15.404,42,15c0-1.103,0.897-2,2-2s2,0.897,2,2   c0,0.404,0.243,0.77,0.617,0.924c0.374,0.156,0.804,0.069,1.09-0.217c0.713-0.713,1.873-0.713,2.586,0s0.713,1.873,0,2.586   c-0.286,0.286-0.372,0.716-0.217,1.09C50.23,19.757,50.596,20,51,20c1.103,0,2,0.897,2,2S52.103,24,51,24z" /><path d="M44,19c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S45.654,19,44,19z M44,23c-0.552,0-1-0.448-1-1s0.448-1,1-1   s1,0.448,1,1S44.552,23,44,23z" /><path d="M32,26c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S33.654,26,32,26z M32,30c-0.552,0-1-0.448-1-1s0.448-1,1-1   s1,0.448,1,1S32.552,30,32,30z" /><path d="M32,16c1.654,0,3-1.346,3-3s-1.346-3-3-3s-3,1.346-3,3S30.346,16,32,16z M32,12c0.552,0,1,0.448,1,1s-0.448,1-1,1   s-1-0.448-1-1S31.448,12,32,12z" /></g></svg>
                                    </span>
                                    <span className="text-white font-bold transition-all hover:text-gray-300 w-full py-4">
                                        Букеты
                                    </span>
                                </Link>
                            </li>
                            <li className="mb-6">
                                <Link to={"/admin/categories"} className="flex w-full items-center">
                                    <span className="mr-4">
                                        <svg className="text-white h-8 w-8 transition-all hover:text-gray-300 fill-current" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Iconly/Bold/Category" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Category" transform="translate(2.000000, 2.000000)" className="text-white transition-all hover:text-gray-300 fill-current" fillRule="nonzero">
                                                    <path d="M5.9199,11.4697 C7.3299,11.4697 8.4599,12.6107 8.4599,14.0307 L8.4599,14.0307 L8.4599,17.4397 C8.4599,18.8497 7.3299,19.9997 5.9199,19.9997 L5.9199,19.9997 L2.5399,19.9997 C1.1399,19.9997 -0.0001,18.8497 -0.0001,17.4397 L-0.0001,17.4397 L-0.0001,14.0307 C-0.0001,12.6107 1.1399,11.4697 2.5399,11.4697 L2.5399,11.4697 Z M17.46,11.4697 C18.86,11.4697 20,12.6107 20,14.0307 L20,14.0307 L20,17.4397 C20,18.8497 18.86,19.9997 17.46,19.9997 L17.46,19.9997 L14.08,19.9997 C12.67,19.9997 11.54,18.8497 11.54,17.4397 L11.54,17.4397 L11.54,14.0307 C11.54,12.6107 12.67,11.4697 14.08,11.4697 L14.08,11.4697 Z M5.9199,-9.32587341e-14 C7.3299,-9.32587341e-14 8.4599,1.15 8.4599,2.561 L8.4599,2.561 L8.4599,5.97 C8.4599,7.39 7.3299,8.53 5.9199,8.53 L5.9199,8.53 L2.5399,8.53 C1.1399,8.53 -0.0001,7.39 -0.0001,5.97 L-0.0001,5.97 L-0.0001,2.561 C-0.0001,1.15 1.1399,-9.32587341e-14 2.5399,-9.32587341e-14 L2.5399,-9.32587341e-14 Z M17.46,-9.32587341e-14 C18.86,-9.32587341e-14 20,1.15 20,2.561 L20,2.561 L20,5.97 C20,7.39 18.86,8.53 17.46,8.53 L17.46,8.53 L14.08,8.53 C12.67,8.53 11.54,7.39 11.54,5.97 L11.54,5.97 L11.54,2.561 C11.54,1.15 12.67,-9.32587341e-14 14.08,-9.32587341e-14 L14.08,-9.32587341e-14 Z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="text-white font-bold transition-all hover:text-gray-300 w-full py-4">
                                        Категории
                                    </span>
                                </Link>
                            </li>
                            <li className="mb-6" >
                                <Link to={"/admin/orders"} className="flex items-center w-full">
                                    <span className="mr-4">
                                        <svg version="1.1" className="text-white h-8 w-8 transition-all hover:text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325 325">
                                            <g>
                                                <g>
                                                    <path d="m299,0h-273c-9.374,0-17,7.626-17,17v291c0,9.374 7.626,17 17,17h273c9.374,0 17-7.626 17-17v-291c0-9.374-7.626-17-17-17zm7,308c0,3.859-3.141,7-7,7h-273c-3.86,0-7-3.141-7-7v-291c0-3.86 3.14-7 7-7h273c3.859,0 7,3.14 7,7v291z" />
                                                    <path d="m74,216h-21c-9.374,0-17,7.626-17,17v21c0,9.374 7.626,17 17,17h21c9.374,0 17-7.626 17-17v-21c0-9.374-7.626-17-17-17zm7,38c0,3.859-3.14,7-7,7h-21c-3.86,0-7-3.141-7-7v-21c0-3.859 3.14-7 7-7h21c3.86,0 7,3.141 7,7v21z" />
                                                    <path d="M87.756,61.051C84.664,56.788,79.657,54,74,54H53c-9.374,0-17,7.626-17,17v21c0,9.374,7.626,17,17,17h21    c9.374,0,17-7.626,17-17V71c0-0.533-0.032-1.059-0.08-1.58l12.748-12.748l-5.766-5.767L87.756,61.051z M81,92c0,3.86-3.14,7-7,7    H53c-3.86,0-7-3.14-7-7V71c0-3.86,3.14-7,7-7h21c2.917,0,5.42,1.795,6.471,4.336L65.216,83.591L54.928,73.304l-5.656,5.656    l13.576,13.576l0.015-0.016L65.34,95L81,79.34V92z" />
                                                    <path d="m97.902,131.905l-10.146,10.146c-3.092-4.263-8.099-7.051-13.756-7.051h-21c-9.374,0-17,7.626-17,17v21c0,9.374 7.626,17 17,17h21c9.374,0 17-7.626 17-17v-21c0-0.533-0.032-1.059-0.08-1.58l12.748-12.748-5.766-5.767zm-16.902,41.095c0,3.859-3.14,7-7,7h-21c-3.86,0-7-3.141-7-7v-21c0-3.86 3.14-7 7-7h21c2.917,0 5.42,1.795 6.471,4.336l-15.255,15.255-10.288-10.287-5.656,5.656 13.576,13.576 .015-.016 2.477,2.48 15.66-15.66v12.66z" />
                                                    <rect width="153" x="113" y="59" height="9" />
                                                    <rect width="81" x="113" y="77" height="9" />
                                                    <rect width="153" x="113" y="149" height="9" />
                                                    <rect width="126" x="113" y="167" height="9" />
                                                    <rect width="144" x="113" y="230" height="9" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="text-white font-bold transition-all hover:text-gray-300 w-full py-4">
                                        Заказы
                                    </span>
                                </Link>
                            </li>
                            <li className="mb-6">
                                <Link to={"/admin/questions"} className="flex items-center w-full">
                                    <span className="mr-4">
                                        <svg version="1.1" className="text-white h-8 w-8 transition-all hover:text-gray-300 fill-current" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 612.074 612.074">
                                            <g>
                                                <path d="M306.037,0C136.997,0,0,136.997,0,306.037s136.997,306.037,306.037,306.037s306.037-136.997,306.037-306.037
		S474.261,0,306.037,0z M306.037,582.405c-152.203,0-276.368-124.165-276.368-276.368S153.019,29.669,306.037,29.669
		s276.368,124.165,276.368,276.368S458.24,582.405,306.037,582.405z M318.869,454.234c0,8.827-7.195,16.021-16.021,16.021
		c-8.827,0-16.021-7.195-16.021-16.021c0-8.827,7.195-16.021,16.021-16.021C311.6,438.213,318.869,445.408,318.869,454.234z
		 M385.328,236.315c0,28.037-16.021,53.701-45.69,71.28c-21.658,12.832-20.843,28.037-20.843,28.853c0,0,0,0.816,0,1.632v36.864
		c0,8.011-6.379,14.39-14.39,14.39s-15.205-6.379-15.205-14.39v-36.048c-0.816-12.832,5.637-37.68,34.416-55.259
		c14.39-8.827,31.227-24.032,31.227-46.432c0-27.221-22.4-49.696-49.696-49.696c-27.296,0-49.696,22.4-49.696,49.696
		c0,8.011-6.379,14.39-14.39,14.39s-14.39-6.379-14.39-14.39c0-44.059,35.232-79.291,79.291-79.291S385.328,192.256,385.328,236.315
		z"/>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="text-white font-bold transition-all hover:text-gray-300 w-full py-4">
                                        Вопросы
                                    </span>
                                </Link>
                            </li>
                            <li className="mb-6">
                                <Link to={"/admin/settings"} className="flex items-center w-full">
                                    <span className="mr-4">
                                        <svg version="1.1" className="text-white h-8 w-8 transition-all hover:text-gray-300 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" ><path d="M27.526,18.036L27,17.732c-0.626-0.361-1-1.009-1-1.732s0.374-1.371,1-1.732l0.526-0.304  c1.436-0.83,1.927-2.662,1.098-4.098l-1-1.732c-0.827-1.433-2.666-1.925-4.098-1.098L23,7.339c-0.626,0.362-1.375,0.362-2,0  c-0.626-0.362-1-1.009-1-1.732V5c0-1.654-1.346-3-3-3h-2c-1.654,0-3,1.346-3,3v0.608c0,0.723-0.374,1.37-1,1.732  c-0.626,0.361-1.374,0.362-2,0L8.474,7.036C7.042,6.209,5.203,6.701,4.375,8.134l-1,1.732c-0.829,1.436-0.338,3.269,1.098,4.098  L5,14.268C5.626,14.629,6,15.277,6,16s-0.374,1.371-1,1.732l-0.526,0.304c-1.436,0.829-1.927,2.662-1.098,4.098l1,1.732  c0.828,1.433,2.667,1.925,4.098,1.098L9,24.661c0.626-0.363,1.374-0.361,2,0c0.626,0.362,1,1.009,1,1.732V27c0,1.654,1.346,3,3,3h2  c1.654,0,3-1.346,3-3v-0.608c0-0.723,0.374-1.37,1-1.732c0.625-0.361,1.374-0.362,2,0l0.526,0.304  c1.432,0.826,3.271,0.334,4.098-1.098l1-1.732C29.453,20.698,28.962,18.865,27.526,18.036z M16,21c-2.757,0-5-2.243-5-5s2.243-5,5-5  s5,2.243,5,5S18.757,21,16,21z" id="XMLID_273_" /></svg>
                                    </span>
                                    <span className="text-white font-bold transition-all hover:text-gray-300 w-full py-4">
                                        Настройки сайта
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mb-4">
                    <a href="#" onClick={logout}>
                        <span>
                            <svg
                                className="fill-current h-8 w-8 text-white hover:text-red-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
            </nav>
        </>

    );
}

export default HeaderAdmin;