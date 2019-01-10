import styled from "styled-components";

const NavStyles = styled.ul`
  display: flex;
  justify-self: end;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    padding: 1rem 3rem;
    border: 0;
    cursor: pointer;
    @media (max-width: ${props => props.theme.mediaMaxWidthPhone}) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: "";
      width: 2px;
      background: ${props => props.theme.lightGrey};
      height: 100%;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
      left: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: ${props => props.theme.mediaMaxWidth720p}) {
    justify-content: center;
    width: 100%;
    font-size: 1.5rem;
    border-top: 1px solid ${props => props.theme.lightGrey};
  }
`;

export default NavStyles;
