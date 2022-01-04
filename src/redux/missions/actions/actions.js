export const LOAD_MISSION = 'space/missions/LOAD_MISSION';
export const MISSION_START = 'space/missions/MISSION_START';
export const MISSION_FAILED = 'space/missions/MISSION_FAILED';
export const JOIN_MISSION = 'space/missions/JOIN_MISSION';
export const LEAVE_MISSION = 'space/missions/LEAVE_MISSION';

export const loadMission = (payload) => ({
  type: LOAD_MISSION,
  payload,
});

export const loadingStart = () => ({
  type: MISSION_START,
});

export const manageFailure = (payload) => ({
  type: MISSION_FAILED,
  payload,
});
export const allowJoinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const allowLeaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});
