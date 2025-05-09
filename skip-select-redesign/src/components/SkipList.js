import React, { useEffect, useState } from "react";
import SkipCard from "./SkipCard";
import "./SkipList.css";

const SkipList = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        const data = await response.json();
        setSkips(data);
      } catch (error) {
        console.error("Failed to fetch skip data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return (
    <div className="skip-list">
      <h2 className="skip-h3">Choose Your Skip Size</h2>
      <p className="skip-p">Select the skip size that best suits your needs</p>
      {loading ? (
        <p>Loading skip options...</p>
      ) : (
        <div className="skip-grid">
          {skips.map((skip) => (
            <SkipCard key={skip.id} skip={skip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkipList;
