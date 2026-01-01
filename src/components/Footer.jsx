
export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 p-8 mt-20">
      <div className="grid md:grid-cols-3 gap-6">
        <div><h3 className="font-bold">JobPortal</h3><p>Find your future.</p></div>
        <div><h3 className="font-bold">Links</h3><p>Jobs | About | Contact</p></div>
        <div><h3 className="font-bold">Contact</h3><p>support@jobportal.com</p></div>
      </div>
      <p className="text-center mt-6 text-sm">© 2026 JobPortal</p>
    </footer>
  );
}
