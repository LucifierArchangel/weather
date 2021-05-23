const startState = {
  city: "",
  coord: { latitude: 0, longitude: 0 },

  chosenTimeBar: 0,
  weatherMap: false,
};
//[ {
//   dt: 0,
//   icon: 0,
//   temp: 0,
//   feels_like: 0,
//   clouds: 0,
//   pressure: 0,
//   humidity: 0,
//   windSpeed: 0,
//   windGust: 0,
// }],

export const reducer = function (state = startState, { type, payload }) {
  switch (type) {
    case "addWeather":
      console.log("ADD", payload);
      return { ...state, weatherMap: payload };
    case "changeCityName":
      return { ...state, city: payload };
    case "changeCoord":
      return { ...state, coord: payload };
    case "changeTimeMode":
      return { ...state, timeMode: payload };
    case "changeChosenTimeBar":
      return { ...state, chosenTimeBar: payload };
    default:
      return state;
  }
};
