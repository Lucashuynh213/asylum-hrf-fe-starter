import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    window.open('https://www.humanrightsfirst.org', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 font-sans">
    {/* MAIN CONTENT */}
    <main className="flex-grow">
      {/* Data Visualizations Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Data Visualizations</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="flex flex-col items-center">
            <img src={pieChart} alt="Pie Chart" className="w-40 h-40 mb-4" />
            <p>Use of Force by Type</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={lineGraph} alt="Line Graph" className="w-40 h-40 mb-4" />
            <p>Yearly Trend</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={barGraph} alt="Bar Graph" className="w-40 h-40 mb-4" />
            <p>City Comparisons</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white min-h-[70vh]">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Police Use of Force Project
          </h1>
          <p className="text-lg mb-6">
            A nationwide effort to bring transparency and accountability to law enforcement's use of force.
          </p>
          <div className="flex gap-4">
            <button
              onClick={downloadCSV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow"
            >
              Download Data
            </button>
            <button
              onClick={handleReadMore}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={paperStack}
            alt="Documents"
            className="rounded-lg shadow-lg w-[90%] max-w-md"
          />
        </div>
      </section>
    </main>

    {/* FOOTER */}
    <footer className="text-center py-6 bg-white">
      <div className="text-sm text-gray-500">
        {'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}
      </div>
      <button
        onClick={scrollToTop}
        className="mt-4 text-blue-600 hover:underline"
      >
        Back to Top
      </button>
    </footer>
  </div>
  );
};
