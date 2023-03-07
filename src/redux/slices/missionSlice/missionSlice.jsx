const MISSION = 'MISSION';

const initialState = {
  missions: [],
};

export const loadMission = (missions) => ({
  type: MISSION,
  missions,
});

const rocketReducer = (state = initialState, action) => {
  if (action.type === MISSION) {
    const tempMission = [];
    Object.entries(action.missions).forEach(([value]) => {
      tempMission.push({
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
  return {
    ...state,
  };
};

export default rocketReducer;
