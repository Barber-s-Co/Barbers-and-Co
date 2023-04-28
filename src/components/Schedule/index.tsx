import { Input } from "../Form/Input";
import { Select } from "../Form/Select";
import { StyledContainer, StyledFormContainer } from "./style";

export const Schedule = () => {
  return (
    <StyledContainer>
      <div className="schedule">
        <h2>Seus agendamentos</h2>
        <ul>
          <li>
            <div>
              <p>barba e cabelo</p>
              <span> R$40,00</span>
            </div>

            <p>28/08/23</p>
          </li>
        </ul>
      </div>

      <StyledFormContainer>
        <form>
          <label>
            Tipo de serviço
            <Select value="serviço" />
          </label>
          <label>
            Horário
            <Select value="horário" />
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
