import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 16,
    strokeWidth: 1,
    height: 24,
  },
  large: {
    iconSize: 24,
    fontSize: 21,
    strokeWidth: 2,
    height: 36,
  },
}

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size]

  return (
    <S.Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <S.IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={styles.strokeWidth} />
      </S.IconWrapper>
      <S.TextInput
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--stroke-width": styles.strokeWidth + "px",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
        {...delegated}
      />
    </S.Wrapper>
  )
}

const S = {}

S.Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

S.IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: var(--size);
`

S.TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--stroke-width) solid ${COLORS.black};
  outline-offset: 3px;
  padding-left: var(--height);

  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput
