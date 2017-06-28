import { compose } from "redux";
import { createSelector } from "reselect";

export function entitiesSelector(key) {
  return state => state.data[key];
}

export function requestsSelector(key) {
  return state => state.requests[key];
}

export function idFromParamsSelector(_state, props) {
  return parseInt(props.match.params.id, 10)
}

const currentUserNotesSelector = createSelector(
  [entitiesSelector("notes"), entitiesSelector("currentUserId")],
  filterBy("user_id")
)

export const currentNoteSelector = createSelector(
  [currentUserNotesSelector],
  compose(first, sortBy("review_after"), isDue("review_after"))
);

export const currentUserSelector = createSelector(
  [entitiesSelector("users"), entitiesSelector("currentUserId")],
  pick
);

export const userFollowedSelector = createSelector(
  [entitiesSelector("users"), pickEntitiesByParams("userFollowed")],
  pick
);

export const userFollowersSelector = createSelector(
  [entitiesSelector("users"), pickEntitiesByParams("userFollowers")],
  pick
);

export const userSelector = pickEntitiesByParams("users")

export const userNotesSelector = createSelector(
  [entitiesSelector("notes"), idFromParamsSelector],
  filterBy("user_id")
)

// shortcut methods

function pickEntitiesByParams(key) {
  return createSelector(
    [entitiesSelector(key), idFromParamsSelector],
    pick
  );
}

// helpers

function filterBy(key) {
  return (obj, value) => {
    return Object.values(obj).filter(item => item[key] === value);
  };
}

function isDue(key) {
  return items => {
    const today = new Date;
    return items.filter(item => item[key] < today);
  }
}

function sortBy(key) {
  return items => items.sort(item => item[key]);
}

function first(items) {
  return items[0];
}

function pick(items = {}, idOrIds) {
  if (!Array.isArray(idOrIds))
    return items[idOrIds];

  return idOrIds.map(id => items[id]);
}
