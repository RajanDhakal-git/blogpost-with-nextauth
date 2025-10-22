import { auth } from "@/app/api/auth/[...nextauth]/route"
import { logout } from "@/libs/actions"
import Link from "next/link"


const NavBar = async () => {
    const session = await auth()
    return (
        <div>
            <nav>
                <div className="navbar shadow-sm">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="flex gap-5">
                        {session?.user.email && <Link href={"/post"}>New Post</Link>}

                        <div className="dropdown dropdown-end">

                            {!session?.user.email ? <Link href={"/api/auth/signin"}>Login</Link> :
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="image"
                                            src={session?.user?.image} />
                                    </div>
                                </div>}
                            <ul
                                tabIndex={1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li> <form action={logout}>
                                    <button type="submit">Logout</button></form></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar