import { css } from 'styled-components'

/**
 * Styled component containing  common css styles.
 *
 * @author Robert Long
 */
export default css`
  background-color: var(--inputBackground);
  border-radius: 4px;
  border: 1px solid var(--border);
  color: var(--text);
  height: 24px;
  padding: 6px 8px;

  &:hover {
    border-color: var(--blueHover);
  }

  &:focus {
    border-color: var(--blue);
  }

  &:disabled {
    background-color: var(--disabled);
    color: var(--disabledText);
  }
`
