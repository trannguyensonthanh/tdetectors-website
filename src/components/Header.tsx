import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import ptithcmLogo from '@/assets/ptithcm-logo.png';
import { useTheme } from './theme/ThemeProvider';

const navigation = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Vấn đề', href: '/problem' },
  { name: 'Thách thức', href: '/challenges' },
  { name: 'Giải pháp', href: '/solution' },
  { name: 'Kiến trúc', href: '/architecture' },
  { name: 'Dữ liệu', href: '/data' },
  {
    name: 'Công nghệ',
    href: '/technology',
    submenu: [
      { name: 'YOLOv12', href: '/yolo' },
      { name: 'BoT-SORT', href: '/botsort' },
      { name: 'Vision Transformer', href: '/vit' },
      { name: 'Triplet Loss', href: '/triplet-loss' },
      { name: 'Faiss Index', href: '/faiss' },
      { name: 'OpenVINO', href: '/openvino' },
    ],
  },
  { name: 'Kết quả', href: '/results' },
  { name: 'Tương lai', href: '/future' },
  { name: 'Demo', href: '/demo' },
  { name: 'Đội ngũ', href: '/team' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [techMenuOpen, setTechMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setTechMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={ptithcmLogo}
              alt="PTITHCM Logo"
              className="h-10 w-10 lg:h-12 lg:w-12 transition-transform group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <div className="text-lg lg:text-xl font-heading font-bold text-foreground">
                TDETECTORS
              </div>
              <div className="text-xs text-muted-foreground">PTITHCM</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setTechMenuOpen(true)}
                  onMouseLeave={() => setTechMenuOpen(false)}
                >
                  <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </button>
                  {techMenuOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-card border border-border overflow-hidden animate-fade-in">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          to={subitem.href}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            location.pathname === subitem.href
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                          }`}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          {/* Theme Toggle & Mobile menu button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              title="Chuyển đổi giao diện"
              className="relative inline-flex items-center justify-center w-10 h-10 p-1 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="sr-only">Toggle theme</span>

              {/* Sun (light) */}
              <Sun
                className={`h-5 w-5 text-foreground transition-transform duration-300 ${
                  theme === 'dark'
                    ? 'translate-y-2 opacity-0 scale-90'
                    : 'translate-y-0 opacity-100 scale-100'
                }`}
                aria-hidden="true"
              />

              {/* Moon (dark) */}
              <Moon
                className={`absolute h-5 w-5 text-foreground transition-transform duration-300 ${
                  theme === 'dark'
                    ? 'translate-y-0 opacity-100 scale-100'
                    : '-translate-y-2 opacity-0 scale-90'
                }`}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigation.map((item) =>
              item.submenu ? (
                <div key={item.name}>
                  <button
                    className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground"
                    onClick={() => setTechMenuOpen(!techMenuOpen)}
                  >
                    {item.name}
                  </button>
                  {techMenuOpen && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          to={subitem.href}
                          className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                            location.pathname === subitem.href
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:bg-secondary'
                          }`}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
