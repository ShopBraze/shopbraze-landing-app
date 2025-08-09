export const generateUniqueEventId = () => {
  return `event_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}
