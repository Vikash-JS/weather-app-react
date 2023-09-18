const API_KEY = "13ff76d747f32405258ae02a2226a29e";

export const fetchWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      console.log(response, ` ----> respone `);
      const data = await response.json();
      console.log(`weather data -->`, data);
      dispatch({
        type: "FETCH_WEATHER",
        payload: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchLocation = (city) => {
  return async (dispatch, getState) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((response) => {
        response.json().then((data) => {
          dispatch({
            type: "FETCH_LOCATION",
            payload: data
          });
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_LOCATION_ERROR"
        });
      });
  };
};

export const fetchWeatherAndLocation = (city) => {
  return async (dispatch, getState) => {
    try {
      await dispatch(fetchLocation(city));
      const coords = getState().location.coord;

      if (coords) {
        await dispatch(fetchWeather(coords.lat, coords.lon));
      } else {
        console.log("Coordinates not available.");
      }
    } catch (error) {
      console.error("Error fetching weather and location:", error);
    }
  };
};

export const toggleTempScale = () => {
  return { type: "TOGGLE_TEMP_SCALE" };
};
