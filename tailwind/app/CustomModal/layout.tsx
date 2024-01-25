const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-2 border-black h-80 flex justify-center items-center">
      {children}
      <div id="modal-root"></div>
    </div>
  );
};

export default layout;
