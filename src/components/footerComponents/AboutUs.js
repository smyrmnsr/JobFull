const AboutUs = () => {
    return ( 
    <>
        <body class="bg-gray-200 font-sans leading-normal tracking-normal">

            <div 
                id="header" 
                class="bg-white fixed w-full z-10 top-0 hidden animated" 
                style={{ opacity: '.95'}}>
                <div class="bg-white">
                    <div class="flex flex-wrap items-center content-center">
                        <div class="flex w-1/2 justify-start text-white font-extrabold">
                            <a class="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2" href="#">
                                👻 <span class="hidden w-0 md:w-auto md:block pl-1">Ghostwind CSS</span>
                            </a>
                        </div>
                    </div>                
                </div>
            </div>

            <div 
                class="container w-full min-w-full mx-auto bg-white bg-cover mt-8 rounded" 
                style={{backgroundImage: 'url("https://images.unsplash.com/photo-1613645695025-20e3f38de4a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")', height: "35vh"}}>
            </div>

            <div class="container max-w-5xl mx-auto -mt-32">
                <div class="mx-0 sm:mx-6">
                    <div class="bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-sm text-base w-full p-8 md:p-24 text-l md:text-xl text-gray-800 leading-normal rounded">
                    <div class="flex flex-wrap">
                        <div class="w-full sm:w-8/12 mb-10">
                        <div class="container mx-auto h-full sm:p-10">
                            <nav class="flex px-4 justify-between items-center">
                            <div class="text-4xl font-bold">
                                JonbFull<span class="text-green-700">.</span>
                            </div>
                            </nav>
                            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                            <div class="w-full">
                                <h1 class="text-4xl lg:text-6xl font-bold">Find your <span class="text-green-700">greeny</span> stuff for your room</h1>
                                <div class="w-20 h-2 bg-green-700 my-4"></div>
                                <p class="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
                                <button class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
                            </div>
                            </header>
                        </div>
                        </div>
                    </div>                              
                    </div>
                </div>
            </div>
        </body>
    </>
    );
}

export default AboutUs;