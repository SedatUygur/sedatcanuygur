import { ImageResponse } from 'next/og';

export const runtime = 'edge';

/**
 * Generates an Open Graph image for a blog post.
 *
 * @param {Request} request Request object containing the URL query string parameters.
 * @returns {Promise<Response>} A response containing the generated image.
 * @throws {Error} If there's an error generating the image.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const date = searchParams.get('date');
    const description = searchParams.get('description');
    const title = searchParams.get('title');

    return new ImageResponse(
      (
        <div
          style={{
            alignItems: 'center',
            background: 'linear-gradient(to bottom right, #FAFAF0, #F8E08E)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FAFAF0',
              width: '80%',
              height: '80%',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#0F0A0A',
                  margin: '0 0 20px 0',
                }}
              >
                {title}
              </h1>
              {description && (
                <p
                  style={{
                    fontSize: '24px',
                    color: '#0F0A0A',
                    margin: '0 0 20px 0',
                  }}
                >
                  {description}
                </p>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: '20px',
                }}
              >
                <span style={{ fontSize: '18px', color: '#0F0A0A' }}>
                  sedatcanuygur.vercel.app
                </span>
                {date && (
                  <span style={{ fontSize: '18px', color: '#0F0A0A' }}>
                    {date}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate the image. Error: ${e.message}`, {
      status: 500,
    });
  }
}
