import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar_item">
      <img
        height={50}
        width={50}
        src="https://s3-alpha-sig.figma.com/img/9873/06e9/7598f16875f0f8a593c3d16938bda734?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOz6s20mg7khDT83lBTm6gvkAsLD5jz~VJsRW19paErrcX-VhSoG~nsITbfgeGk5qxlkevtZJVuLFmhK8TWEMoZWqf6T8vf3tYu5-lOVFI2vl5GMu9zrQdNP6rcKE66pG1vc0M86R-GAZWswyWWeIsGmnEqonGOa-eM0Jq7liSIcpR-EuK2hiwXIYsdpYVmV0wLux~IsAKSVKGMykBh5cKFEe2YaovGg-9f1PXroU3HefScynJVClaEh~k9bYYFxGsOa~w3tapWvfELuh6tXMqTGTDuNZKPqDAF~pfisGuPLEAU1vy9pfr1md~wXcvtMNO3AZn8kBm6rHVY5qgtRaQ__"
        alt="Logo"
      />
      <div>Weather Forecaster</div>
    </div>
  );
};

export default Navbar;
