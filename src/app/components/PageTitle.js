export default function PageTitle({ title }) {
  return (
    <>
      <title>{title ? `${title} | Kavi Shree Exim` : "Kavi Shree Exim"}</title>
    </>
  );
}
