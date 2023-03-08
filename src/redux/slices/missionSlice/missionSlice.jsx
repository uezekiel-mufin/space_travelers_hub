const MISSION = 'MISSION';
const JOIN_MISSION = 'JOIN_MISSION';

const initialState = {
  missions: [],
};

export const loadMission = (missions) => ({
  type: MISSION,
  missions,
});

export const joinMission = (missions) => ({
  type: JOIN_MISSION,
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

  if (action.type === JOIN_MISSION) {
    const newState = { ...state };
    const newMissions = state.missions.map((mission) => {
      if (mission.mission_id !== action.missions) return mission;
      return { ...mission, reserved: true };
    });
    newState.missions = newMissions;
    return newState;
  }
  return state;
};

export default missionReducer;
