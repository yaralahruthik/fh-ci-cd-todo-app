export default function TaskList({
  header,
  children,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {header}
      <ul>{children}</ul>
    </>
  );
}
