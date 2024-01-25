const TestComp = () => {
  console.log("test");
  return (
    <div className="w-96 h-80 flex flex-col justify-center items-center gap-7">
      <span>메세지</span>
      <div>
        <button>취소</button>
        <button>확인</button>
      </div>
    </div>
  );
};

export default TestComp;
