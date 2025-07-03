import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, id: string) => {
    setIsOpen(false);
    e.preventDefault();
    scrollToId(id);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -128;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className="
          hidden sm:flex
          w-full
          fixed
          h-16
          px-4 sm:px-8 md:px-16 lg:px-24 2lg:px-32
          flex-row justify-between items-center
          bg-black/20 backdrop-blur-3xl
          text-white
          z-50
          border-gradient-white-bottom
        "
      >
        <h4 className="font-family-audrey font-normal text-2xl">PORTFOIO</h4>
        <div className="flex flex-row gap-0 md:gap-2 lg:gap-4">
          {["about", "skill", "project", "internship", "contact"].map((id) => (
            <a
              key={id}
              onClick={(e) => handleClick(e, id)}
              className="rounded-md px-2 h-full cursor-pointer"
            >
              {id.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`
          flex flex-col sm:hidden
          w-full max-w-screen-sm mx-auto
          fixed
          text-white z-50
          backdrop-blur-3xl
          border-gradient-white-bottom
          transition-all duration-500
          ${isOpen ? "min-h-screen" : "h-fit"}
        `}
      >
        <div
          className={`
            flex flex-row
            h-16 w-full
            px-12
            justify-between items-center
            bg-black/20
            ${isOpen ? "border-b border-white/10" : ""}
          `}
        >
          <h4 className="font-family-audrey font-normal text-2xl">PORTFOIO</h4>
          <img
            src="/icons/menu-burger.svg"
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer"
            alt="menu"
          />
        </div>

        <div
          className={`
            flex flex-1 flex-col items-center h-full bg-black/20
            transition-opacity duration-1000 ease-in-out
            ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none h-0"}
          `}
        >
          {["about", "skill", "project", "internship", "contact"].map((id) => (
            <a
              key={id}
              onClick={(e) => handleClick(e, id)}
              className={`
                flex items-center px-4 w-full justify-center
                border-white/5
                overflow-hidden
                ${isOpen ? "h-16 border-b" : "h-0 border-none"}
                cursor-pointer
              `}
            >
              {id.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
