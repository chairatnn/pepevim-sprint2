export default function Timer() {

  return (
    <div className="flex gap-4 text-white">
      <TimeBox label="Days" value={3} />
      <TimeBox label="Hours" value={4} />
      <TimeBox label="Min" value={16} />
      <TimeBox label="Sec" value={18} />
    </div>
  );
}
