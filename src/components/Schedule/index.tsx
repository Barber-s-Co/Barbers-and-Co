import { StyledContainer, StyledFormContainer } from "./style";
import { ServicesContext } from "../../context/ServicesContext";
import { useContext, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getAvailableHours } from "./fragmentSchedule";

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
  const { services, available, postSchedule, appointments } = useContext(ServicesContext);
  const [selectedDay, setSelectedDay] = useState("");
  const [isDaySelected, setIsDaySelected] = useState(false);
  const id = localStorage.getItem("@USERID") || "null";
  const userID = parseInt(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

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
        <h2>Seus agendamentos</h2>
        <ul>
          {appointments.length !== 0
            ? appointments.map((appointment) => {
                if (appointment.userId == userID) {
                  return (
                    <li key={appointment.id}>
                      <div>
                        <p>{appointment.name}</p>
                        <span>{`${appointment.date} ás ${appointment.hour}`}</span>
                      </div>
                    </li>
                  );
                }
              })
            : null}
        </ul>
      </div>

      <StyledFormContainer>
        <form onSubmit={handleSubmit(submit as SubmitHandler<FieldValues>)}>
          <label>
            Tipo de serviço
            <select {...register("name")}>
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
            <select
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
              {getAvailableHours(selectedDay).map((hour) => {
                return (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                );
              })}
            </select>
          </label>
          <div className="total">
            <small>Total</small>
            <small>10,00</small>
          </div>

          <button disabled={!isDaySelected}>Agendar</button>
        </form>
      </StyledFormContainer>
    </StyledContainer>
  );
};
