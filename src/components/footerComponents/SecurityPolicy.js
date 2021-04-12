const Privacy = () => {
  return ( 
  <>

    <div class="bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-sm px-4 py-16 mx-auto rounded sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Welcome to the JobFull Security Center
            </h2>
            <p class="text-base text-gray-700 md:text-lg">JobFull is dedicated to providing the safest possible environment for you to search for jobs and manage your career. To assist with that goal, we ask that you keep a few simple security precautions in mind when evaluating job postings on JobFull and job opportunities that you may receive unsolicited via email.</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="border rounded shadow-sm">
            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
              <p class="text-lg font-medium">Data Collected</p>
              <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                {/* <!-- Add "transform rotate-180" classes on svg, if is open" --> */}
                <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200">
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
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
            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
              <p class="text-lg font-medium">Security of Your Personal Data</p>
              <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                </svg>
              </div>
            </button>
            {/* <!-- Show content if is open --> */}
            <div class="p-4 pt-0">
                  <p class="text-gray-700">The security of Your Personal Data is important to Us, but remember that no method of transmission 
                    over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially 
                    acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                  </p>
            </div>
          </div>
          <div class="border rounded shadow-sm">
            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
              <p class="text-lg font-medium">Children's Privacy</p>
              <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                </svg>
              </div>
            </button>
            {/* <!-- Show content if is open --> */}
            <div class="p-4 pt-0"><p class="text-gray-700">
                    Our Service does not address anyone under the age of 18. We do not knowingly collect personally 
                    identifiable information from anyone under the age of 13. If You are a parent or guardian and You 
                    are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware 
                    that We have collected Personal Data from anyone under the age of 13 without verification of parental 
                    consent, We take steps to remove that information from Our servers
            </p>
            </div>
          </div>
          <div class="border rounded shadow-sm">
            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
              <p class="text-lg font-medium">Links to Other Websites</p>
              <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                </svg>
              </div>
            </button>
            {/* <!-- Show content if is open --> */}
            <div class="p-4 pt-0"><p class="text-gray-700">
                    Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, 
                    You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site 
                    You visit.
                  </p>
                  <p>
                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third 
                    party sites or services.
                  </p></div>
          </div>
        </div>
      </div>
    </div>

  </>
  );
}

export default Privacy;