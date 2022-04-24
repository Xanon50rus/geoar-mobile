import { PermissionsAndroid } from "react-native";

export const requestGeoPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "GeoLocation",
          message:
            "We need your current location " +
            "so we can build good route for you.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("We can use the geo");
        return true;
      } else {
        console.log("Geo permission denied");
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };