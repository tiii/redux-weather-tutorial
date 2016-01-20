import { FETCH_WEATHER } from '../actions';

export default function reduceWeather(state = null, action) {
  switch(action.type) {
  case FETCH_WEATHER:
    return action.payload.data;
  }

  return state;
}
