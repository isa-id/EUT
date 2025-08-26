export default function UpgradeCard({ title, cost }) {
  return (
    <div className="upgrade">
      {title} (Cost: {cost})
    </div>
  );
}
