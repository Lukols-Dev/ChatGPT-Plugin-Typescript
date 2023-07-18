import { Todos } from "@/lib/TodoClass.lib";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      todos: Todos.getTodos(),
    },
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