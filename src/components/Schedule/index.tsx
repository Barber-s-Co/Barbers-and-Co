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
        <h3>Seus agendamentos</h3>
        <ul>
          {appointments.length !== 0
            ? appointments.map((appointment) => {
                if (appointment.userId == userID) {
                  return (
                    <li key={appointment.id}>
                      <div>
                        <p>{appointment.name.charAt(0).toUpperCase() + appointment.name.slice(1)}</p>
                        <span>{`${appointment.date.charAt(0).toUpperCase() + appointment.date.slice(1)} ás ${appointment.hour}`}</span>
                      </div>
                      <img src={trash} alt="delete" />
                    </li>
                  );
                }
              })
            : null}
        </ul>
      </div>

      <form onSubmit={handleSubmit(submit as SubmitHandler<FieldValues>)}>
        <h3>Agende seu horário</h3>
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
          Selecionar dia
          <select
            {...register("date", { required: true })}
            onChange={(e) => {
              setSelectedDay(e.target.value);
              setIsDaySelected(e.target.value !== "Selecionar dia");
            }}
          >
            <option>Dia</option>
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

        <button disabled={!isDaySelected}>Agendar</button>
      </form>
    </StyledContainer>
  );
};
