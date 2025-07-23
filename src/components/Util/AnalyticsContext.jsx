import { useReducer, createContext } from "react";

const AnalyticsContext = createContext({
  modalOpened: 0,
  formAttempts: 0,
  ctaClicks: 0,
  incrementModalOpened: () => {},
  incrementFormAttempts: () => {},
  incrementCtaClicks: () => {},
});

function analyticsReducer(state, action) {
  switch (action.type) {
    case "MODAL_OPENED":
      return { ...state, modalOpened: state.modalOpened + 1 };
    case "FORM_ATTEMPT":
      return { ...state, formAttempts: state.formAttempts + 1 };
    case "CTA_CLICK":
      return { ...state, ctaClicks: state.ctaClicks + 1 };
    default:
      return state;
  }
}

export function AnalyticsContextProvider({ children }) {
  const [state, dispatch] = useReducer(analyticsReducer, {
    modalOpened: 0,
    formAttempts: 0,
    ctaClicks: 0,
  });
  function incrementModalOpened() {
    dispatch({ type: "MODAL_OPENED" });
  }
  function incrementFormAttempts() {
    dispatch({ type: "FORM_ATTEMPT" });
  }

  function incrementCtaClicks() {
    dispatch({ type: "CTA_CLICK" });
  }

  const value = {
    modalOpened: state.modalOpened,
    formAttempts: state.formAttempts,
    ctaClicks: state.ctaClicks,
    incrementModalOpened: incrementModalOpened,
    incrementFormAttempts: incrementFormAttempts,
    incrementCtaClicks: incrementCtaClicks,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export default AnalyticsContext;
