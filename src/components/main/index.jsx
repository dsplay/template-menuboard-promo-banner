import {
  FitText,
  useTemplateVal,
} from '@dsplay/react-template-utils';
import './style.sass';

function Main() {
  return (
    <div className="main h-screen p-8">
      <div className="grid grid-rows-3 h-full">
        <div className="grow bg-slate-400">
          <h1>DSPLAY Template</h1>
          <h2>{useTemplateVal('title')}</h2>
        </div>
        <div className="grow my-8 bg-slate-600">
          3
        </div>
        <div className="grid grid-cols-2 gap-12 bg-slate-800">
          <div className="h-36">
            <div className="flex justify-center items-center h-auto">
              <img src={useTemplateVal('promo_img_01')} alt="promo_img_01" />
            </div>
            <div className="flex justify-center items-center h-20 bg-red-400">
              <FitText style={{ textAlign: 'center' }}>R$ 25,00</FitText>
            </div>
          </div>
          <div className="h-36 ">
            <div className="flex justify-center items-center h-auto">
              <img src={useTemplateVal('promo_img_02')} alt="promo_img_02" />
            </div>
            <div className="flex justify-center items-center h-20 bg-red-400">
              <FitText style={{ textAlign: 'center' }}>R$ 25,00</FitText>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Main;
