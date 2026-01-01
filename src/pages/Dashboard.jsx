
export default function Dashboard(){
  return (
    <div className="px-10 py-10">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">Jobs Applied: 12</div>
        <div className="bg-white p-6 rounded shadow">Saved Jobs: 5</div>
        <div className="bg-white p-6 rounded shadow">Profile Views: 34</div>
      </div>
    </div>
  );
}
