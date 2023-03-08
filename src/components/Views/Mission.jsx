// import { useState } from "react";
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/slices/missionSlice/missionSlice';

const Mission = (mission) => {
  // const [mainUrl, setMainUrl] = useState('1');
  const {
    missionId,
    missionName,
    description,
  } = mission;
  const dispatch = useDispatch();

  return (
    <tr className="odd:bg-zinc-200 even:bg-white">
      <td className="border px-4 py-2">{missionName}</td>
      <td className="border px-4 py-2">{description}</td>
      <td className="border px-4 py-2">
        <button
          className="bg-gray-500 text-white rounded text-xs px-4 border"
          type="button"
        >
          NOT A MEMBER
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          type="button"
          className="bg-transparent text-black rounded text-xs py-1 px-5 border border-gray-400"
          onClick={() => dispatch(joinMission(missionId))}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

export default Mission;
