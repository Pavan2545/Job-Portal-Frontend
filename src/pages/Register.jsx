
export default function Register(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Create Account</h2>
        <input className="border p-2 w-full mb-3" placeholder="Email"/>
        <input type="password" className="border p-2 w-full mb-3" placeholder="Password"/>
        <select className="border p-2 w-full mb-3"><option>Applicant</option><option>Employer</option></select>
        <button className="bg-green-600 text-white w-full py-2 rounded">Register</button>
      </div>
    </div>
  );
}
