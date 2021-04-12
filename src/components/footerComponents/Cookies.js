const Cookies = () => {
  return ( 
  <>

    <div class="bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-sm px-4 py-16 mx-auto rounded sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Cookies Consent
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
                  We use Cookies and similar tracking technologies to track the activity on Our Service 
                  and store certain information. Tracking technologies used are beacons, tags, and scripts 
                  to collect and track information and to improve and analyze our Service. The technologies 
                  We use may include: </p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="border rounded shadow-sm">
            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
              <p class="text-lg font-medium">Cookies or Browser Cookies</p>
              <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                {/* <!-- Add "transform rotate-180" classes on svg, if is open" --> */}
                <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200">
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                </svg>
              </div>
            </button>
            {/* <!-- Show content if is open --> */}
            <div class="p-4 pt-0"><p class="text-gray-700">A cookie is a small file placed on Your Device. You can instruct 
                    Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, 
                    if You do not accept Cookies, You may not be able to use some parts of our Service. 
                    Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service 
                    may use Cookies.</p></div>
          </div>
          <div class="border rounded shadow-sm">
            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
              <p class="text-lg font-medium">Flash Cookies</p>
              <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                </svg>
              </div>
            </button>
            {/* <!-- Show content if is open --> */}
            <div class="p-4 pt-0">
                  <p class="text-gray-700">
                    Certain features of our Service may use local stored objects (or Flash Cookies) to collect 
                    and store information about Your preferences or Your activity on our Service. Flash Cookies are 
                    not managed by the same browser settings as those used for Browser Cookies.
                  </p>
            </div>
          </div>
          <div class="border rounded shadow-sm">
            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
              <p class="text-lg font-medium">Web Beacons</p>
              <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                </svg>
              </div>
            </button>
            {/* <!-- Show content if is open --> */}
            <div class="p-4 pt-0"><p class="text-gray-700">
                    Certain sections of our Service and our emails may contain small electronic files 
                    known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) 
                    that permit the Company, for example, to count users who have visited those pages or opened 
                    an email and for other related website statistics (for example, recording the popularity of 
                    a certain section and verifying system and server integrity).
            </p>
            </div>
          </div>
          <div class="border rounded shadow-sm">
            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
              <p class="text-lg font-medium">Session Cookies</p>
              <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                </svg>
              </div>
            </button>
            {/* <!-- Show content if is open --> */}
            <div class="p-4 pt-0"><p class="text-gray-700">
              These Cookies are essential to provide You with services available through the Website and to 
              enable You to use some of its features. They help to authenticate users and prevent fraudulent use 
              of user accounts. Without these Cookies, the services that You have asked for cannot be provided, 
              and We only use these Cookies to provide You with those services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
  );
}

export default Cookies;