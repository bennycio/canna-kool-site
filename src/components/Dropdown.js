import React from "react";
import { NavLink } from "react-router-dom";
import { useToggle } from "react-use";
import styled from "styled-components";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Fade } from "@material-ui/core";

const StyledDropdown = styled.div`
  list-style: none;
  width: 100%;
  background: white;
  position: absolute;
  top: px;
  right: 0;
  left: 0;
  zindex: 100;
  border-radius: 10px;
  font-size: 0.6em;
`;

const ClickableSpan = styled.span`
  cursor: pointer;
`;

const DropdownLink = styled.h4`
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    background: #05c7f2;
    color: white;
  }
`;

const Dropdown = ({ title, links }) => {
  const [isDown, toggleIsDown] = useToggle(false);

  return (
    <ClickAwayListener onClickAway={() => toggleIsDown(false)}>
      <div>
        <ClickableSpan onClick={toggleIsDown}>{title}</ClickableSpan>
        <Fade in={isDown}>
          <StyledDropdown>
            {links.map((item) => {
              let link = item[0];
              let text = item[1];
              return (
                <DropdownLink>
                  <NavLink to={link} style={{ color: "black" }}>
                    {text}
                  </NavLink>
                </DropdownLink>
              );
            })}
          </StyledDropdown>
        </Fade>
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
