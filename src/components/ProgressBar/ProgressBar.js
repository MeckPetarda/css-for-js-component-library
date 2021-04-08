/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]

  if (!styles) throw new Error("Unknown size of progress bar")

  return (
    <S.Wrapper
      style={{ "--padding": styles.padding + "px", "--radius": styles.radius + "px" }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <S.BarWrapper>
        <S.Bar style={{ "--width": value + "%", "--height": styles.height + "px" }} />
      </S.BarWrapper>
    </S.Wrapper>
  )
}

const S = {}

S.Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px ${COLORS.transparentGray35} inset;
  border-radius: var(--radius);
  padding: var(--padding);
`

S.BarWrapper = styled.div`
  border-radius: 4px;
  /* Used to trim off progress bar when near 100% */
  overflow: hidden;
`

S.Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`

export default ProgressBar
