import { CarType } from "../../types";
import generateImage from "../../utils/generateImage";

const Images = ({ car }: { car: CarType }) => {
  return (
    <div className="flex-1 flex-col gap-3">
      {/* büyük resim */}
      <div className="w-full h-40 bg-pattern bg-center rounded-lg">
        <img
          className="h-full mx-auto object-contain"
          src={generateImage(car)}
          alt="car standing diagonally"
        />
      </div>

      {/* küçük resimler */}
      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="mx-auto object-contain min-w-[146px]"
            src={generateImage(car, "29")}
            alt="car standing front"
          />
        </div>

        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="mx-auto object-contain min-w-[146px]"
            src={generateImage(car, "33")}
            alt="car from upside"
          />
        </div>

        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="mx-auto object-contain min-w-[146px]"
            src={generateImage(car, "13")}
            alt="car standing back"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
