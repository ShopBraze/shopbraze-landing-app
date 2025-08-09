import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = "866faf0d1cda3df3c5c68e362a448706";

export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN) {
    console.warn("Mixpanel token is missing! Check your .env file.");
    return;
  }
  const recordSession = enableSessionRecording();
  mixpanel.init(MIXPANEL_TOKEN, {
    autocapture: false,
    // debug:true,
    ...(recordSession && {
      record_sessions_percent: 100,
      record_idle_timeout_ms: 120000,
      record_mask_text_selector: "",
      record_block_selector: "",
    }),
  });
};

export const sendMixPanelEvent = (eventName, properties = {}) => {
  if (!window?.location?.href?.includes("localhost")) {
    try {
      mixpanel.track(eventName, { ...properties });
    } catch (error) {
      console.log("Error in sending mixpanel event", error);
    }
  } else return;
};

const enableSessionRecording = () => {
  if (window?.location?.href?.includes("localhost")) return false;
  else return true;
};
