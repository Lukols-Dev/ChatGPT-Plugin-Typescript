import { Todos } from "@/lib/TodoClass.lib";
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    const body = await req.json();
    Todos.createTodo(body);
    return NextResponse.json(
        {success:true},
        {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "https://chat.openai.com",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id",
            },
          }
        );
}