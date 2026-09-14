export default function PageHeader({
  path,
  title,
  note,
}: {
  path: string;
  title: string;
  note?: string;
}) {
  return (
    <header className="mb-10">
      <p className="kicker phosphor mb-3">{path}</p>
      <h1 className="page-title">{title}</h1>
      {note ? <p className="mt-4 max-w-xl text-sm tracking-[0.08em] text-[var(--bone-dim)]">{note}</p> : null}
      <hr className="rule" />
    </header>
  );
}
