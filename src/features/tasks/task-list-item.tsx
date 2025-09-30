export default function TaskListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <li className="border p-4 rounded-sm font-bold">{children}</li>;
}
