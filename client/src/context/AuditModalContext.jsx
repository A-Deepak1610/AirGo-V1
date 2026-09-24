import React, { createContext, useContext, useState, useCallback } from 'react';
import { auditedFlightsList } from '../data/scrapedRunsData';

import searchResultsImg from '../assets/2026-09-23_23-21-54_cleartrip/BOM-DEL/T+1/00_search_results.png';
import checkoutReviewImg from '../assets/2026-09-23_23-21-54_cleartrip/BOM-DEL/T+1/01_checkout_review.png';

const AuditModalContext = createContext();

export const AuditModalProvider = ({ children }) => {
  // Ground-Truth Audit Modal state
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [auditFlight, setAuditFlight] = useState(null);

  // Headless Demo Runner Studio state
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
  const [headlessConfig, setHeadlessConfig] = useState({ route: 'BOM-DEL', horizon: 'T+1' });

  // AI Copilot Drawer state
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [copilotInitialQuery, setCopilotInitialQuery] = useState('');

  const CLEARTRIP_DEFAULT_SEARCH = searchResultsImg;
  const CLEARTRIP_DEFAULT_REVIEW = checkoutReviewImg;

  // Handlers for Ground-Truth Audit
  const openAuditModal = useCallback((flightOrId) => {
    let target = null;
    if (typeof flightOrId === 'string') {
      const found = auditedFlightsList.find(f => f.id === flightOrId || f.flightNumber === flightOrId);
      target = found || auditedFlightsList[0];
    } else if (flightOrId && typeof flightOrId === 'object') {
      target = flightOrId;
    } else {
      target = auditedFlightsList[0];
    }

    const auditData = {
      ...target,
      screenshots: {
        search: target?.screenshots?.search || CLEARTRIP_DEFAULT_SEARCH,
        review: target?.screenshots?.review || CLEARTRIP_DEFAULT_REVIEW,
        seatMap: target?.screenshots?.seatMap || CLEARTRIP_DEFAULT_REVIEW,
        payment: target?.screenshots?.payment || CLEARTRIP_DEFAULT_REVIEW,
      },
      storagePath: target?.storagePath || 'runs/2026-09-23_23-21-54_cleartrip/BOM-DEL/T+1/'
    };

    setAuditFlight(auditData);
    setIsAuditOpen(true);
  }, []);

  const closeAuditModal = useCallback(() => {
    setIsAuditOpen(false);
    setAuditFlight(null);
  }, []);

  // Handlers for Headless Runner
  const openHeadless = useCallback((config = {}) => {
    setHeadlessConfig(prev => ({ ...prev, ...config }));
    setIsHeadlessOpen(true);
  }, []);

  const closeHeadless = useCallback(() => {
    setIsHeadlessOpen(false);
  }, []);

  // Handlers for AI Copilot
  const openCopilot = useCallback((query = '') => {
    setCopilotInitialQuery(query);
    setIsCopilotOpen(true);
  }, []);

  const closeCopilot = useCallback(() => {
    setIsCopilotOpen(false);
  }, []);

  const toggleCopilot = useCallback(() => {
    setIsCopilotOpen(prev => !prev);
  }, []);

  return (
    <AuditModalContext.Provider
      value={{
        isAuditOpen,
        auditFlight,
        openAuditModal,
        closeAuditModal,
        isHeadlessOpen,
        headlessConfig,
        openHeadless,
        closeHeadless,
        isCopilotOpen,
        copilotInitialQuery,
        openCopilot,
        closeCopilot,
        toggleCopilot
      }}
    >
      {children}
    </AuditModalContext.Provider>
  );
};

export const useAuditModal = () => {
  const context = useContext(AuditModalContext);
  if (!context) {
    throw new Error('useAuditModal must be used within an AuditModalProvider');
  }
  return context;
};
