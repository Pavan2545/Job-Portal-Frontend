
export default function Jobs(){
  return (
    <div className="px-10 py-10 grid md:grid-cols-3 gap-6">
      {[1,2,3,4,5,6].map(i=>(
        <div key={i} className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">Software Engineer</h3>
          <p className="text-gray-600">Remote • Full-time</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Apply</button>
        </div>
      ))}
    </div>
  );
}
