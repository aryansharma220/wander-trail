import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { Menu, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      });
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    navigate("/");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Travel Blogs" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  const userLinks = [
    { href: "/create-trip", label: "+ Create Trip" },
    { href: "/my-trips", label: "My Trips" },
  ];

  return (
    <div className="relative">
      <div className="p-1 xs:p-2 shadow-sm flex justify-between items-center px-2 xs:px-5">
        <a href="/" className="flex items-center justify-center gap-1 xs:gap-2">
          <img className="object-contain w-[40px] xs:w-[70px] h-[40px] xs:h-[70px]" src="/logo.webp" alt="logo" />
          <span className="text-lg xs:text-2xl text-violet-500 font-mono">Wander Trail</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <Button variant="outline" className="rounded-full">
                {link.label}
              </Button>
            </a>
          ))}
        </div>

        {/* Desktop User Section */}
        <div className="hidden lg:block">
          {users ? (
            <div className="flex items-center gap-3">
              {userLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  <Button variant="outline" className="rounded-full">
                    {link.label}
                  </Button>
                </a>
              ))}
              <Popover>
                <PopoverTrigger>
                  <img
                    src={users?.picture}
                    className="h-[35px] w-[35px] rounded-full"
                    alt="User Avatar"
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <h2 onClick={handleLogout} className="cursor-pointer">
                    Logout
                  </h2>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden p-1 xs:p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-2 xs:py-4 px-3 xs:px-6 flex flex-col gap-2 xs:gap-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button variant="outline" className="w-full rounded-full">
              {link.label}
            </Button>
          </a>
        ))}
        
        {users ? (
          <>
            {userLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="w-full rounded-full">
                  {link.label}
                </Button>
              </a>
            ))}
            <div className="flex items-center gap-3 justify-between">
              <img
                src={users?.picture}
                className="h-[35px] w-[35px] rounded-full"
                alt="User Avatar"
              />
              <Button
                variant="outline"
                className="flex-1 rounded-full"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <Button
            className="w-full"
            onClick={() => {
              setOpenDialog(true);
              setIsMenuOpen(false);
            }}
          >
            Sign In
          </Button>
        )}
      </div>

      {/* Sign In Dialog */}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img className="w-48" src="src/assets/logo.png" alt="" />
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <p>Sign in to the App with Google authentication securely</p>

              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" /> Sign in With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;