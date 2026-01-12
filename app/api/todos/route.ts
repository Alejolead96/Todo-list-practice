import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import * as yup from "yup";

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json({ message: "Todo List Search", data: todos });
}

export async function POST(request: Request) {
  const schema = yup.object().shape({
    description: yup.string().required(),
    completed: yup.boolean().optional().default(false),
  });

  const data = schema.validateSync(await request.json(), {
    abortEarly: false,
    stripUnknown: true,
  });

  const todo = await prisma.todo.create({ data });

  return NextResponse.json({ message: "Todo Created", data: todo });
}
