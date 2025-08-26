import ClickerButton from "../components/ClickerButton";
import UpgradeCard from "../components/UpgradeCard";

export default function PageOne() {
  return (
    <main className="page-1">
      {/* Columna izquierda: Clicker */}
      <div className="clicker-area">
        <ClickerButton />
      </div>

      {/* Columna derecha: Upgrades */}
      <div className="upgrades-area">
        <h2>Upgrades</h2>
        <UpgradeCard title="+1 P$/s" cost="50" />
        <UpgradeCard title="x2 P$/s" cost="200" />
      </div>
    </main>
  );
}
