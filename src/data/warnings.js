import WarningIcon from "../assets/svg/warningIcon";

const Warnings = [
  {
    icon: <WarningIcon />,
    title: "Flood Alert",
    desc: "Flooding Possible - Prepare",
    list: [
      "Prepare a bag that includes medicines",
      "Gather insurance documents",
      "Check flood warnings",
    ],
  },
  {
    icon: <WarningIcon FW />,
    title: "Flood Warning",
    desc: "Flooding Expected - Act",
    list: [
      "Turn off gas, water and electricity",
      "Move things upstairs or to safety",
      "Move family, pets and car to safety",
    ],
  },
  {
    icon: <WarningIcon SFW />,
    title: "Severe Flood Warning",
    desc: "Severe Flooding - Survive",
    list: [
      "Call 999 if in immediate danger",
      "Follow advice from emergency services",
      "Keep yourself and your family safe",
    ],
  },
];

export default Warnings;
