import styled from "styled-components";
import { Carousel, ImageData } from "../../components/Carousel";

const TrendingSection = styled.section`
  position: relative;
  margin-top: 84px; //todo: responsive
  width: 100vw;
`;

const images: ImageData[] = [
  {
    title: "러너들의 페가수스 리뷰",
    buttonTitle: "리뷰 확인하기",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/4b38fe5e-503b-4aa7-887b-5722a1a2348a/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/4b38fe5e-503b-4aa7-887b-5722a1a2348a/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/1eda2103-ca17-4999-b639-33528ee777c2/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
  {
    title: "나이키 C1TY 키즈",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/8dce1bc4-6fe7-4efc-92c3-347ae4a964c1/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/8dce1bc4-6fe7-4efc-92c3-347ae4a964c1/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/bd4ac171-23c3-40a8-bfb0-7357eb9c953a/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
  {
    title: "ACG 컬렉션",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/a597b58e-f955-4706-9a73-9503f9ec5cd2/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/a597b58e-f955-4706-9a73-9503f9ec5cd2/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/9f5c3fd7-7c42-4aca-863f-4158320b5163/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
  {
    title: "나이키 프로",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/73acb5a5-f9f0-4587-99b0-1897c028d5ba/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/73acb5a5-f9f0-4587-99b0-1897c028d5ba/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/11bdd08b-6744-4f30-b1f9-03f17490f031/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
  {
    title: "프리 메트콘 6",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/3653e88a-f12e-4d7c-8f71-fbdad1c93051/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/3653e88a-f12e-4d7c-8f71-fbdad1c93051/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/ae0c5027-8901-4ab5-89e8-673713d8c877/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
];
function TrendingNow() {
  return (
    <>
      <TrendingSection>
        <Carousel images={images} title="Trending Now" />
      </TrendingSection>
    </>
  );
}

export default TrendingNow;
