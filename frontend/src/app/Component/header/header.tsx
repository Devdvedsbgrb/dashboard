import { useEffect, useState } from "react";

const charts: Record<string, string> = {
  "Төлбөрийн Арга": "ka1.png",
  "Топ 10 Өдөр": "ka2.png",
  "Идэвхтэй хэрэглэгч": "ka3.png",
  "Сайн салбар (Size)": "ka4.png",
  "Хамгийн их зарагдсан комбо": "ka5.png",
};

export default function Home() {
  const [selected, setSelected] = useState("ka1.png");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">📊 Хяналтын Самбар</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            График сонгох:
          </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
          >
            {Object.entries(charts).map(([label, file]) => (
              <option key={file} value={file}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <img
            src={`/static/${selected}`} // images should be placed in /public/static/
            alt="Chart"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
