import React, { useState, useEffect } from 'react';
import FaqAccordion from './components/FaqAccordion/FaqAccordion';
import { fetchFaqData } from './services/api';
import './styles/main.scss';
import { Faq } from './interfaces/Faq';



const App: React.FC = () => {
  const [faqData, setFaqData] = useState<Faq[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await fetchFaqData(0, 10);
        setFaqData(data);
        setLoadedCount(10);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  const loadMore = async () => {
    try {
      const nextData = await fetchFaqData(loadedCount, 10);
      if (nextData.length > 0) {
        setFaqData((prevData) => [...prevData, ...nextData]);
        setLoadedCount((prevCount) => prevCount + 10);
      }
    } catch (error) {
      console.error('Error loading more data:', error);
    }
  };

  return (
    <div className="App">
      <div className="container p-5">
        {
          !loading && <div>
            <h4 className="text-center mb-4 mt-4">Frequently Asked Questions</h4>
            <FaqAccordion faqData={faqData} />
            <div className="d-flex justify-content-center">
              <button onClick={loadMore} className="btn btn-dark mt-4" data-testid="load-more-button">Load more ...</button>

            </div>

          </div>
        }
      </div>

    </div>
  );
};

export default App;
