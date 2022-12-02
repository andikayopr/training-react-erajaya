import banner from "../assets/our-business-banner.jpg";

export default function Hero() {
  return (
    <section>
      <div className="flex h-screen justify-center items-center flex-col">
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
            <div className="mr-auto ml-60 place-self-center">
              <h1 className="max-w-2xl mb-4 mt-40 px-5 ml-10 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Market leader with nationwide omnichannel network
              </h1>
              <p className="max-w-2xl mb-6 font-light px-5 ml-10 text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Our vast network of channel to deliver the best personalized and
                innovative experience to customer
              </p>
              <a
                href="#"
                className="inline-flex border items-center px-5 py-3 ml-14 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Explore
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
