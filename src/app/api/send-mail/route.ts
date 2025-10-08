import { EmailTemplate } from "@/components/EmailTemplate";
import { resend } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest ){
  try{
      const {email,message} = await req.json();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address format.' },
        { status: 400 }
      );
    }
       const { data, error } = await resend.emails.send({
      from: 'Anuj <onboarding@resend.dev>',
      to: ['contactanujkurmi@gmail.com'],
      subject: 'Message from Your Portfolio',
      react: EmailTemplate({ Email: email, Message: message }) as any,
    });

    
    if (error) {
        console.log("Error in sending email:",error);
        return NextResponse.json(
            { success: false, message: `Something went wrong while sending email : ${error}` },
            { status: 501 }
        );
    }
    
    return NextResponse.json(
        { success: true, message: 'I will get in touch with you soon :)' },
        { status: 200 }
    );
    
}

catch(error){
        console.log("Error in sending email:",error);
 return NextResponse.json(
      { success: false, message: `Server error occurred : ${error}` },
      { status: 501 }
    );

    }
}