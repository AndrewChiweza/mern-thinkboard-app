const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

require("dotenv").config();

//Create a Rate Limiter that allows 100 requests per 20 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "20 s"),
});

module.exports = ratelimit;
