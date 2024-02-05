'use client'
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/mockData');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching mock data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const result = await response.json();
        console.log(result.data)
      } catch (error) {
        console.error('Error fetching mock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js with Mock Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
