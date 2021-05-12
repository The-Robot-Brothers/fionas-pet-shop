import styled from 'styled-components'

export const Container = styled.div`
  height: 27px;
  width: 52px;
  border-radius: 50px;
  background-image: linear-gradient(aqua, skyblue);
  position: relative;
  cursor: pointer;
  &.night {
    background-image: linear-gradient(midnightblue, rebeccapurple);
  }
`

export const Notch = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top: 1px;
  left: 1px;
  box-shadow: 0 0 5px yellow;
  z-index: 1;
  transition: all 0.3s ease;
  &.night {
    background: whitesmoke;
    box-shadow: 0 0 5px whitesmoke;
    transform: translate(25px, 0);
  }
`

export const CraterExtraSmall = styled.div`
  background: burlywood;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4) inset;
  opacity: 0;
  right: 5px;
  top: 15px;
  height: 3px;
  width: 5px;
  transform: rotate(25deg);
  &.night {
    opacity: 0.15;
  }
`

export const CraterSmall = styled.div`
  background: burlywood;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4) inset;
  opacity: 0;
  right: 2px;
  top: 4px;
  height: 4.5px;
  width: 8px;
  transform: rotate(45deg);
  &.night {
    opacity: 0.15;
  }
`

export const CraterMedium = styled.div`
  background: burlywood;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4) inset;
  opacity: 0;
  left: 1px;
  top: 4px;
  height: 5px;
  width: 11px;
  transform: rotate(-45deg);
  &.night {
    opacity: 0.19;
  }
`

export const CraterLarge = styled.div`
  background: burlywood;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4) inset;
  opacity: 0;
  left: 1px;
  top: 18.3px;
  height: 5px;
  width: 11px;
  transform: rotate(-145deg);
  &.night {
    opacity: 0.19;
  }
`

export const ExtraSmall = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  height: 2px;
  width: 15px;
  top: 45%;
  left: 60%;
  transition: all 0.3s ease;
  &.night {
    background: lightgray;
    box-shadow: 0 0 4px 1px violet;
    height: 1.5px;
    width: 1.5px;
    transform: translate(-14px, 2px);
  }
`

export const Small = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  height: 2px;
  width: 15px;
  top: 45%;
  left: 60%;
  transition: all 0.3s ease;
  &.night {
    background: lightgray;
    box-shadow: 0 0 6px 2px violet;
    height: 2px;
    width: 2px;
    transform: translate(-11.5px, -3px);
  }
`

export const Medium = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  height: 3px;
  width: 20px;
  top: 25%;
  left: 25%;
  z-index: 2;
  transition: all 0.3s ease;
  &.night {
    background: lightgray;
    box-shadow: 0 0 6px 2px violet;
    height: 2.5px;
    width: 2.5px;
    transform: translate(-4px, -2px);
  }
`

export const Large = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  height: 5px;
  width: 27px;
  bottom: 4px;
  left: 25%;
  transition: all 0.3s ease;
  &.night {
    background: lightgray;
    box-shadow: 0 0 6px 1.5px violet;
    height: 3px;
    width: 3px;
    transform: translate(-9px, -6px);
  }
`

export const ExtraLarge = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  height: 5px;
  width: 27px;
  bottom: 4px;
  left: 25%;
  transition: all 0.3s ease;
  &.night {
    background: lightgray;
    box-shadow: 0 0 6px 1.5px violet;
    height: 3.5px;
    width: 3.5px;
    transform: translate(1px, 2px);
  }
`
