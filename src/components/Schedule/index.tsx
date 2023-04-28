import { StyledContainer, StyledFormContainer } from "./style";
import { ServicesContext } from "../../context/ServicesContext";
import { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

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
}

export const Schedule = () => {
  const { services, available, postSchedule } = useContext(ServicesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit: SubmitHandler<ISchedulingFormData> = (formData) => {
    postSchedule(formData);
  };

  return (
    <StyledContainer>
      <div className="schedule">
        <h2>Seus agendamentos</h2>
        <ul></ul>
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
                        {service.name}
                      </option>
                    );
                  })
                : null}
            </select>
          </label>
          <label>
            Horário
            <select {...register("hour", { required: true })}>
              {available
                ? available.map(({ hour }) => {
                    return <option>{hour}</option>;
                  })
                : null}
            </select>
          </label>
          <div className="total">
            <small>Total</small>
            <small>10,00</small>
          </div>

          <button>Agendar</button>
        </form>
      </StyledFormContainer>
    </StyledContainer>
  );
};
