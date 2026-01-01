
export default function Home(){
  return (
    <section className="px-10 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <h2 className="text-4xl font-bold mb-4">Find Your Dream Job</h2>
      <p className="max-w-xl mb-6">Explore thousands of jobs from top companies.</p>
      <div className="grid md:grid-cols-3 gap-4 bg-white p-6 rounded text-gray-800">
        <div><h4 className="font-bold text-xl">50k+</h4><p>Jobs</p></div>
        <div><h4 className="font-bold text-xl">10k+</h4><p>Companies</p></div>
        <div><h4 className="font-bold text-xl">1M+</h4><p>Candidates</p></div>
      </div>
    </section>
  );
}
