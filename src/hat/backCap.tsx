import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs, Rect, G, ClipPath } from 'react-native-svg';

export default function hatBackCap(props: { color: string, lightColor: string }): any {
  const { color, lightColor } = props;
  return (
    <View 
    style={{
      position: "absolute",
      bottom: "15%",
      width: "79%",
      height: "115%",
      left: "7.5%"
    }}>
      <Svg viewBox="0 0 138 149" fill="none" >
        <G clip-path="url(#clip0_675_13289)">
          <Path d="M26.7361 82.3497C26.8109 82.5655 26.8725 82.8825 26.9473 83.0983C27.2979 84.2318 27.4995 85 27.9995 86.5C18.5005 94.5024 -2.00035 104.749 0.999321 107C3.00011 108.501 11.5001 116.001 25.5001 111.001C39.5001 105.501 45.1481 89.4377 46.499 89.4578C50.7294 89.5208 54.3296 89.2736 56.499 88.9987C62.2418 87.6475 81.4587 84.1987 95.3749 80.1976C95.3749 73.4986 94.4996 68.4986 96.9996 64.9986C98.9591 62.2553 101.721 62.8908 104.362 64.0161C105.173 64.362 106.012 63.6117 105.691 62.7901C103.356 56.8115 99.6658 50.2769 96.9996 48.4994C93.9998 46.4994 84.9995 40.9994 78.8409 39.3496C72.6822 37.6998 61.0872 36.1606 54.5134 38.3925C47.8383 40.6111 41.3611 46.0483 36.1739 51.8598C30.9868 57.6713 27.191 63.8705 25.9931 67.5248C24.6939 71.166 24.9666 74.6004 25.6577 77.9863C25.979 79.4701 26.3135 80.8527 26.7361 82.3497Z" fill={color} stroke="black" strokeWidth="1.90302"/>
          <Path d="M46.499 89.5C40.8322 89.3331 29.1987 88.4994 27.999 86.5" stroke="black" strokeWidth="2"/>
          <Path d="M51.9586 89.6651C50.1783 86.3064 45.8939 67.3527 46.4978 63.4985C47.1319 58.6397 48.998 51 54.0722 39.3157L54.7101 38.29" stroke="black" strokeWidth="1.8634"/>
          <Path d="M83.999 83C83.999 83 79.0985 60.2639 76.499 57C74.4901 54.62 65.5447 44.1415 54.8057 39.1094" stroke="black" strokeWidth="1.8634"/>
          <Path d="M110.999 76C108.499 77.5 99.499 80.1667 95.999 80V73C99.199 73.8 105.499 70.8333 108.999 69C110.332 70.3333 112.999 73.5 110.999 76Z" fill={lightColor} stroke="black" strokeWidth="2"/>
          <Path d="M107.499 69.5C107.832 68 107.099 64.6 105.499 63" stroke="black" strokeWidth="2"/>
        </G>
        <Defs>
        <ClipPath id="clip0_675_13289">
          <Rect fill="white"/>
        </ClipPath>
        </Defs>
      </Svg>


    </View>
  );
}
