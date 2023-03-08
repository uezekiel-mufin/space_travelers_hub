// import { useState } from "react";
import { useDispatch } from 'react-redux';
import { joinMission, cancelMission } from '../../redux/slices/missionSlice/missionSlice';

const Mission = (mission) => {
  // const [mainUrl, setMainUrl] = useState('1');
  const {
    reserved,
    missionId,
    missionName,
    description,
  } = mission;
  const dispatch = useDispatch();
  const reserveclick = () => {
    if (reserved === true) {
      dispatch(cancelMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };
  return (
    <tr className="odd:bg-zinc-200 even:bg-white">
      <td className="border px-4 py-2">{missionName}</td>
      <td className="border px-4 py-2">{description}</td>
      <td className="border px-4 py-2">
        <button
          className={`bg-gray-500 text-white rounded text-xs px-4 border ${
            reserved === true
              ? 'bg-teal-500 border-white-700 border text-white'
              : 'bg-gray-500 text-white'
          }`}
          type="button"
        >
          {reserved === true ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          type="button"
          className="bg-transparent text-black rounded text-xs py-1 px-5 border border-gray-400"
          onClick={reserveclick}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

export default Mission;
