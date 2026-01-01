export default function CartItem({ item, onRemove }: { item: any; onRemove: (id: number) => void }) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.price}</p>
      <button onClick={() => onRemove(item.id)}>إزالة</button>
    </div>
  );
}