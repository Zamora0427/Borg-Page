type SectionHeadingProps = {
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ title, description, id }: SectionHeadingProps) {
  return (
    <div id={id}>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-slate-300">{description}</p> : null}
    </div>
  );
}
