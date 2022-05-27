import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArchway } from '@fortawesome/free-solid-svg-icons'
import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [enabled, setEnabled] = useState(true)

    // useEffect(() => {
    //     const root = window.document.documentElement;
    //     if (enabled == false) {
    //         root.classList.add("dark");
    //     } else {
    //         root.classList.remove("dark");
    //     }
    // }, [enabled]);

    return (
        <nav aria-label="alternative nav" id="sidebar" className="">
            <div className="transition border-r bg-gray-800 border-gray-600 top-10 w-full md:w-80 content-center shadow flex-col flex sidebar h-full min-h-screen">
                <div className='logo px-5 py-6 hidden md:block max-height-100'>
                    <h1 className="text-md bold font-bold text-white text-left pl-2"><NavLink to="/">GoStaff.com</NavLink></h1>
                </div>
                <div className={"px-5 content-center md:content-start text-left justify-between"}>
                    <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 text-center md:text-left">
                        <li className="mr-3 flex-1">
                            <NavLink to="/staff" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-white md:border-b border-gray-700 dark:border-gray-200 transition">
                                <i className="fas fa-tasks pr-0 md:pr-3 text-gray-400 dark:text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 dark:text-gray-600 block md:inline-block">Staff</span>
                            </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                            <NavLink to="/manage" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-white md:border-b border-gray-700 dark:border-gray-200 transition">
                                <i className="fa fa-envelope pr-0 md:pr-3 text-gray-400 dark:text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 dark:text-gray-600 md:text-black-900 block md:inline-block">Manage</span>
                            </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                            <NavLink to="/analytics"  className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-black md:border-b border-gray-700 dark:border-gray-200 transition">
                                <i className="fas fa-chart-area pr-0 md:pr-3 text-gray-400 dark:text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 dark:text-gray-600 md:text-black-900 block md:inline-block">Analytics</span>
                            </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                            <NavLink to="/settings" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-black md:border-b border-gray-700 dark:border-gray-200 transition">
                                <i className="fa fa-wallet pr-0 md:pr-3 text-gray-400 dark:text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 dark:text-gray-600 md:text-black-900 block md:inline-block">Settings</span>
                            </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                            <NavLink activeClassName="selected" to="/calendar" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-black md:border-b border-gray-700 dark:border-gray-200 transition">
                                <i className="far fa-calendar-alt pr-0 md:pr-3 text-gray-400 dark:text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base dark:text-gray-600 text-gray-400 md:text-black-900 block md:inline-block">Calendar</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="toggle-theme px-5 content-center md:content-start text-left justify-between mt-auto flex md:border-t pt-5 pb-5 border-gray-600">
                <ul className="list-reset flex flex-row md:flex-col px-1 text-center md:text-left w-full">
                        <li className="mr-3 flex-1 w-full">
                            <NavLink to="/login" className="block pl-1 align-middle text-gray-800 no-underline md:border-b border-gray-700 hover:text-whitedark:border-gray-200 pb-3 transition">
                                <span className="flex pb-1 md:pb-0 text-xs md:text-base text-gray-400 dark:text-gray-600 block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg> Sign in</span>
                            </NavLink>
                        </li>
                        <li className="mr-3 flex-1 w-full">
                            <NavLink to="/register" className="block pl-1 align-middle text-gray-800 no-underline hover:text-white transition pt-5">
                                <i className="fas fa-tasks pr-0 md:pr-3 text-gray-400 dark:text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 dark:text-gray-600 block md:inline-block">Sign up</span>
                            </NavLink>
                        </li>
                    </ul>
                    {/* <span className="pb-3 md:pb-5 pr-5 text-xs md:text-base text-gray-400 md:text-black-900 block md:inline-block dark:text-gray-800"><i className="fa fa-moon"></i> Dark mode</span>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                            enabled ? 'bg-indigo-600' : 'bg-gray-400'
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-transform`}
                        >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                        />
                    </Switch> */}
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;