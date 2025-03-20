import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Phone, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Branding Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-400">Match</h2>
          <p className="mt-2">Connecting students with expert tutors for personalized learning experiences.</p>
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-blue-400" />
            <Twitter className="cursor-pointer hover:text-blue-400" />
            <Instagram className="cursor-pointer hover:text-blue-400" />
            <LinkedIn className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Find a Tutor</a></li>
            <li><a href="#" className="hover:text-blue-400">For Students</a></li>
            <li><a href="#" className="hover:text-blue-400">For Tutors</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Subjects */}
        <div>
          <h3 className="font-semibold text-white">Subjects</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-400">Mathematics</a></li>
            <li><a href="#" className="hover:text-blue-400">Science</a></li>
            <li><a href="#" className="hover:text-blue-400">English</a></li>
            <li><a href="#" className="hover:text-blue-400">Programming</a></li>
            <li><a href="#" className="hover:text-blue-400">Languages</a></li>
            <li><a href="#" className="hover:text-blue-400">Test Prep</a></li>
          </ul>
        </div>

        {/* Contact Info & Subscription */}
        <div>
          <h3 className="font-semibold text-white">Contact Us</h3>
          <div className="mt-2 space-y-2">
            <p className="flex items-center gap-2"><LocationOn /> 123 Education St, Sydney, NSW</p>
            <p className="flex items-center gap-2"><Phone /> (02) 1234 5678</p>
            <p className="flex items-center gap-2"><Email /> info@tutormatch.com</p>
          </div>
          <div className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-gray-300 outline-none border border-gray-700"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
        © 2025 TutorMatch. All rights reserved. 
        <span className="mx-2">|</span> 
        <a href="#" className="hover:text-blue-400">Terms of Service</a> 
        <span className="mx-2">|</span> 
        <a href="#" className="hover:text-blue-400">Privacy Policy</a>
      </div>
    </footer>
  );
}
