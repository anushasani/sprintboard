import { SprintList } from "./Data";
import { useState, useEffect } from "react";
import SelectedIdInfo from "./SelectedIdInfo";

const Sprint = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setselectedOptions] = useState("");

  useEffect(() => {
    setOptions(SprintList.sprints);
  }, []);

  let handleChange = (event) => {
    setselectedOptions(event.target.value);
  };

  return (
    <section>
      <div>
        <h1>Sprint List</h1>
        <label>Sprint ID :</label>
        <select value={selectedOptions} onChange={handleChange}>
          <option value={""}> Select</option>
          {options.map((current) => (
            <option value={current.id} key={current.id}>
              {current.id}
            </option>
          ))}
        </select>

        <SelectedIdInfo infoId={selectedOptions} />
      </div>
    </section>
  );
};
export default Sprint;
