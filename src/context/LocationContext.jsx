import React, { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext(null);

export const SERVICE_ZONES = ["Noida","Delhi","Ghaziabad"];
const STORAGE_KEY = "salon_active_zone";

export function LocationProvider({ children }) {
  const [zone, setZone] = useState(() => {
    if (typeof window === "undefined") return SERVICE_ZONES[0];
    return window.localStorage.getItem(STORAGE_KEY) || SERVICE_ZONES[0];
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, zone);
  }, [zone]);

  return (
    <LocationContext.Provider value={{ zone, setZone, zones: SERVICE_ZONES }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return ctx;
}
