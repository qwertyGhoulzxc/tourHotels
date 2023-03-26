import styled from "styled-components";
export const StyledNav = styled.nav`

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width:1250px;
  margin: auto;
`

export const Logo = styled.h1`
  color: #3077C6;
  font-size: 40px;
  font-family: 'Ubuntu', sans-serif;
`

export const StyledH2 = styled.h2`
  user-select: none;
  border-bottom:${props => props.underlined && '3px solid #f5bd41'} ;
  width:${props=>props.width};
  font-family: 'Roboto', sans-serif;
  fonst-size:24px;
  font-weight: 400;
  color:#FFFFFF;
`

export const StyledImg = styled.img`
background:red;
`

export const SvgImage = styled.svg`
  width:${props => props.size};
  height:${props => props.size};
*{
  fill: ${props => props.color && '#f5bd41'};
}
`

export const Combine = styled.div`
width:260px;
  display: flex;
  justify-content: space-between;
`
export const LogOut = styled.div`
display: ${props =>props.vision || 'none'};
  position: absolute;
  left:-160px;
  top:70px;
  width:200px;
  height:50px;
  background: white;
  font-size: 20px;
  font-family: Roboto,sans-serif;
  font-weight: 400;
  line-height: 50px;
  img{
    margin: 16px;
  }
`

export const AccountResolves=styled.div`
position: relative;
`
export const Relative=styled.div`
position: relative;
`

