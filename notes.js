



<nav className="navbar bg-black text-white">
    <div className="flex-1">
        <Link className="text-xl btn btn-ghost">AXON INFO SYSTEMS</Link>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            {
                menus.map((menu) => (
                    <li><Link>{menu.name}</Link>
                    {
                        menu.submenu && (
                            <li tabIndex={0}>
                                {
                                    menu.sublinks.map((sublink) => (
                                        <ul className="p-2 bg-base-100 text-black">
                                    <li>
                                        <Link>
                                        {sublink.title}
                                        </Link>
                                    </li>
                                </ul>
                                    ))
                                }
                            </li>
                        )
                    }
                    </li>

                    
                ))
            }
        </ul>
    </div>
   </nav>



















<div className="flex justify-between px-5 pt-3 ">
<div className="card w-96 bg-gradient-to-b from-main to-sub text-primary-content hover:bg-white hover:border-blue-600">
<div className="card-body hover:text-black hover:bg-white hover:border-blue-600 hover:border hover:rounded-[1rem] hover:duration-300 hover:cursor-pointer">
<h2 className="card-title ">
<button className="btn bg-red hover:bg-red border-none">
    logo
</button>
</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
</div>
</div>
</div>




