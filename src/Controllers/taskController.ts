import { taskModel } from "@models/task";

async function createTask(request: any, response: any) {
    try {
        const task = await taskModel.create(request.body);
        response.status(201).json(task);
    } catch (error) {
        response.status(500).json({ error: (error as Error).message } );
    }
}

async function getTasks(request: any, response: any) {
    try {
        const onlyNonCompleted = Boolean(request.query.onlyNonCompleted);

        const tasks = await taskModel.findMany({
            ...(onlyNonCompleted && { where: { completed: false } })
        });
        response.status(200).json(tasks);
    } catch (error) {
        response.status(500).json({ error: "Failed to fetch tasks" });
    }
}

export { createTask, getTasks };