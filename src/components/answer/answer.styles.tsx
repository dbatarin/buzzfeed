import styled from "styled-components";

const SELECTED_BACKGROUND = "#8ac5ff";
const DEFAULT_BACKGROUND = "#f2f2f2";
const HOVERED_BACKGROUND = "#fff195";

interface AnswerLabelProps {
  selected?: boolean;
  deactivated?: boolean;
}

export const AnswerLabel = styled.label<AnswerLabelProps>`
  display: block;
  padding: 4px 8px;
  background-color: ${props =>
    props.selected ? SELECTED_BACKGROUND : DEFAULT_BACKGROUND};
  border: 1px solid #d8d8d8;
  margin-bottom: 8px;
  cursor: pointer;
  opacity: ${props => (props.deactivated && !props.selected ? 0.6 : 1)};

  &:hover {
    background-color: ${props =>
      props.selected
        ? SELECTED_BACKGROUND
        : props.deactivated
        ? DEFAULT_BACKGROUND
        : HOVERED_BACKGROUND};
  }

  input {
    cursor: pointer;
  }
`;
