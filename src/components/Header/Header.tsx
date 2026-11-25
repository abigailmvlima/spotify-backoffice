import styles from './Header.module.scss';

export default function Header() {
  return ( 
  //<div className="header">Logo | Menu</div>
  <div className={`header ${styles.header}`}>Logo | <a href="#">Menu</a></div>
  );
}