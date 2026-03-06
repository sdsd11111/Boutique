import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const mimeType = file.type || 'application/octet-stream';

        // Generate unique filename
        const timestamp = Date.now();
        const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filename = `${timestamp}-${originalName}`;

        // Store in Database instead of Filesystem
        const sql = 'INSERT INTO media (filename, mime_type, data) VALUES (?, ?, ?)';
        await query(sql, [filename, mimeType, buffer]);

        return NextResponse.json({
            success: true,
            filename: filename,
            url: `/api/media/${filename}`
        });
    } catch (error: any) {
        console.error('Error uploading file to DB:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
