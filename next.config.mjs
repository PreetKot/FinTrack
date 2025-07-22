/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    transpilePackages: ['framer-motion'],
    experimental: {
        esmExternals: false
    },
    
    webpack: (config, { isServer }) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        
        return config;
    },
    
    // Disable minification for better debugging
    swcMinify: false
};

export default nextConfig;
