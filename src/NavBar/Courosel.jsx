import Img1 from "../assets/photos/pic1.jpg";
import Img2 from "../assets/photos/pic2.jpg";
import Img3 from "../assets/photos/pic3.jpg";
import Img4 from "../assets/photos/pic4.jpg";
import ImgDataOne from "./ImgDataOne";


const Courosel = () => {
  return (
    <div className="carousel w-full absolute top-0">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Img1} className="w-full h-[500px]" alt="logo1" />
        <ImgDataOne
          title="Scale"
          maintext={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis architecto voluptas esse eaque. Repudiandae culpa fuga reprehenderit dolore placeat?"
          }
          subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis!"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Img2} className="w-full h-[500px] " alt="logo" />
        <ImgDataOne
          title="Accelerate"
          maintext={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis architecto voluptas esse eaque. Repudiandae culpa fuga reprehenderit dolore placeat?"
          }
          subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis!"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Img3} className="w-full h-[500px]" alt="logo3" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={Img4} className="w-full h-[500px] " alt="logo4" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courosel;
