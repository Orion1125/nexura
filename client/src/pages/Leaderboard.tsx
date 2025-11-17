import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rankColors = {
  1: "#FFD700", // Gold
  2: "#C0C0C0", // Silver
  3: "#CD7F32", // Bronze
};

export default function Leaderboard() {
  const leaderboardData = [
    { id: 1, name: "Ariana", avatar: "https://i.pravatar.cc/80?img=1", xp: 820, tTrust: 12.4 },
    { id: 2, name: "Liam", avatar: "https://i.pravatar.cc/80?img=4", xp: 640, tTrust: 4.2 },
    { id: 3, name: "Promise", avatar: "https://i.pravatar.cc/80?img=2", xp: 500, tTrust: 9.1 },
    { id: 4, name: "Daniel", avatar: "https://i.pravatar.cc/80?img=3", xp: 420, tTrust: 7.8 },
  ];

  const top3 = leaderboardData.slice(0, 3);
  const remaining = leaderboardData.slice(3);

  const userRank = { rank: 3, name: "Promise", avatar: "https://i.pravatar.cc/80?img=2", xp: 500, tTrust: 9.1 };

  return (
    <div className="min-h-screen p-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Top 3 Triangle */}
        <div className="relative h-64 mb-12">
          {/* Floating triangles behind top 3 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute w-20 h-20 bg-purple-600/30 rotate-45 -top-10 -left-20 rounded-lg animate-pulse-slow"></div>
            <div className="absolute w-24 h-24 bg-indigo-500/30 rotate-[30deg] -top-12 right-10 rounded-lg animate-pulse-slow"></div>
            <div className="absolute w-16 h-16 bg-pink-500/30 rotate-[-20deg] top-16 left-1/4 rounded-lg animate-pulse-slow"></div>
          </div>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            {top3[0] && (
              <div className="relative flex flex-col items-center mb-6">
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 font-bold text-xl"
                  style={{ color: rankColors[1] }}
                >
                  1
                </div>
                <div className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg bg-gradient-to-tr from-yellow-400/40 to-yellow-500/30 flex items-center justify-center">
                  <img src={top3[0].avatar} alt={top3[0].name} className="w-20 h-20 rounded-full" />
                </div>
                <div className="mt-2 text-center font-semibold">{top3[0].name}</div>
                <div className="flex gap-4 mt-1 font-semibold text-white">
                  <div>⚡ {top3[0].xp}</div>
                  <div>🔰 {top3[0].tTrust}</div>
                </div>
              </div>
            )}
          </div>

          {/* Second and Third */}
          <div className="absolute bottom-0 w-full flex justify-between px-24">
            {top3[1] && (
              <div className="relative flex flex-col items-center">
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 font-bold text-lg"
                  style={{ color: rankColors[2] }}
                >
                  2
                </div>
                <div className="w-20 h-20 rounded-full border-4 border-silver-400 shadow-md bg-gradient-to-tr from-gray-400/30 to-gray-300/20 flex items-center justify-center">
                  <img src={top3[1].avatar} alt={top3[1].name} className="w-16 h-16 rounded-full" />
                </div>
                <div className="mt-1 text-center font-semibold">{top3[1].name}</div>
                <div className="flex gap-2 mt-1 font-semibold text-white">
                  <div>⚡ {top3[1].xp}</div>
                  <div>🔰 {top3[1].tTrust}</div>
                </div>
              </div>
            )}

            {top3[2] && (
              <div className="relative flex flex-col items-center">
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 font-bold text-lg"
                  style={{ color: rankColors[3] }}
                >
                  3
                </div>
                <div className="w-20 h-20 rounded-full border-4 border-amber-600 shadow-md bg-gradient-to-tr from-amber-400/30 to-amber-500/20 flex items-center justify-center">
                  <img src={top3[2].avatar} alt={top3[2].name} className="w-16 h-16 rounded-full" />
                </div>
                <div className="mt-1 text-center font-semibold">{top3[2].name}</div>
                <div className="flex gap-2 mt-1 font-semibold text-white">
                  <div>⚡ {top3[2].xp}</div>
                  <div>🔰 {top3[2].tTrust}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Remaining Users */}
        <Card className="p-6 bg-gray-900 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-center font-bold text-lg">Top 50 Performers</CardTitle>
          </CardHeader>

          <CardContent className="max-h-[400px] overflow-y-auto space-y-2">
            <div className="grid grid-cols-12 bg-gray-800 p-3 rounded-t-md font-semibold text-white">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-5">Username</div>
              <div className="col-span-3 text-center">XP</div>
              <div className="col-span-3 text-center">tTRUST</div>
            </div>

            {remaining.map((user, index) => (
              <div
                key={user.id}
                className="grid grid-cols-12 items-center p-3 rounded-lg bg-gray-900 hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                <div className="col-span-1 text-center font-bold">{index + 4}</div>
                <div className="col-span-5 flex items-center gap-3">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-white/20" />
                  <div className="font-semibold">{user.name}</div>
                </div>
                <div className="col-span-3 text-center font-semibold text-yellow-300">⚡ {user.xp}</div>
                <div className="col-span-3 text-center font-semibold text-green-300">🔰 {user.tTrust}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* User Ranking */}
        <div className="mt-10 p-6 rounded-lg border border-white/20 bg-gray-900 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-4 text-white">Your Ranking</h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: rankColors[userRank.rank] || "#1f2937" }}
              >
                {userRank.rank}
              </div>

              <img src={userRank.avatar} alt={userRank.name} className="w-10 h-10 rounded-full border-2 border-white/30" />
              <div className="font-semibold text-white">{userRank.name}</div>
            </div>

            <div className="flex items-center gap-6 font-semibold text-lg text-white">
              <div>⚡ {userRank.xp}</div>
              <div>🔰 {userRank.tTrust}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
