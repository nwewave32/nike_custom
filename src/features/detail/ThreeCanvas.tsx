import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FlexBox from "components/FlexBox";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const heartbeat = () => keyframes`
from {
            transform: translateX(-50%) scale(1);
            transform-origin: center center;
            animation-timing-function: ease-out;
  }
  10% {
            transform: translateX(-50%) scale(0.91);
            animation-timing-function: ease-in;
  }
  17% {
            transform: translateX(-50%) scale(0.98);
            animation-timing-function: ease-out;
  }
  33% {
            transform: translateX(-50%) scale(0.87);
            animation-timing-function: ease-in;
  }
  45% {
            transform: translateX(-50%) scale(1);
            animation-timing-function: ease-out;
  }
  100% {
    opacity:0;
  }
`;

interface ToastProps {
  visible: boolean;
}

const shouldForwardProps = (prop: string) => prop !== "visible";

const Toast = styled.div.withConfig({
  shouldForwardProp: shouldForwardProps,
})<ToastProps>`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 24px;
  color: var(--podium-cds-color-grey-100);
  background-color: #000;
  border-radius: 10px;
  opacity: 0.3;
  z-index: 9999;
  animation: ${({ visible }) => visible && heartbeat} 2.5s ease-in-out 3 both;
`;
const NikeBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--podium-cds-color-grey-100);
  position: absolute;
  top: 0;
`;
const LogoSvg = styled.svg`
  height: 100%;
  width: 100%;
`;

const Credit = styled.a`
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  cursor: pointer;
`;

function Model() {
  const gltf = useGLTF("/nike_air_force_1_white_on_white_1.glb");

  return (
    <Center scale={2}>
      <primitive object={gltf.scene} position={[0, 0, 0]} />
    </Center>
  );
}

function ThreeCanvas() {
  const [visible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 1.0 } // Adjust threshold as needed
    );

    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => {
      if (canvasRef.current) observer.unobserve(canvasRef.current);
    };
  }, []);

  return (
    <FlexBox
      justify="center"
      isFull={true}
      style={{ minHeight: "500px", padding: "0 120px" }}
    >
      <FlexBox
        isFull={true}
        style={{
          height: "500px",
        }}
      >
        <NikeBackground ref={canvasRef}>
          <LogoSvg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              fill="rgba(0,0,0,0.3)"
              fillRule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clipRule="evenodd"
            ></path>
          </LogoSvg>
        </NikeBackground>
        <Toast visible={visible}>화면을 드래그/스크롤 해보세요!</Toast>
        <Credit href="https://sketchfab.com/colleywolly">
          3D Model by <span>3D Sneakers</span>
        </Credit>
        <Canvas camera={{ position: [-20, 20, -20], fov: 50 }}>
          <ambientLight intensity={0.5} />

          <pointLight position={[10, 10, 10]} />
          <OrbitControls />

          <Model />
        </Canvas>
      </FlexBox>
    </FlexBox>
  );
}

export default ThreeCanvas;
