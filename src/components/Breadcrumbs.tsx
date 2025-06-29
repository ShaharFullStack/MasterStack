import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="bg-slate-900/40 backdrop-blur-md py-6 px-4 border-b border-slate-700/30 relative">
      <div className="container mx-auto relative z-10">
        <ol className="flex items-center space-x-3 space-x-reverse text-sm">
          <li>
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-700/30 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">בית</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500 mx-3" />
              {item.current ? (
                <span className="text-cyan-400 font-semibold bg-cyan-400/10 px-3 py-2 rounded-lg border border-cyan-400/20">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.href || "#"}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-slate-700/30 font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
