import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp11484809.jpg")`,
      }}
    >
      <div className="backdrop-blur-md bg-black/50 border border-white/20 rounded-3xl shadow-2xl p-16 max-w-md w-full mx-4 text-center space-y-10">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          Welcome to <span className="text-blue-400">Nexura</span>
        </h1>
        <p className="text-white/70 text-lg">
          Log in or register to explore the ecosystem, track your achievements, and connect with the community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            onClick={() => setLocation("/profile")}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-transform"
          >
            Login
          </Button>
          <Button
            onClick={() => setLocation("/profile")}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-transform"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
