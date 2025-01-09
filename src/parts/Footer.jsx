const Footer = () => {
  return (
    <div className=" mt-10 mb-3">
      <div className="flex flex-col items-center font-semibold text-gray-600">
        <a
          href="https://github.com/shashankxrm/linkhub/blob/master/README.md"
          target="_blank"
        >
          <div className="bg-black/70 cursor-pointer hover:bg-black/60 font-semibold text-white rounded-lg p-2 mb-5">
            Make your Link<span className=" text-green-500">Hub</span>
          </div>
        </a>
        <div>Let&apos;s get connected!</div>
        <div>©2024 LinkHub || All Rights Reserved</div>
        <div>
          Made by{" "}
          <a
            href="https://github.com/shashankxrm"
            target=" _blank"
            className="text-green-500"
          >
            Shashank Reddy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
