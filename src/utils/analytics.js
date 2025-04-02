// src/utils/analytics.js

export const setUserId = (userId) => {
  if (userId) {
    console.log(`Analytics: Set user ID to ${userId}`);
  } else {
    console.log('Analytics: User logged out, clearing user ID');
  }
};
