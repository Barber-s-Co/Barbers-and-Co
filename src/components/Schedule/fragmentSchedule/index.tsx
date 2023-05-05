import { useContext } from "react";
import { ServicesContext } from "../../../context/ServicesContext";

export const getAvailableHours = (day: string) => {
  const { available } = useContext(ServicesContext);

  const dayAvailable = available.find((date) => date.weekDay === day);
  if (dayAvailable) {
    return dayAvailable.hour;
  }
  return [];
};
