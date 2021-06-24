import React from 'react'
import styled from 'styled-components/macro'
import Icon from '../Icon'

import { COLORS, QUERIES } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'
import Logo from '../Logo'
import UnstyledButton from '../UnstyledButton'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          {/* <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">nouvelles produits</NavLink>
          <NavLink href="/men">hommes</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Pour les enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink> */}
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" size={24} strokeWidth={2} color={COLORS.gray[900]} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" size={24} strokeWidth={2} color={COLORS.gray[900]} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" size={24} strokeWidth={2} color={COLORS.gray[900]} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    padding-right: 16px;
    padding-left: 16px;
  }
`

const MobileActions = styled.div`
  display: none;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: flex;
    gap: 32px;
    transform: translateX(3px);
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    gap: 16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 10vw - 5.25rem, 3.4rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`

const LogoWrapper = styled.div`
  flex: 1;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    flex: revert;
  }
`

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`

export default Header
