export default function CategoryCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-sand-light p-4 rounded shadow">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>تصفح</a>
    </div>
  );
}