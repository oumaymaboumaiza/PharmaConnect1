import { Link } from 'react-router-dom';

const SidebarItem = ({ path, icon, label, badge, active }) => {
  return (
    <li>
      <Link
        to={path}
        className={`flex items-center p-2 rounded-md hover:bg-gray-800 ${
          active ? 'bg-gray-800' : ''
        }`}
      >
        <span className="mr-3">{icon}</span>
        <span className="flex-1">{label}</span>
        {badge && (
          <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
      </Link>
    </li>
  );
};

export default SidebarItem;