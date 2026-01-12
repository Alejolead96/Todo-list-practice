import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import * as yup from "yup";

interface PropsParams {
  params: Promise<{ id: string }>;
}

const findOneTodo = async (id: string) => {
  try {
    const schema = yup.string().uuid().required();
    const idValid = schema.validateSync(id);

    const todo = await prisma.todo.findUnique({
      where: {
        id: idValid,
      },
    });

    return todo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function GET(request: Request, { params }: PropsParams) {
  const { id } = await params;

  try {
    const todo = await findOneTodo(id);

    if (!todo) {
      return NextResponse.json({ message: `Todo not found ${id}` });
    }

    return NextResponse.json({ message: `Todo Readed ${id}`, data: todo });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Todo not found ${id}` });
  }
}

export async function PUT(request: Request, { params }: PropsParams) {
  const { id } = await params;

  const todo = await findOneTodo(id);

  if (!todo) {
    return NextResponse.json({ message: `Todo not found ${id}` });
  }

  try {
    const schema = yup.object({
      description: yup.string().optional(),
      completed: yup.boolean().optional(),
    });

    //TODO: Pass this schema to another function to validate the data

    const data = schema.validateSync(await request.json(), {
      abortEarly: false,
      stripUnknown: true,
    });

    const todo = await prisma.todo.update({
      where: { id },
      data,
    });

    return NextResponse.json({ message: `Todo Readed ${id}`, data: todo });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Todo not found ${id}` });
  }
}
