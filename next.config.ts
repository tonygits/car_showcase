import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.imagin.studio",
                protocol: "https",
            }
        ],
    },
    typescript: {
        ignoreBuildErrors: true
    }
    /* config options here */
};

export default nextConfig;
