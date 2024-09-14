import Topnav from "./(components)/topnav";

export default function SellersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Topnav />
      {children}
    </>
  );
}
