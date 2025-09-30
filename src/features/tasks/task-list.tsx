export default function TaskList({
  header,
  children,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      {header}
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}
