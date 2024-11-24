import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.imagin.studio",
                protocol: "https",
            }
        ],
    }
    /* config options here */
};

export default nextConfig;
