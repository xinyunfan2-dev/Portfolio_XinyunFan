function Navbar() {
  return (
    <nav className="nav-type border-b border-[var(--line)] leading-none">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-5 px-6 py-5 sm:px-8 md:py-6">
        <div>
          <a href="#top" className="font-serif text-lg">
            Xinyun Fan
          </a>
        </div>

        <div className="flex basis-full justify-between gap-x-3 gap-y-3 text-sm text-[var(--muted)] sm:basis-auto sm:justify-start sm:gap-7">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blogs</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contacts</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
