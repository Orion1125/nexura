import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Medal } from "lucide-react";

export default function Leaderboard() {
  const [tab, setTab] = useState<"ttrust" | "xp">("ttrust");

  // Mock Data — replace with API later
  const ttrustData = [
    { id: 1, name: "Ariana", score: 12.4 },
    { id: 2, name: "Promise", score: 9.1 },
    { id: 3, name: "Daniel", score: 7.8 },
    { id: 4, name: "Liam", score: 4.2 },
  ];

  const xpData = [
    { id: 1, name: "Ariana", score: 820 },
    { id: 2, name: "Liam", score: 640 },
    { id: 3, name: "Promise", score: 500 },
    { id: 4, name: "Daniel", score: 420 },
  ];

  const leaderboard = tab === "ttrust" ? ttrustData : xpData;

  return (
    <div className="min-h-screen bg-background overflow-auto p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-2">Leaderboard</h1>

          <p className="text-lg text-muted-foreground">
            Track top performers across the Intuition ecosystem.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={tab === "ttrust" ? "default" : "outline"}
            onClick={() => setTab("ttrust")}
          >
            tTRUST Leaderboard
          </Button>

          <Button
            variant={tab === "xp" ? "default" : "outline"}
            onClick={() => setTab("xp")}
          >
            XP Leaderboard
          </Button>
        </div>

        {/* Leaderboard Table */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-center">
              {tab === "ttrust" ? "Top tTRUST Earners" : "Top XP Earners"}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {leaderboard.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  No leaderboard data yet.
                </p>
              ) : (
                leaderboard.map((user, index) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card"
                  >
                    {/* Rank + Medal */}
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold w-10 text-center">
                        {index + 1}
                      </div>

                      {/* Medal for Top 3 */}
                      {index < 3 ? (
                        <Medal
                          className={`w-6 h-6 ${
                            index === 0
                              ? "text-yellow-500"
                              : index === 1
                              ? "text-gray-400"
                              : "text-orange-500"
                          }`}
                        />
                      ) : (
                        <div className="w-6" />
                      )}

                      {/* User Name */}
                      <div className="font-medium">{user.name}</div>
                    </div>

                    {/* Score (ttrust or xp) */}
                    <div className="font-semibold text-primary">
                      {tab === "ttrust" ? `${user.score} tTRUST` : `${user.score} XP`}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
