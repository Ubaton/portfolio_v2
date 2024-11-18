"use cache"

import React, { useState, useEffect } from "react";
import { StarIcon } from "lucide-react";

// Simulating the RatingSystem class from the previous example
class RatingSystem {
  constructor() {
    this.ratings = [];
    this.totalRatings = 0;
    this.sumRatings = 0;
  }

  addRating(rating) {
    this.ratings.push(rating);
    this.totalRatings++;
    this.sumRatings += rating;
  }

  getAverageRating() {
    return this.totalRatings === 0 ? 0 : this.sumRatings / this.totalRatings;
  }

  getRatingDistribution() {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.ratings.forEach((rating) => distribution[rating]++);
    return distribution;
  }
}

const ratingSystem = new RatingSystem();

export default function RatingSystemUI() {
  const [averageRating, setAverageRating] = useState(0);
  const [distribution, setDistribution] = useState({});
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    updateRatings();
  }, []);

  const updateRatings = () => {
    setAverageRating(ratingSystem.getAverageRating());
    setDistribution(ratingSystem.getRatingDistribution());
  };

  const handleRating = (rating) => {
    ratingSystem.addRating(rating);
    setUserRating(rating);
    updateRatings();
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-light-blue-500 dark:from-yellow-700 dark:to-yellow-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white dark:bg-zinc-900 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
              <div className="py-8 text-base leading-6 space-y-4 text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
                  Rating System
                </h2>
                <p className="text-xl">
                  Average Rating: {averageRating.toFixed(2)}
                </p>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`h-8 w-8 ${
                        star <= userRating
                          ? "text-yellow-400"
                          : "text-zinc-300 dark:text-zinc-600"
                      } cursor-pointer`}
                      onClick={() => handleRating(star)}
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Click on a star to rate
                </p>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">Rating Distribution</h3>
                  {Object.entries(distribution).map(([rating, count]) => (
                    <div key={rating} className="flex items-center mt-2">
                      <span className="text-sm font-medium w-8">
                        {rating} star{rating !== "1" ? "s" : ""}
                      </span>
                      <div className="flex-1 h-4 mx-2 bg-zinc-200 dark:bg-zinc-700 rounded-full">
                        <div
                          className="h-4 bg-yellow-400 rounded-full"
                          style={{
                            width: `${
                              (count / ratingSystem.totalRatings) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-8">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
