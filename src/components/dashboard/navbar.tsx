import styles from './navbar.module.css';
import NavItem from './navitem';
import dark from '/icon-dark.png';
import { Link, useLocation } from 'react-router-dom';
import { Link as LinkType } from '../../lib/types.ts';
import { GiSkullWithSyringe } from "react-icons/gi";

const LINKS: LinkType[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/hotkeys",
    name: "Hotkeys",
  },
  {
    href: "/utils",
    name: "Utilities",
  },
  {
    href: "/bot",
    name: "Bot",
    disabled: true,
  },
]
const Navbar = () => {
  const local = useLocation()
  return (
    <nav className={styles.nav}>
      <div className={styles.inner_container}>
        <Link to={'/'} className={styles.logo_container}>
          <img src={dark} alt="Image of a Pirate Skull that represents the Pirate Deimos logo" className={styles.logo} height={100} width={100} />
          <h1 className={styles.title}>Deimos</h1>
        </Link>
        <div className={styles.item_container}>
          {
            LINKS.map((item: LinkType, idx: number) => (
              <NavItem key={`link-${idx}`} item={item} selected={local.pathname == item.href}>
                <span>{item.name}</span>
              </NavItem>
            ))
          }
        </div>
      </div>
      <div className={styles.inner_container}>
        <div className={styles.item_container}>
          <button type='button' className={styles.attach_button}>Attach<GiSkullWithSyringe className={styles.syringe} /></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
