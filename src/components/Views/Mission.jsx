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
    <tr className="odd:bg-[#eeeeee] even:bg-white">
      <td className="border px-4 py-2 font-bold">{missionName}</td>
      <td className="border px-4 py-2">{description}</td>
      <td className="border w-[6rem] py-2">
        <button
          className={`bg-gray-500  text-white rounded text-xs border-transparent ${
            reserved === true
              ? 'bg-[#2ba6b1] border-white-700 border text-white'
              : 'bg-gray-500 text-white'
          }`}
          type="button"
        >
          {reserved === true ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      <td className="border py-2 w-[7rem]">
        <button
          type="button"
          className={`bg-transparent rounded text-xs py-1 px-3 border ${
            reserved === true
              ? 'bg-transparent border-red-400 border text-rose-500'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          onClick={reserveclick}
        >
          {reserved === true ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

export default Mission;
