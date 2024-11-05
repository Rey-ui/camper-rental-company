import sprite from "../../sprite/symbol-defs.svg";
import css from "./CamperFeatures.module.css";

const generateCamperAdvantages = (camper) => {
  const {
    // adults = 0,
    transmission = "",
    engine = "",
    details: {
      TV = "",
      airConditioner = "",
      kitchen = "",
      beds = "",
      CD = "",
      radio = "",
      hob = "",
      toilet = "",
      shower = "",
      bathroom = "",
      freezer = "",
      gas = "",
      water = "",
      microwave = "",
    } = {},
  } = camper;

  const formattedGas = gas && `${parseInt(gas)} ${gas.replace(/^\d+/, "")}`;
  const formattedWater =
    water && `${parseInt(water)} ${water.replace(/^\d+/, "")}`;

  return [
    {
      label: "adults",
      value: camper.adults,
      iconName: "#icon-Users",
    },
    {
      label: "",
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      iconName: "#icon-Container",
    },
    {
      label: "",
      value: airConditioner > 0 ? "AC" : "",
      iconName: "#icon-air-conditioner",
    },
    {
      label: "",
      value: engine.charAt(0).toUpperCase() + engine.slice(1),
      iconName: "#icon-pump",
    },
    {
      label: "",
      value:
        kitchen === 0 ? "" : kitchen === 1 ? "Kitchet" : `${kitchen} kitchens`,
      iconName: "#icon-cutlery",
    },
    {
      label: beds === 1 ? "bed" : "beds",
      value: beds,
      iconName: "#icon-bed",
    },
    {
      label: "air conditioner",
      value: airConditioner > 0 ? airConditioner : "",
      iconName: "#icon-air-conditioner",
    },
    { label: "", value: CD > 0 ? "CD" : "", iconName: "#icon-cd" },
    {
      label: "",
      value: radio > 0 ? "Radio" : "",
      iconName: "#icon-radio-linear",
    },
    {
      label: "",
      value: hob === 0 ? "" : hob === 1 ? "Hob" : `${hob} hobs`,
      iconName: "#icon-hand-painted-plate",
    },
    {
      label: "",
      value: toilet === 0 ? "" : toilet === 1 ? "Toilet" : `${toilet} toilets`,
      iconName: "#icon-toilet-paper-line",
    },
    {
      label: "",
      value: shower === 0 ? "" : shower === 1 ? "Shower" : `${shower} showers`,
      iconName: "#icon-shower",
    },
    {
      label: "",
      value:
        bathroom === 0
          ? ""
          : bathroom === 1
          ? "Bathroom"
          : `${bathroom} bathrooms`,
      iconName: "#icon-shower",
    },
    {
      label: "",
      value:
        freezer === 0 ? "" : freezer === 1 ? "Freezer" : `${freezer} freezers`,
      iconName: "#icon-freezer",
    },
    { label: "Gas", value: formattedGas, iconName: "#icon-gas" },
    {
      label: "Water",
      value: formattedWater,
      iconName: "#icon-water-outline",
    },
    {
      label: "",
      value:
        microwave === 0
          ? ""
          : microwave === 1
          ? "Microwave"
          : `${microwave} microwaves`,
      iconName: "#icon-streamline_microwave",
    },
    {
      label: "",
      value: TV === 0 ? "" : TV === 1 ? "TV" : `${TV} TVs`,
      iconName: "#icon-tv",
    },
  ];
};

const CamperFeatures = ({ camper }) => {
  const advantages = generateCamperAdvantages(camper);
  return (
    <div className={css.featuresContainer}>
      <ul className={css.featuresList}>
        {advantages.map(
          ({ label, value, iconName }, index) =>
            value !== 0 &&
            value !== "" && (
              <li className={css.featuresItem} key={index}>
                <svg width="24" height="24">
                  <use href={`${sprite}${iconName}`}></use>
                </svg>
                {value} {label}
              </li>
            )
        )}
      </ul>
      <div className={css.featuresTableContainer}>
        <h3 className={css.featuresTableTitle}>Vehicle details</h3>
        <table className={css.featuresTable}>
          <tbody className={css.featuresTableBody}>
            <tr className={css.featuresTabletr}>
              <td>Form</td>
              <td>{camper.form}</td>
            </tr>
            <tr className={css.featuresTabletr}>
              <td>Length</td>
              <td>{camper.length}</td>
            </tr>
            <tr className={css.featuresTabletr}>
              <td>Width</td>
              <td>{camper.width}</td>
            </tr>
            <tr className={css.featuresTabletr}>
              <td>Height</td>
              <td>{camper.height}</td>
            </tr>
            <tr className={css.featuresTabletr}>
              <td>Tank</td>
              <td>{camper.tank}</td>
            </tr>
            <tr className={css.featuresTabletr}>
              <td>Consumption</td>
              <td>{camper.consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CamperFeatures;
