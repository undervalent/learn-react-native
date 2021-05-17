import * as React from "react";
import { Camera } from "expo-camera";

import { NavigationProps } from "../../../../types";
import { CameraWrapper } from "./camera.styles";
export const CameraScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [permission, setPermission] = React.useState<boolean>(false);
  const cameraRef = React.useRef();

  React.useEffect(() => {
    async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setPermission(status === "granted");
    };
    return () => {};
  }, []);

  return (
    <CameraWrapper
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    />
  );
};
