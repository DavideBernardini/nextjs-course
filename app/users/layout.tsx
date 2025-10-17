export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>~~This is a User Route~~</h1>
      {children}
    </div>
  );
}
