export const analytics = {
  // Replace this with your GoatCounter site code, for example "siqi-homepage".
  // This turns into: https://siqi-homepage.goatcounter.com
  goatcounterCode: "siqili",
};

export const goatcounterBase = analytics.goatcounterCode
  ? `https://${analytics.goatcounterCode}.goatcounter.com`
  : "";

export const goatcounterEndpoint = goatcounterBase
  ? `${goatcounterBase}/count`
  : "";
