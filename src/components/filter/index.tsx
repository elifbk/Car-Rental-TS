import ReactSelect from "react-select";
import { fuels } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params, setParams] = useSearchParams();

  const selected = {
    label: params.get("fuel_type"),
    value: params.get("fuel_type"),
  };

  return (
    <div>
      <ReactSelect
        onChange={(e) => {
          params.set("fuel_type", e?.value as string);

          setParams(params);
        }}
        options={fuels}
        className="w-30 py-[6px] px-2 rounded-[4px] shadow text-black"
        placeholder="Yakıt Tipi"
        // defaultValue={selected}
      />
    </div>
  );
};

export default Filter;
