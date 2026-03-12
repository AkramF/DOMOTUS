export async function GET() {
  try {
    const API_BASE_URL = "https://thoughtful-amusement-037aae48eb.strapiapp.com";
    const API_ENDPOINT = `${API_BASE_URL}/api/articles?populate=*`;

    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return Response.json(
        { error: `Strapi API error: ${response.status}` },
        { status: response.status }
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
    
    return Response.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
