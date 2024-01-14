import {NextResponse} from 'next/server'

export async function POST(request) {
    
    let data = await request.json();
    let id = data.id;
    let password = data.password;
    if (data.id==process.env.adminId && password==process.env.key) {
      return NextResponse.json({auth:343500}); 
       
        
    }
    else{

        return NextResponse.redirect(new URL("/admin", request.url));
    }
}     