import { useState, useEffect } from 'react';

function useFetchData(url) {
  // States for data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data function
    const fetchData = async () => {
      try {
        setLoading(true); // Show loader
        setError(null);   // Reset error state

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result); // Set fetched data
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Hide loader
      }
    };

    // Trigger data fetch
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;


import React from 'react';
import useFetch from './useFetch';

const MyComponent = () => {
  const url = 'https://api.example.com/data'; // Replace with your API endpoint
  const { data, error, loading } = useFetchData(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
