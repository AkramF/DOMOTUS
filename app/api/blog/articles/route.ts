export async function GET() {
  try {
    const API_BASE_URL = "https://thoughtful-amusement-037aae48eb.strapiapp.com";
    const API_ENDPOINT = `${API_BASE_URL}/api/articles?populate=*`;

    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(15000), // Increased from 10s to 15s
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      console.error(`[v0] Strapi API error: ${response.status} ${response.statusText}`);
      return Response.json(
        { error: `Strapi API error: ${response.status}`, data: [] },
        { status: 200 } // Return 200 to prevent client errors, empty data
      );
    }

    const data = await response.json();

    return Response.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[v0] API route error:', errorMessage);
    
    // Return graceful fallback instead of 500
    return Response.json(
      { error: errorMessage, data: [] },
      { status: 200 } // Return 200 to prevent blocking UI
    );
  }
}
