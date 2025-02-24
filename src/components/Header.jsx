const Header = () => {
  return (
    <header className="h-[3rem] bg-gray-500 w-full text-center flex items-center justify-between px-8 py-4">
      <div className="logo">Logo</div>
      <nav className="nav flex gap-4">
        <a href="/">Home</a>
        <a href="/customizer">Customizer</a>
      </nav>
      <a href="/Customizer" className="cart bg-white p-2 px-6 font-semibold">Customize</a>
    </header>
  );
};

export default Header;