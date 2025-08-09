interface Window {
  fbq: (...args: any[]) => void;
}


export const fbq = (...args: any[]) => {
  if (typeof window !== 'undefined' && typeof (window as any)?.fbq === 'function') {
    try {
      (window as any).fbq(...args);
    } catch (error) {
      console.log("Error in sending fb pixel event", error)
    }
  }
};

