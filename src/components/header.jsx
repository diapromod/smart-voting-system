import { LogOut } from 'lucide-react';

function Header() {
  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-3xl font-bold text-blue-900">Hello Admin</h1>
      <button className="bg-blue-900 text-white px-4 py-2 rounded-md flex items-center gap-2">
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}

export default Header;