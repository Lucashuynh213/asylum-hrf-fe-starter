import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const API_BASE = 'https://asylum-be.onrender.com';

const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    try {
      const response = await axios.get(`${API_BASE}/fiscalSummary`);
      console.log("Fetched fiscalSummary:", response.data);
      return response.data; // already an object with yearResults
    } catch (err) {
      console.error('Error fetching fiscalSummary:', err);
      return {};
    }
  };

  const getCitizenshipResults = async () => {
    try {
      const response = await axios.get(`${API_BASE}/citizenshipSummary`);
      console.log("Fetched citizenshipSummary:", response.data);
      return response.data; // should be an array
    } catch (err) {
      console.error('Error fetching citizenshipSummary:', err);
      return [];
    }
  };

  const fetchData = async () => {
    try {
      const [fiscalData, citizenshipResults] = await Promise.all([
        getFiscalData(),
        getCitizenshipResults(),
      ]);

      setGraphData({
        ...fiscalData, // includes yearResults, totalCases, etc.
        citizenshipResults, // explicitly add citizenship data
      });
    } catch (error) {
      console.error('Error fetching graph data:', error);
    } finally {
      setIsDataLoading(false);
    }
  };

  const updateQuery = () => {
    setIsDataLoading(true);
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => {
    const results = graphData?.yearResults;
    if (!Array.isArray(results)) {
      console.error("Expected yearResults to be an array but got:", results);
      return [];
    }
    return results.map(({ fiscal_year }) => Number(fiscal_year));
  };

  // Automatically fetch data on first render
  useEffect(() => {
    updateQuery(); // kick off the fetch on mount
  }, []);

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}