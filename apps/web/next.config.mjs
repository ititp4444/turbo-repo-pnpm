/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@pcm/ui', '@pcm/utils'],
    output: 'standalone'
}

export default nextConfig
