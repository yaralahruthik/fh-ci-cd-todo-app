import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

const addTaskSchema = z.object({
  taskName: z.string().trim().min(1, {
    message: 'Add a descriptive task',
  }),
});

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (taskName: string) => void;
}) {
  const form = useForm<z.infer<typeof addTaskSchema>>({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      taskName: '',
    },
  });

  function onSubmit(values: z.infer<typeof addTaskSchema>) {
    onAddTask(values.taskName);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <FormField
          control={form.control}
          name="taskName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Task Name</FormLabel>
              <FormControl>
                <Input placeholder="What is the task?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
}
