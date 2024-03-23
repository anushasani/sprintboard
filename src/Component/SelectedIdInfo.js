import { useEffect, useState } from "react";
import { SprintList } from "./Data";

const SelectedIdInfo = (props) => {
  const { infoId } = props;
  console.log("infoId", infoId);

  const [sprintInfo, setsprintInfo] = useState([]);
  const [sprinttaskMap, setsprinttaskMap] = useState({});
  const [selectedTask, setSelectedTask] = useState([]);

  useEffect(() => {
    setsprintInfo(SprintList.sprints);
    let map = {};
    SprintList.sprints.forEach((sprint, index) => {
      console.log("sprints", sprint);
      map[sprint.id] = sprint.tasks;
    });
    console.log("map *", map);
    console.log("infoId +", infoId, map[infoId]);

    setsprinttaskMap(map);
    setSelectedTask(map[infoId]);
  }, [infoId]);

  console.log("sprinttaskMap", sprinttaskMap);
  console.log("selectedTask", selectedTask);

  if (!infoId) {
    return;
  }

  return (
    <div>
      {sprintInfo.map(
        (info) =>
          info.id === infoId && (
            <div className="dataDisplay" key={info.id}>
              <div> {"SprintName : " + info.name}</div>
              <div>{"Start Date :" + info.startDate}</div>
              <div>{"End Date : " + info.endDate}</div>
            </div>
          )
      )}
      <select>
        {selectedTask?.map((info) => (
          <option>{info.id}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectedIdInfo;
