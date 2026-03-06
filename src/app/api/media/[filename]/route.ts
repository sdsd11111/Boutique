import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(
    request: NextRequest,
    { params }: { params: { filename: string } }
) {
    try {
        const { filename } = await params;

        const sql = 'SELECT data, mime_type FROM media WHERE filename = ?';
        const results: any = await query(sql, [filename]);

        if (!results || results.length === 0) {
            return new NextResponse('File not found', { status: 404 });
        }

        const file = results[0];

        return new NextResponse(file.data, {
            headers: {
                'Content-Type': file.mime_type,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error: any) {
        console.error('Error serving media from DB:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
