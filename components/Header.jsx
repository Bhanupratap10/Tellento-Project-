import { Bell, LayoutGrid, Search, Plus, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-4 mt-4">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between px-6 py-4">
            
            {/* Logo section */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="logo"
                width={65}
                height={65}
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white">Tallento.ai</h1>
                <p className="text-xs md:text-sm text-zinc-400">Where AI Meets Ambition</p>
              </div>
            </div>

            {/* Navigation links (desktop) */}
            <nav className="hidden md:flex items-center gap-10 text-white font-medium">
              <div className="flex items-center gap-2 cursor-pointer hover:text-rose-400">
                <LayoutGrid className="h-6 w-6" /> Job Category
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-rose-400">
                <Search className="h-6 w-6" /> Find Jobs
              </div>
              <div className="relative flex items-center gap-2 cursor-pointer hover:text-rose-400">
                <Bell className="h-6 w-6" /> Notifications
                <span className="absolute -top-3 -right-4 bg-rose-500 text-xs font-bold text-white rounded-full px-2 py-0.5">
                  29
                </span>
              </div>
            </nav>

            {/* Right section */}
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              {/* Avatar + Post button (desktop) */}
              <div className="hidden md:flex items-center gap-4">
                <div className="rounded-full p-[2px] bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
                  <Image
                    src="/avatar.jpg"
                    alt="profile"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2 rounded-xl flex items-center gap-2 text-white font-semibold shadow-md">
                  <Plus className="h-5 w-5" /> Post a Job
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/50 backdrop-blur-xl rounded-b-2xl px-6 py-4 flex flex-col gap-4 text-white font-medium animate-slideDown">
              <div className="flex items-center gap-2 cursor-pointer hover:text-rose-400">
                <LayoutGrid className="h-5 w-5" /> Job Category
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-rose-400">
                <Search className="h-5 w-5" /> Find Jobs
              </div>
              <div className="relative flex items-center gap-2 cursor-pointer hover:text-rose-400">
                <Bell className="h-5 w-5" /> Notifications
                <span className="absolute -top-2 -right-3 bg-rose-500 text-xs font-bold text-white rounded-full px-2 py-0.5">
                  29
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="rounded-full p-[2px] bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
                  <Image
                    src="/avatar.jpg"
                    alt="profile"
                    width={38}
                    height={38}
                    className="rounded-full"
                  />
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 rounded-xl flex items-center gap-2 text-white font-semibold shadow-md">
                  <Plus className="h-5 w-5" /> Post a Job
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* simple animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
