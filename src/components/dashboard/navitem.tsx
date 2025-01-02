import { ReactNode } from "react"
import { Link } from "react-router-dom"
import styles from './navitem.module.css'
import { Link as LinkType } from '../../lib/types.ts'

type Props = Readonly<{
  children?: ReactNode;
  item: LinkType;
  selected: boolean;
}>
const NavItem = ({ children, item, selected = false }: Props) => {
  return (
    <Link to={item.href} className={`${styles.link} ${selected && styles.selected} ${item.disabled && styles.disabled}`}>
      {children}
    </Link>
  )

}
export default NavItem;
