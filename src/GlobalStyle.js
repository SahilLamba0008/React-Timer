import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.btn{
  padding: 10px 30px;
  font-size: 2.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  cursor: pointer;
}
`;
