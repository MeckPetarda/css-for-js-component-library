import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import Icon from "../Icon"
import { getDisplayedValue } from "./Select.helpers"

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <S.Wrapper>
      <S.NativeSelect value={value} onChange={onChange}>
        {children}
      </S.NativeSelect>
      <S.Presentation>
        {displayedValue}
        <S.IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </S.IconWrapper>
      </S.Presentation>
    </S.Wrapper>
  )
}

const S = {}

S.Wrapper = styled.div`
  position: relative;
  width: max-content;
`

S.NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

S.Presentation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  border-radius: 8px;

  ${S.NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${S.NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

S.IconWrapper = styled.div`
  display: inline-block;
  margin-right: -6px;
`

export default Select
