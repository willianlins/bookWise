import styled from 'styled-components'

export const ContainerMenu = styled.nav`
  width: 232px;
  height: 56rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.75rem 0 1.75rem;
  background-image: url('Background-sidebar.png');
  border-radius: 12px;
  object-fit: cover;
`

interface ButtonLoginProps {
  $color: 'red' | 'green'
}

export const ButtonLogin = styled.button<ButtonLoginProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme.COLORS['gray-200']};
  cursor: pointer;
  svg {
    ${(props) =>
      props.$color === 'green'
        ? `color: ${props.theme.COLORS['green-100']};`
        : `color: ${props.theme.COLORS.red};`}
  }
`

export const ContentListMenu = styled.ul`
  width: 100%;
  flex: 1;
  padding: 0 2.75rem;
  margin-top: 4rem;
  list-style: none;
  color: ${(props) => props.theme.COLORS['gray-400']};
`
interface ContentListMenuListProps {
  $selectmenu: boolean
}

export const ContentListMenuList = styled.li<ContentListMenuListProps>`
  display: flex;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    transition: color 0.3s;
  }

  & + li {
    margin-top: 2rem;
  }

  & a:hover {
    color: ${(props) => props.theme.COLORS['gray-100']};
  }

  &::before {
    content: '';
    display: block;
    width: 0.25rem;
    margin-right: 1rem;
    border-radius: ${(props) => props.theme.RADII.full};
  }

  ${(props) =>
    props.$selectmenu &&
    `
    color: ${props.theme.COLORS['gray-100']};
    &::before {
        background: ${props.theme.COLORS['gradient-vertical']};
    `};
`
