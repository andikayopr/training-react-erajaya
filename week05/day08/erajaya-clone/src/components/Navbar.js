import logo from "../logo.png";

export default function Navbar() {
  return (
    <nav className="bg-eraspace shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="h-8 mr-2" />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-4 px-2 font-semibold text-sm text-white hover:text-slate-300"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="py-4 px-2 font-semibold text-sm text-white hover:text-slate-300"
              >
                CORPORATE GOVERNANCE
              </a>
              <a
                href="#"
                className="py-4 px-2 font-semibold text-sm text-white hover:text-slate-300"
              >
                SUBSIDIARIES & AFFILIATES
              </a>
              <a
                href="#"
                className="py-4 px-2 font-semibold text-sm text-white hover:text-slate-300"
              >
                INVESTOR RELATIONS
              </a>
              <a
                href="#"
                className="py-4 px-2 font-semibold text-sm text-white hover:text-slate-300"
              >
                SOCIAL AND EVENTS
              </a>
              <a
                href=""
                className="py-4 px-2 font-semibold text-sm text-white hover:text-slate-30"
              >
                E-COMMERCE
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
  
  {
    /* ABOUT US
Company Profile
Vision & Mission
Awards
Milestones
Management Profile

CORPORATE GOVERNANCE
SUBSIDIARIES & AFFILIATES
INVESTOR RELATIONS
Financial Highlights
Financial Reports
Annual Reports
Investor Update
Prospectus
General Meeting of Shareholders
Stock Price Information

SOCIAL AND EVENTS
Newsroom
Social Responsibility
CSR Events
E-COMMERCE */
  }
}
