import React from "react";
import { View } from 'react-native';
import { Svg, Path, Circle, Mask, G } from 'react-native-svg';

export default function glassesRayband(): any {
  return (
    <View 
    style={{
      width: "175%",
      height: "95%",
      position: "absolute",
      top: "-49.5%",
      left: "-38%"
    }}>
    <Svg viewBox="0 0 138 149" fill="none" >
      <Path d="M38.0588 91.4696L26.9414 101.528L28.5296 105.763L38.0588 96.7636C40.1763 96.2339 40.9704 106.557 44.9409 110.528C48.9114 114.498 54.9995 114.361 57.3818 113.704C72.7343 109.469 69.8226 90.4108 72.2049 90.4108C74.5872 90.4108 76.9695 107.247 91.5279 106.293C104.87 105.418 104.763 93.3222 103.175 83.5284C103.018 81.9528 104.138 82.081 103.969 80.8816C103.969 80.8816 104.498 78.7636 102.91 78.7636C101.154 78.252 101.322 76.6462 89.1456 80.0877C76.9695 83.5291 75.1166 85.3815 75.1166 85.3815C75.1166 85.3815 69.5579 87.4994 67.308 86.705C65.058 85.9106 58.7053 86.1504 48.382 87.7635C38.0588 89.3767 38.0588 91.4696 38.0588 91.4696Z" fill="black"/>
    </Svg>


</View>
  );
}