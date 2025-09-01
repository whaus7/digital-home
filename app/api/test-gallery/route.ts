import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    // Test the categorized API
    const apiUrl =
      category && category !== "all"
        ? `/api/gallery/categorized?category=${category}`
        : "/api/gallery/categorized";

    const response = await fetch(`http://localhost:3000${apiUrl}`);
    const data = await response.json();

    return NextResponse.json({
      success: true,
      testUrl: apiUrl,
      data: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
