/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URI: "mongodb://localhost:27017/MastersSwimTimes"
    }
}

module.exports = nextConfig
