import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Year = () => {
  const [params, setParams] = useSearchParams();
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    params.set("year", value);

    setParams(params);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        defaultValue={params.get("year") as string}
        className="w-24 py-[6px] px-2 rounded-[4px] shadow text-black"
        placeholder="ör: 2023"
        type="text"
      />
      <button type="submit">
        <img src="/right-arrow.svg" alt="white color arrow facing right" />
      </button>
    </form>
  );
};

export default Year;
