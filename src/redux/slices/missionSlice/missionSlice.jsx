const MISSION = 'MISSION';

const initialState = {
  missions: [],
};

export const loadMission = (missions) => ({
  type: MISSION,
  missions,
});

const missionReducer = (state = initialState, action) => {
  if (action.type === MISSION) {
    const tempMission = [];
    Object.entries(action.missions).forEach(([key, value]) => {
      tempMission.push({
        id: key,
        mission_id: value.mission_id,
        mission_name: value.mission_name,
        description: value.description,
      });
    });

    return {
      ...state,
      missions: tempMission,
    };
  }
  return state;
};

export default missionReducer;
