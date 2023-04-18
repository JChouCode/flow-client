import { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";

const TODO_QUERY = gql`
  query Todo {
    todo {
      id 
      title
    }
  }
`;

const COMPLETED_QUERY = gql`
    query Completed {
        completed {
            id
            title
        }
    }
`;

type Todo = {
    id: number;
    title: string;
}

enum Status {
    TODO = "viewing todo",
    ADDING_TASK = "viewing todo and adding a task",
    COMPLETED = "viewing completed",
}

export default function Tasks() {
    const { loading: todoLoading, error: todoError, data: todoData } = useQuery(TODO_QUERY);
    const { loading: completedLoading, error: completedError, data: completedData } = useQuery(COMPLETED_QUERY);
    const [status, setStatus] = useState(Status.TODO);

    if (todoLoading) return 'Loading...';
    if (todoError) return `Error! ${todoError.message}`;

    const todo = todoData.todo

    return (
        <div>
            <ul>
                {todoData && todo.map((todo: Todo) => (
                    <li>{todo.title}</li>
                ))}

            </ul>
        </div>
    )
}
