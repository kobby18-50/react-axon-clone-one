import Courosel from "./Courosel";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
const NavBar = () => {
  // const menus = [
  //     {
  //         name:'Services'
  //     },

  //     {
  //         name:'Expertise',
  //         submenu:true,
  //         sublinks: [
  //             {title:'subtitle'},
  //             {title:'subtitle'},
  //             {title:'subtitle'},
  //         ]
  //     },

  //     {
  //         name:'Products',
  //         submenu : true,
  //         sublinks: [
  //             {title:'subtitle'},
  //             {title:'subtitle'},
  //             {title:'subtitle'},
  //         ]
  //     },

  //     {
  //         name: 'Our Work'
  //     },

  //     {
  //         name:'Blog'
  //     },

  //     {
  //         name:'About us'
  //     },
  //     {
  //         name:'Contact'
  //     },
  // ]
  return (
    <>
      {/* mobile nav */}
      <div className="lg:hidden sm:flex">
        <Courosel/>
        <MobileNav />
      </div>
      <nav className="sm:hidden lg:block">
        {/* Courosel */}
        <Courosel />
        {/* NavLinks */}
        <NavLinks />
      </nav>
    </>
  );
};

export default NavBar;
