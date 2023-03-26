import styled from "styled-components";
export const HeaderHeight = styled.div`
width: 1440px;
  height: 660px;
`

export const Flex = styled.div`
position: relative;
  justify-content: center;
display: flex;
  width: 1180px;
  border-radius:8px;
  
  margin:190px auto;
  height: 60px;
  background: white;
  
  
`
export const FlexStyle = styled.div`
display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  height:232px;
  
`
export const Slogan = styled.h3`
  width: 550px;
  margin: 120px 0 0 140px;
font-weight: 500;
  font-size: 50px;
  font-family: Roboto,sans-serif;
  color: #FFFFFF;
    
`

export const StyledSelect = styled.select`
  font-family: Roboto,sans-serif;
  font-size:18px;
  font-weight:400;
background: #FFFFFF;
  outline: none;
  width:400px;
  height: 60px;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.selected &&'#F5BD41'||'rgb(206, 206, 206)'};
  border-radius: 8px;
  line-height: 60px;
  padding-left: 24px;
//>option{
//background: rgba(255, 255, 255);
//
//}
  
  
`

export const StyledOption = styled.option`
font-size: 18px;
  font-weight: 400;
  font-family: Roboto,sans-serif;

`

/// people counter

export const  PeopleField = styled.div`
  user-select: none;
font-family: Roboto,sans-serif;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
background: #FFFFFF;
  width:320px;
  height: 60px;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.selected &&'#F5BD41'||'rgb(206, 206, 206)'};
  border-radius: 8px;
  
`
export const Relative = styled.div`
  position: relative;

`
export const CounterWindow = styled.div`
 
  padding: 22px;
width:260px;
  height: 160px;
  display: ${props => props.vision &&'flex'||'none'};
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

`

export const StyledLine = styled.div`
  height: 30px;
display: flex;
  width:215px;
  align-items: center;
  justify-content: space-between;
 
`
export const StyledH4 = styled.h4`
  line-height: 30px;
  font-size: 16px;
  font-family: Roboto,sans-serif;
  font-weight: 400;
`
export const SquareButton = styled.button`
width: 30px;
  height: 30px;

  border-width: 1px;
  border-style: solid;
  border-color:${props => props.disable &&'#CECECE' || '#3077C6'};
  color:${props => props.disable &&'#CECECE' || '#3077C6'};
  cursor:${props=>props.disable &&'not-allowed' || 'pointer'} ;
  font-family: Roboto,sans-serif;
  font-size: 18px;
  font-weight: 400;

  //:disabled{
  //  border: 1px solid #CECECE;
  //  color:#CECECE;
  //}
  //:hover:disabled{
  //  cursor: not-allowed;
  //}
`
export const LogicCounterBlock = styled.div`
width: 110px;
  display: flex;
  justify-content: space-between;
`
export const StyledCount = styled.p`
line-height: 30px;
  font-size: 16px;
  font-family: Roboto,sans-serif;
  font-weight: 400;
`


/// calendaaaar

export const CalendarVisibility = styled.div`
width: 590px;
 position: absolute;
  top: 70px;
 
display: ${props => props.vision &&'flex'||'none'}
`


///dataInput

export const DataInput = styled.div`
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 400;
  font-family: Roboto,sans-serif;
  position: relative;
width:260px;
  height:60px;
  background: #FFFFFF;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.selected &&'#F5BD41'||'rgb(206, 206, 206)'};
  
  
  border-radius: 8px;
`

export const CustomFlex = styled.div`

`
export const ERelative = styled.div`
  
position: relative`


///btn
export const SubmitBtn = styled.button`
  font-family: Roboto,sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
width:200px;
  height:60px;
  background: #3077C6;
  border-radius: 8px;
`
//headers
export const H5ForCity = styled.h5`
  position: absolute;
  color: #FFFFFF;
  top:-37px;
  left: 20px;
font-family: Roboto,sans-serif;
  font-weight: 400;
  font-size: 18px;
`
export const CounterH5 =styled.h5`
  position: absolute;
  color: #FFFFFF;
  top:-37px;
  left: 430px;
  font-family: Roboto,sans-serif;
  font-weight: 400;
  font-size: 18px;
`

export const DownloadBlock = styled.div`
display: flex;
  justify-content: center;
  a:not(:last-child){
    margin-right: 20px;
  }
  
`
