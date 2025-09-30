export default function TaskListHeader({ count }: { count: number }) {
  return <h2 className="text-muted-foreground">Total Tasks ({count})</h2>;
}
