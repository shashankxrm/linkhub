import Coffee from "../parts/BuyMeACofee";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Links from "../parts/Links";


const Tree = () => {
  const imgURL = "/dp.png"; //ENTER YOUR IMG URL HERE
  const name = "Shashank Reddy"; //ENTER YOUR FULL NAME HERE
  const bio = "Software/ FullStack Developer"; //ENTER YOUR BIO HERE

  return (
    <div className="">
      <div className="flex justify-center md:flex-row flex-col  ">
        <div className=" md:w-2/5 ">
          <div className="flex flex-row justify-between mt-6 px-2">
            <div className=" font-bold text-green-500 text-3xl  font-bricolage ">
              <span className=" text-gray-600">Link</span>Hub
            </div>
            <a href="https://github.com/shashankxrm/linkhub" target=" _blank">
              <div className="flex flex-row gap-1 p-2 bg-black/40 w-fit items-center rounded-lg font-medium text-white text-sm hover:bg-black/30 ">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <div>on Github</div>
              </div>
            </a>
          </div>

          <Header img={imgURL} name={name} bio={bio} />

          <div>
            <Links name="Portfolio" url="https://shashankxrm.vercel.app" />
            <Links name="Github" url="https://github.com/shashankxrm" />
            <Links name="LinkedIn" url="https://www.linkedin.com/in/shashankxrm" />
            <Links name="Blog" url="https://shashanksblog.hashnode.dev" />
          </div>
          <Footer />
        </div>
        <Coffee />
      </div>
    </div>
  );
};

export default Tree;
