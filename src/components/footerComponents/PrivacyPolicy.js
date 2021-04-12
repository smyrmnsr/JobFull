const Privacy = () => {
    return ( 
    <>

      <div class="bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-sm px-4 py-16 mx-auto rounded sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="flex flex-col mb-16 sm:text-center">
            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                This privacy policy governs the privacy of this website and it’s users who choose to use it.
              </h2>
              <p class="text-base text-gray-700 md:text-lg">The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy.</p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="border rounded shadow-sm">
              <button 
                type="button" 
                aria-label="Open item" 
                title="Open item" 
                class="flex items-center justify-between w-full p-4 focus:outline-none">
                <p class="text-lg font-medium">Data Collected</p>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                  {/* <!-- Add "transform rotate-180" classes on svg, if is open" --> */}
                  <svg 
                    viewBox="0 0 24 24" 
                    class="w-3 text-gray-600 transition-transform duration-200">
                    <polyline 
                      fill="none" 
                      stroke="currentColor" 
                      stroke-width="2" 
                      stroke-linecap="round" 
                      stroke-miterlimit="10" 
                      points="2,7 12,17 22,7" 
                      stroke-linejoin="round">
                    </polyline>
                  </svg>
                </div>
              </button>
              {/* <!-- Show content if is open --> */}
              <div class="p-4 pt-0"><p class="text-gray-700">For example, we collect information when you create an account, 
                  subscribe, participate in any interactive features of our services, 
                  fill out a form, request customer support or otherwise communicate with us. 
                  The types of information we may collect include your name, email address, 
                  postal address, credit card information and other contact or identifying 
                  information you choose to provide.</p></div>
            </div>
            <div class="border rounded shadow-sm">
              <button 
                type="button" 
                aria-label="Open item" 
                title="Open item" 
                class="flex items-center justify-between w-full p-4 focus:outline-none">
                <p class="text-lg font-medium">Anonymous data</p>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg 
                    viewBox="0 0 24 24" 
                    class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                    <polyline 
                      fill="none" 
                      stroke="currentColor" 
                      stroke-width="2" 
                      stroke-linecap="round" 
                      stroke-miterlimit="10" 
                      points="2,7 12,17 22,7" 
                      stroke-linejoin="round">
                    </polyline>
                  </svg>
                </div>
              </button>
              {/* <!-- Show content if is open --> */}
              <div class="p-4 pt-0"><p class="text-gray-700"><p>We collect anonymous data from every visitor of the Website to monitor traffic 
                    and fix bugs.For example, we collect information like web requests, the data sent 
                    in response to such requests,the Internet Protocol address, the browser type, the 
                    browser language, and a timestamp for the request.
                  </p>
                  <p>We also use various technologies to collect information, and this may include sending 
                    cookies to your computer.We may also collect information using web beacons (also known 
                    as "tracking pixels"). Web beacons are electronic images that may be used in our services 
                    or emails and to track count visits or understand usage and campaign effectiveness.
                  </p></p></div>
            </div>
            <div class="border rounded shadow-sm">
              <button 
                type="button" 
                aria-label="Open item" 
                title="Open item" 
                class="flex items-center justify-between w-full p-4 focus:outline-none">
                <p class="text-lg font-medium">Use of the Data</p>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg 
                    viewBox="0 0 24 24" 
                    class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                      <polyline 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-miterlimit="10" 
                        points="2,7 12,17 22,7" 
                        stroke-linejoin="round">
                      </polyline>
                  </svg>
                </div>
              </button>
              {/* <!-- Show content if is open --> */}
              <div class="p-4 pt-0"><p class="text-gray-700">
                  <p>We only use your personal information to provide you the <span class="website_name">Jobfull</span> 
                    services or to communicate with you about the Website or the services.
                  </p>
                  <p>We employ industry standard techniques to protect against unauthorized 
                    access of data about you that we store,including personal information.
                  </p>
                  <p>We do not share personal information you have provided to us without your consent, unless: 
                  </p></p></div>
            </div>
            <div class="border rounded shadow-sm">
              <button 
                type="button" 
                aria-label="Open item" 
                title="Open item" 
                class="flex items-center justify-between w-full p-4 focus:outline-none">
                <p class="text-lg font-medium">Sharing of Data</p>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg 
                    viewBox="0 0 24 24" 
                    class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                    <polyline 
                      fill="none" 
                      stroke="currentColor" 
                      stroke-width="2" 
                      stroke-linecap="round" 
                      stroke-miterlimit="10" 
                      points="2,7 12,17 22,7" 
                      stroke-linejoin="round">
                    </polyline>
                  </svg>
                </div>
              </button>
              {/* <!-- Show content if is open --> */}
              <div class="p-4 pt-0"><p class="text-gray-700"><p>We don't share your personal information with third parties. Aggregated, 
                    anonymized data is periodically transmitted to external services to help us 
                    improve the Website and service.
                  </p>
                  <p>We may allow third parties to provide analytics services. These third parties 
                    may use cookies, web beacons and other technologies to collect information about 
                    your use of the services and other websites, including your IP address, web browser,
                    pages viewed, time spent on pages, links clicked and conversion information.
                  </p></p></div>
            </div>
          </div>
        </div>
      </div>

    </>
    );
}

export default Privacy;