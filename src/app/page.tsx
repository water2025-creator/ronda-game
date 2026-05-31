'use client'

"use client";

import { useState } from "react";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            🎮 Ronda Game
          </h1>
          <p className="text-gray-600 text-lg">Bienvenue dans l'aventure!</p>
        </div>

        <div className="space-y-6">
          {!gameStarted ? (
            <>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  Comment ça marche ?
                </h2>
                <ul className="text-blue-800 space-y-2">
                  <li>✨ Jouez des rounds</li>
                  <li>🎯 Gagnez des points</li>
                  <li>🏆 Améliorez votre score</li>
                </ul>
              </div>

              <button
                onClick={() => setGameStarted(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
              >
                🚀 Commencer le jeu
              </button>
            </>
          ) : (
            <>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-4">Score actuel</p>
                <p className="text-4xl font-bold text-purple-600">{score}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setScore(score + 10)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
                >
                  +10 points
                </button>
                <button
                  onClick={() => setScore(Math.max(0, score - 5))}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition"
                >
                  -5 points
                </button>
              </div>

              <button
                onClick={() => {
                  setGameStarted(false);
                  setScore(0);
                }}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                ⏹️ Terminer la partie
              </button>
            </>
          )}
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm border-t pt-4">
          <p>Ronda Game v1.0 - Déployé sur GitHub Pages ✨</p>
        </div>
      </div>
    </div>
  );
}

