import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect } from "react";

function Portal({ children }: any) {
  const backdropNode = document.getElementById("backdrop-root");
  const portalNode = document.getElementById("overlay-root");
  useLayoutEffect(() => {});

  useEffect(() => {
    const { body } = document;
    body.style.overflow = "hidden";
    body.style.paddingRight = "17px";

    return () => {
      document.body.style.overflow = "auto";
      body.style.paddingRight = "0px";
    };
  }, []);

  return (
    <>
      {backdropNode
        ? createPortal(
            <div className="w-screen h-screen bg-black bg-opacity-50  fixed top-0 left-0 z-50" />,

            backdropNode,
          )
        : null}
      {portalNode
        ? createPortal(
            <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-0 z-50">
              <div className="overlay-container relative w-full h-full ">
                {children}
              </div>
            </div>,
            portalNode,
          )
        : null}
    </>
  );
}
export default Portal;
