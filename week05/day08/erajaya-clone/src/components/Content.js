import imgframework from "../assets/framework-2022.png";
import imgmap from "../assets/map-era.png";

export default function Content() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mx-auto my-10 py-8">
        <p className="text-4xl font-bold py-14">Our Strategic Framework</p>
        <img src={imgframework} alt="framework" />
      </section>

      <section className="flex flex-col justify-center items-center mx-auto my-10 py-8">
        <p className="text-4xl font-bold py-14">Explore Our Network</p>
        <div className="flex w-2/3 gap-3">
          <div className="bg-eraspace text-white py-4 px-4 rounded-lg flex-1 text-center">
            97 distribution centers
          </div>
          <div className="bg-eraspace text-white py-4 px-4 rounded-lg flex-1 text-center">
            1,447 retail outlets
          </div>
          <div className="bg-eraspace text-white py-4 px-4 rounded-lg flex-1 text-center">
            +/- 69,000+ 3 party billed outlets
          </div>
        </div>
        <div className="flex w-2/3 my-3">
          <p>Map of operations (as of 30 September 2022)</p>
        </div>
        <img src={imgmap} alt="map" className="max-w-5xl" />
      </section>

      <section className="flex flex-col justify-center items-center mx-auto my-10 py-8">
        <div className="flex flex w-2/3">
          <p className="flex-1 text-left">Erajaya Distribution Centers & Retail Area</p>
          <p className="flex-1 text-right">
            Erajaya Distribution Centres & Retail Areas Overseas
          </p>
        </div>
        <div className="bg-eraspace flex w-2/3 py-3 my-4 text-white rounded-lg shadow-lg">
          <div className="flex-1 text-center font-bold">AREA</div>
          <div className="flex-1 text-center font-bold">DISTRIBUTION</div>
          <div className="flex-1 text-center font-bold">RETAIL</div>
        </div>
        <div className="flex w-2/3 py-3 my-3 rounded-lg shadow-lg">
          <div className="flex-1 text-center font-bold">Java & Bali</div>
          <div className="flex-1 text-center">52</div>
          <div className="flex-1 text-center">972</div>
        </div>
        <div className="flex w-2/3 py-3 my-3 rounded-lg shadow-lg">
          <div className="flex-1 text-center font-bold">Sumatera</div>
          <div className="flex-1 text-center">24</div>
          <div className="flex-1 text-center">168</div>
        </div>
        <div className="flex w-2/3 py-3 my-3 rounded-lg shadow-lg">
          <div className="flex-1 text-center font-bold">Kalimantan</div>
          <div className="flex-1 text-center">8</div>
          <div className="flex-1 text-center">52</div>
        </div>
        <div className="flex w-2/3 py-3 my-3 rounded-lg shadow-lg">
          <div className="flex-1 text-center font-bold">Sulawesi & Others</div>
          <div className="flex-1 text-center">7</div>
          <div className="flex-1 text-center">79</div>
        </div>
        <div className="flex w-2/3 py-3 my-3 rounded-lg shadow-lg">
          <div className="flex-1 text-center font-bold">Sulawesi & Others</div>
          <div className="flex-1 text-center">6</div>
          <div className="flex-1 text-center">176</div>
        </div>
      </section>


    </>
  );
}
