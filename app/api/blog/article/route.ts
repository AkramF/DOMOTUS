export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return Response.json(
        { error: 'Slug parameter required' },
        { status: 400 }
      );
    }

    const API_BASE_URL = "https://thoughtful-amusement-037aae48eb.strapiapp.com";
    const encodedSlug = encodeURIComponent(slug);
    const url = `${API_BASE_URL}/api/articles?filters[Slug][$eq]=${encodedSlug}&populate=*`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
