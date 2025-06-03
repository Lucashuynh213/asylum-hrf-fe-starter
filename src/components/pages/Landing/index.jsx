import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20;
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10);
  };

  const handleReadMore = () => {
    window.open('https://www.humanrightsfirst.org', '_blank');
  };

  const handleViewData = () => {
    navigate('/graphs');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 font-sans">
      <main className="flex-1 overflow-auto">
        {/* Data Visualizations Section */}
        <section className="py-16 px-8 bg-gray-50 text-center">
      
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="flex flex-col items-center">
              <img src={barGraph} alt="Bar Graph" className="w-50 h-60 mb-4" />
              <p>Search Grant Rates By Office</p>
            </div>
             <div className="flex flex-col items-center">
              <img src={pieChart} alt="Pie Chart" className="w-50 h-60 mb-4" />
              <p>Search Grant Rates By Nationality</p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleViewData}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded shadow"
                >
                  View the Data
                </button>
                <button
                  onClick={downloadCSV}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow"
                >
                  Download Data
                </button>
              </div>
            </div>
              <div className="flex flex-col items-center">
              <img src={lineGraph} alt="Line Graph" className="w-50 h-60 mb-4" />
              <p>Search Grant Rates Over Time</p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white min-h-[70vh]">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-lg mb-6">
              Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
            </p>
           <div className="flex justify-center mb-8">
              <button
                onClick={handleReadMore}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded"
              >
                Read More
              </button>
            </div>

            {/* Systemic Disparity Insights */}
            <div>
              <h2 className="text-2xl font-bold mb-4 border-t pt-4">
                Systemic Disparity Insights
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>75% approval rate for applicants from USA in 2019</li>
                <li>22% decrease in grants for remote works from 2023 to 2025</li>
                <li>40% more likely to receive asylum if represented by an attorney</li>
                <li>15% increase in grant rates in 2021 overall</li>
              </ul>
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
      <footer className="text-center py-6 bg-white border-t border-gray-300">
        <p className="text-sm text-gray-500">© 2025 Human Rights First</p>
      </footer>

      {/* Back to Top */}
      <div className="text-center py-4 bg-gray-100">
        <button
          onClick={scrollToTop}
          className="text-blue-600 hover:underline text-lg"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
};
