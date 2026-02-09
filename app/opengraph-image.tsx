import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pham Trung Hieu - Senior Software Engineer'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #1d1d1d 0%, #0a0a0a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui, sans-serif',
                    position: 'relative',
                }}
            >
                {/* Purple glow effect */}
                <div
                    style={{
                        position: 'absolute',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                    }}
                >
                    <h1
                        style={{
                            fontSize: '80px',
                            fontWeight: 900,
                            background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            margin: 0,
                            padding: 0,
                            letterSpacing: '-0.05em',
                        }}
                    >
                        Pham Trung Hieu
                    </h1>
                    <p
                        style={{
                            fontSize: '36px',
                            color: '#888888',
                            margin: '20px 0 0 0',
                            fontWeight: 600,
                        }}
                    >
                        Senior Software Engineer
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            marginTop: '40px',
                            fontSize: '24px',
                            color: '#666666',
                        }}
                    >
                        <span>React</span>
                        <span>•</span>
                        <span>Next.js</span>
                        <span>•</span>
                        <span>TypeScript</span>
                        <span>•</span>
                        <span>Node.js</span>
                    </div>
                </div>

                {/* Bottom badge */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '20px 40px',
                        borderRadius: '50px',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <div
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: '#10b981',
                        }}
                    />
                    <span
                        style={{
                            fontSize: '20px',
                            color: '#ffffff',
                            fontWeight: 600,
                        }}
                    >
                        Open to Work
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
