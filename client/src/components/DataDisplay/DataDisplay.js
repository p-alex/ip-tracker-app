import React, { useEffect } from "react";
import "./DataDisplay.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeolocationCurrent } from "../../actions/geolocation";
import Loader from "../../ui/Loader";
export default function DataDisplay() {
  const dispatch = useDispatch();
  const geolocation = useSelector((state) => state.geolocation);
  useEffect(() => {
    dispatch(fetchGeolocationCurrent());
  }, [dispatch]);
  return (
    <>
      {geolocation.location !== undefined ? (
        <main className="data">
          <div className="data-container">
            <p>IP ADDRESS</p>
            <h1>{geolocation?.ip}</h1>
          </div>
          <div className="data-container">
            <p>LOCATION</p>
            <h1>
              {geolocation?.location?.region},{geolocation?.location?.city}{" "}
              {geolocation?.location?.postalCode}
            </h1>
          </div>
          <div className="data-container">
            <p>TIMEZONE</p>
            <h1>UTC {geolocation?.location?.timezone}</h1>
          </div>
          <div className="data-container">
            <p>ISP</p>
            <h1>{geolocation?.isp}</h1>
          </div>
        </main>
      ) : (
        <Loader />
      )}

      {geolocation?.message ? (
        <span className="error">
          <p>No result.</p>
        </span>
      ) : null}
    </>
  );
}
