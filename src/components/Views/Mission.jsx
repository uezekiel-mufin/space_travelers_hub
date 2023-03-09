import { useDispatch } from 'react-redux';
import {
  joinMission,
  cancelMission,
} from '../../redux/slices/missionSlice/missionSlice';

const Mission = (mission) => {
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
      <td className="border px-4 py-2 line-clamp-2 sm:line-clamp-3 md:line-clamp-5 lg:line-clamp-none w-full">
        {description}
      </td>
      <td className="border px-4 py-2 w-[8rem]">
        <button
          className={`text-white rounded text-xs px-1 border-transparent ${
            reserved === true
              ? 'bg-[#2ba6b1] border-white-700 border text-white'
              : 'bg-gray-500 text-white'
          }`}
          type="button"
        >
          {reserved === true ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      <td className="border px-4 py-2 w-[9rem]">
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
