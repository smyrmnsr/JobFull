const AboutUs = () => {
    return ( 
    <>
                <div class="flex flex-wrap items-center mt-32">
                <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 class="text-3xl mb-2 font-semibold leading-normal">
                    Working with us is a pleasure
                </h3>
                <p
                    class="text-lg font-bold leading-relaxed mt-4 mb-4 text-gray-300"
                >
                    Don't let your uses guess by attaching tooltips and popoves to
                    any element. Just make sure you enable them first via
                    JavaScript.
                </p>
                <p
                    class="text-lg font-bold leading-relaxed mt-0 mb-4 text-gray-300"
                >
                    The kit comes with three pre-built pages to help you get started
                    faster. You can change the text and images and you're good to
                    go. Just make sure you enable them first via JavaScript.
                </p>
                </div>
                <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div
                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-purple-600"
                >
                    <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                    class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative p-8 mb-4">
                    <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        class="absolute left-0 w-full block"
                        style={{height: '95px', top: '-94px'}}
                    >
                        <polygon
                        points="-30,95 583,95 583,65"
                        class="text-purple-600 fill-current"
                        ></polygon>
                    </svg>
                    <h4 class="text-xl font-bold text-white">
                        Top Notch Services
                    </h4>
                    <p class="text-md font-light mt-2 text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                    </p>
                    </blockquote>
                </div>
                </div>
            </div>
    </>
    );
}

export default AboutUs;