import { LoadingPageWrap, LoadingSpinnerWrap } from "./loadingstyle";
import loadingImg from '../../assets/spinner/spinner.gif'
import loadingImgLogo from '../../assets/splash.png';

export const Loading = () => {
  return (
    <LoadingPageWrap>
        <LoadingSpinnerWrap>
            <img id="logo" src={loadingImgLogo} alt="로고"/>
            <img id='spinner'src={loadingImg} alt="로딩스피너"/>
        </LoadingSpinnerWrap>
    </LoadingPageWrap>
  )
}
