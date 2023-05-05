import { StyledContainer } from "./style";
import { ServicesContext } from "../../context/ServicesContext";
import { useContext, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getAvailableHours } from "./fragmentSchedule";
import trash from "../../assets/icons8-excluir.svg";

export interface IServices {
  name: string;
  id: number;
  price: number;
  userId: number;
}

export interface ISchedulingFormData {
  name: string;
  hour: string;
  userId: number;
  id: number;
  date: string;
}

export const Schedule = () => {
  const { services, available, postSchedule, appointments, deleteMyAppointments } = useContext(ServicesContext);
  const [selectedDay, setSelectedDay] = useState("");
  const [isDaySelected, setIsDaySelected] = useState(false);
  const id = localStorage.getItem("@USERID") || "null";
  const userID = parseInt(id);

  const { register, handleSubmit } = useForm();

  const submit: SubmitHandler<ISchedulingFormData> = (formData) => {
    const id = localStorage.getItem("@USERID") || "null";
    const userID = parseInt(id);

    const data = {
      ...formData,
      userId: userID,
    };

    postSchedule(data);
  };

  return (
    <StyledContainer>
      <div className="schedule">
        <h3>Seus agendamentos</h3>
        <ul>
          {Array.isArray(appointments) &&
            appointments.map((appointment) => {
              if (appointment.userId == userID) {
                return (
                  <li key={appointment.id}>
                    <div>
                      <p>{appointment.name.charAt(0).toUpperCase() + appointment.name.slice(1)}</p>
                      <span>{`${appointment.date.charAt(0).toUpperCase() + appointment.date.slice(1)} ás ${appointment.hour}`}</span>
                    </div>
                    <img onClick={() => deleteMyAppointments(appointment.id)} src={trash} alt="delete" />
                  </li>
                );
              }
            })}
        </ul>
      </div>

      <form onSubmit={handleSubmit(submit as SubmitHandler<FieldValues>)}>
        <h3>Agende seu horário</h3>
        <label>
          Serviço
          <select
            {...register("name", { required: true })}
            onChange={(e) => {
              setSelectedDay(e.target.value);
              setIsDaySelected(e.target.value !== "Selecionar serviço");
            }}
          >
            <option>Selecionar serviço</option>;
            {services
              ? services.map((service) => {
                  return (
                    <option key={service.id} value={service.name}>
                      {`${service.name} R$${service.price}`}
                    </option>
                  );
                })
              : null}
          </select>
        </label>
        <label>
          Dia
          <select
            disabled={!isDaySelected}
            {...register("date", { required: true })}
            onChange={(e) => {
              setSelectedDay(e.target.value);
              setIsDaySelected(e.target.value !== "Selecionar dia");
            }}
          >
            <option>Selecionar dia</option>
            {available
              ? available.map((date) => {
                  return (
                    <option key={date.weekDay} value={date.weekDay}>
                      {date.weekDay}
                    </option>
                  );
                })
              : null}
          </select>
        </label>
        <label>
          Horário
          <select disabled={!isDaySelected} {...register("hour", { required: true })}>
            <option disabled selected value="">
              Selecionar horário
            </option>
            {getAvailableHours(selectedDay).map((hour) => {
              return (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
        </label>

        <button disabled={!isDaySelected}>Agendar</button>
      </form>
    </StyledContainer>
  );
};
