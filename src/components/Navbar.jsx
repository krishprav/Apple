import Container from './Container';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists, navLinks } from '../constants';

const Navbar = () => {
  return (
    <header className="py-5 bg-slate-00">
      <Container>
        <nav className="flex justify-between items-center">
          <img src={appleImg} alt="Apple" width={14} height={18} />

          <div className="hidden sm:flex flex-2 justify-center">
            {navLists.map((nav) => (
              <a 
                key={nav} 
                href={navLinks[nav]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav}
              </a>
            ))}
          </div>

          <div className="flex items-baseline gap-7">
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;