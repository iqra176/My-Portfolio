// Hook ka use functional component ke andar state manage karne ke liye hota hai.
import { useState } from "react";
// TypeScript type NavbarProps define karta hai ke Navbar component ko
// parent component se kaun se props milenge.
// darkMode:oolean value hai -> true / false
//setDarkMode:state update karne wala React function hai.
// React.Dispatch<React.SetStateAction<boolean>> TS ko batata hai ke ye fn boolean state ko update karega.
type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
// Props Destructuring:
// Instead of:function Navbar(props: NavbarProps) Hum directly properties extract kar rahe hain:
// darkMode,setDarkMode,Ye JavaScript destructuring ka concept hai.
function Navbar({
  darkMode,
  setDarkMode,
}: NavbarProps) {
  // Local State :menuOpen mobile navigation menu ki state hai.
  //false -> menu closed,true  -> menu open. setMenuOpen state ko update karta hai.
  const [menuOpen, setMenuOpen] = useState(false);
  // Function:Menu ko close karne ke liye reusable function.
  //Is function ko multiple navigation links parreuse kiya ja raha hai.
  const closeMenu = () => {
    setMenuOpen(false);
  };
  // JSX:Component ka UI yahan return hota hai.
  return (
    <nav className="navbar">
      {/* Logo / Branding Simple JSX element.*/}
      <div className="logo">
        Iqra Ajmal
      </div>

      {/* Mobile Menu Button onClick:User button click kare to arrow function execute hota hai.
        setMenuOpen(!menuOpen):Agar menuOpen false hai:!false -> true menu open hoga
        Agar menuOpen true hai:!true -> false menu close hoga. Isko "toggle" kehte hain. */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {/* Conditional RenderingTernary operator:condition ? valueIfTrue : valueIfFalse
          Agar menuOpen true: ✕
          Agar menuOpen false:☰*/}
        {menuOpen ? "✕" : "☰"}
      </button>
      {/* Template Literal / Dynamic classNam,className dynamically change ho rahi hai.
        Agar menuOpen true:"nav-links active". Agar menuOpen false:"nav-links"
        JavaScript expression JSX ke andar{ } mein likhi ja sakti hai.
        ${menuOpen ? "active" : ""}conditional class add/remove karta hai.*/}
      <ul
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        {/*  HOME */}
        <li>
          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>
        </li>
        {/* ABOUT */}
        <li>
          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
        </li>
        {/* SKILLS*/}
        <li>
          <a
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>
        </li>
        {/* PROJECTS*/}
        <li>
          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>
        {/*  CONTACT*/}
        <li>
          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
        {/* DARK / LIGHT MODE */}
        <li>
          <button
            className="theme-toggle"
            // Click par parent se mila setDarkMode function call hota hai.
            // !darkMode:true  -> false,false -> true ,Is tarah dark/light mode toggle hota hai.
            onClick={() => setDarkMode(!darkMode)}
          >
            {/*Ternary Operator / Conditional Rendering,darkMode true:☀️ show karo
            darkMode false: 🌙 show karo*/}
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
