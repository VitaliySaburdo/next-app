import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  
  const headerList = headers();
  const type = headerList.get('Content-type');
  console.log(type)
  const cookiesList = cookies();
  const cookie_2 = cookiesList.get('Cookie_2');

//   redirect("/blog");
    return NextResponse.json({message: `You're item ${id} successful deleted`, cookie_2})
}
