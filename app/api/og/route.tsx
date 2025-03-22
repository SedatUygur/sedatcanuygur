import { ImageResponse } from "next/og";

export const runtime = "edge";

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
    const title = searchParams.get("title");
    const date = searchParams.get("date");

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div tw="flex flex-col items-center bg-primary w-full p-10 space-y-4">
            <div tw="flex max-w-screen-md">
              <h1 tw="text-4xl">{title}</h1>
            </div>
            <div tw="flex flex-row items-start justify-between w-full">
              <span tw="text-lg">sedatcanuygur.vercel.app</span>
              {date && <span tw="text-lg">{date}</span>}
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
    return new Response(`Failed to generate the image. Error: ${e.message}`, {
      status: 500,
    });
  }
}
