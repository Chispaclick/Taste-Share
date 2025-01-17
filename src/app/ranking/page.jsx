import ProtectedRoute from "@/components/protect-router/ProtectedRoute";

function Ranking() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Ranking Page</h1>
      </div>
    </ProtectedRoute>
  );
}

export default Ranking;
