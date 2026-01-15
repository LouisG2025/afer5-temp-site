function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-8 px-4 sm:px-6 lg:px-8">
      <header className="w-full max-w-3xl mb-8">
        <div className="bg-[#101827] rounded-full flex items-center justify-between px-6 sm:px-8 py-4 shadow-md">
          <img src="/main_short_whtie_logo.png" alt="After5" className="h-12 sm:h-16 w-auto" />
          <div className="text-sm text-gray-300">Coming Soon</div>
          <a
            href="https://cal.com/after5/30-min-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 bg-[#28ffa1] text-gray-900 font-medium rounded-full hover:bg-[#1fe892] transition-colors text-sm whitespace-nowrap"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="w-full max-w-3xl">
        <div className="bg-[#101827] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-md mb-8 px-4 sm:px-0">
          <section className="mb-8 flex flex-col items-center text-center">
            <img src="/long_main_logo.png" alt="After5 Digital" className="h-48 sm:h-60 w-auto mb-4" />

            <h2 className="text-lg sm:text-xl text-gray-300 mb-8 font-light">
              Software that helps businesses respond, qualify, and manage enquiries automatically.
            </h2>

            <p className="text-base text-gray-400 leading-relaxed mb-8">
              After5 builds conversation and workflow software that helps businesses handle inbound enquiries more effectively.
              We focus on response speed, qualification, and clean handover.
              No advertising. No lead generation. Just software.
            </p>

            <div className="inline-block px-4 py-2 bg-gray-900 rounded-lg">
              <p className="text-sm text-gray-300 animate-pulse-slow">
                Launching <span className="font-bold text-[#28ffa1]">February 1st</span>. Early access available.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-6 text-center">
              What We Do
            </h3>

            <ul className="space-y-4 mx-auto max-w-md">
              <li className="text-base text-gray-300 flex items-start">
                <span className="text-[#28ffa1] mr-3 mt-1">•</span>
                <span>
                  <span className="text-[#28ffa1] font-semibold">Instant responses</span> across WhatsApp, SMS, and email
                </span>
              </li>
              <li className="text-base text-gray-300 flex items-start">
                <span className="text-[#28ffa1] mr-3 mt-1">•</span>
                <span>
                  <span className="text-[#28ffa1] font-semibold">Automated qualification</span> and routing
                </span>
              </li>
              <li className="text-base text-gray-300 flex items-start">
                <span className="text-[#28ffa1] mr-3 mt-1">•</span>
                <span>
                  <span className="text-[#28ffa1] font-semibold">Structured handover</span> to sales teams
                </span>
              </li>
              <li className="text-base text-gray-300 flex items-start">
                <span className="text-[#28ffa1] mr-3 mt-1">•</span>
                <span>
                  Designed for <span className="text-[#28ffa1] font-semibold">real business workflows</span>
                </span>
              </li>
            </ul>
          </section>

          <section className="flex justify-center">
            <a
              href="https://cal.com/after5/30-min-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 sm:px-12 py-3 bg-[#28ffa1] text-gray-900 font-medium rounded-full hover:bg-[#1fe892] transition-colors"
            >
              Book a discovery call
            </a>
          </section>
        </div>

        <footer className="w-full max-w-3xl mx-auto mt-8 px-4 sm:px-0">
          <div className="bg-[#101827] rounded-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-10 py-6 shadow-md">
            <img src="/main_short_whtie_logo.png" alt="After5" className="h-10 sm:h-12 w-auto" />
            <div className="text-xs sm:text-sm text-gray-300">
              © 2026 After5 Digital. All rights reserved.
            </div>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="mailto:info@after5.digital"
                className="text-xs sm:text-sm text-gray-300 hover:text-[#28ffa1] transition-colors"
              >
                info@after5.digital
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-[#28ffa1] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
