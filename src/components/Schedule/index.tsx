import { StyledContainer, StyledFormContainer } from "./style";
import { ServicesContext } from "../../context/ServicesContext";
import { useContext } from "react";

export interface IServices {
  name: string;
  id: number;
  price: number;
  userId: number;
}

export const Schedule = () => {
  const { services, available } = useContext(ServicesContext);

  return (
    <StyledContainer>
      <div className="schedule">
        <h2>Seus agendamentos</h2>
        <ul></ul>
      </div>

      <StyledFormContainer>
        <form>
          <label>
            Tipo de serviço
            <select>
              {services
                ? services.map((service) => {
                    return <option value={service.name}>{service.name}</option>;
                  })
                : null}
            </select>
          </label>
          <label>
            Horário
            <select>
            {available
                ? available.map(({hour}) => {
                    return <option value={hour}>{hour}</option>;
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
