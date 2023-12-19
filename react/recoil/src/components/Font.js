import { useRecoilState,useRecoilValue } from "recoil";
import { fontSizeState, fontSizeLabelState } from "../atom/font-atom";

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <div>
      <h1>Font</h1>
      <span>현재 폰트 사이즈 : {fontSizeLabel}</span>
      <br />
      <button onClick={()=>{setFontSize(fontSize + 1)}} style={{fontSize: `${fontSizeLabel}`}}>
        폰트 키우기
      </button>
    </div>
  );
}