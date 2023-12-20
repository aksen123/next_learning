
export default function Layout({ children }) {
  return (
    <html lang="en">
      <div className="cart">
      <p>현대카드 무이자이벤트중</p> 
        {children}
      </div>
    </html>
  );
}