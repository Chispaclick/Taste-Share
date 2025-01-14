import '@/app/globals.css'

function Spinner({ size = 8, color = 'blue-500' }) {
  return (
    <div
      className={`w-${size} h-${size} border-4 border-${color} border-t-transparent rounded-full animate-spin`}
    ></div>
  );
}

export default Spinner;