import siteLogo from "../images/kvs-header-logo.svg";
import homeCtaBanner from "../images/home/sub-bg.jpg";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/instagram.png";
import linkDnIcon from "../images/linkdln.png";
import bigLogo from "../images/big-logo.jpg";
import sliderImg1 from "../images/home/slider-img1.webp"
import sliderImg2 from "../images/home/slider-img2.webp"
import sliderImg3 from "../images/home/slider-img3.webp"

import aboutHero from "../images/about/about-bg.jpg";
import aboutMain1 from "../images/about/about-main1.jpg";
import aboutMain2 from "../images/about/about-main2.jpg";
import aboutImportExport from "../images/about/import-export.jpg";
import testimonialImage1 from "../images/testimonial1.jpg";
import Avatar1 from "../images/client1.png";
import Avatar2 from "../images/client2.png";
import Avatar3 from "../images/client3.png";
import Avatar4 from "../images/client4.png";
import Avatar5 from "../images/client5.png";
import DoubleQuote from "../images/quote-icon.svg"
import productHero from "../images/products/product-bg.jpg";

export const DDIcon = () => {
  return (
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5625 7.03125L0.3125 2.78125C0 2.46875 0 2 0.3125 1.71875L1 1C1.3125 0.71875 1.78125 0.71875 2.0625 1L5.0625 4.03125L8.09375 1C8.375 0.71875 8.84375 0.71875 9.15625 1L9.84375 1.71875C10.1562 2 10.1562 2.46875 9.84375 2.78125L5.59375 7.03125C5.3125 7.3125 4.84375 7.3125 4.5625 7.03125Z"
        fill="white"
      />
    </svg>
  );
};

export const BlueArrow = () => {
  return (
    <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M0.490828 0.289999H2.56083L6.91683 4.412L2.56083 8.552H0.490828L4.84683 4.412L0.490828 0.289999Z" fill="#0C00A3" />
    </svg>
  );
};

export const ArrowChev = () => {
  return (
    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M1 1L8.5 8.5L16 1" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const SliderArrowP = ()=>{
  return(
    <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 14.95C0 15.15 0.107491 15.4499 0.214983 15.6498L13.1139 29.6455C13.5439 30.0453 14.1888 30.1453 14.6188 29.7454C15.0488 29.3456 15.1562 28.7457 14.7263 28.3459L2.47229 14.95L14.7263 1.65413C15.1562 1.25425 15.0488 0.654436 14.6188 0.25456C14.1888 -0.145315 13.4364 -0.0453472 13.1139 0.35453L0.214983 14.3502C0.107491 14.4502 0 14.7501 0 14.95Z" fill="white"/>
    </svg>
  )
}
export const SliderArrowN = ()=>{
  return(
  <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 14.95C15 15.15 14.8925 15.4499 14.785 15.6498L1.88608 29.6455C1.45612 30.0453 0.811171 30.1453 0.381206 29.7454C-0.0487586 29.3456 -0.156249 28.7457 0.273715 28.3459L12.5277 14.95L0.273715 1.65413C-0.156249 1.25425 -0.0487586 0.654436 0.381206 0.25456C0.811171 -0.145315 1.56361 -0.0453472 1.88608 0.35453L14.785 14.3502C14.8925 14.4502 15 14.7501 15 14.95Z" fill="white"/>
  </svg>
  )
}


export const assets = {
  siteLogo, bigLogo, facebookIcon, twitterIcon, instagramIcon, linkDnIcon, homeCtaBanner, aboutHero, aboutMain1, aboutMain2,
  sliderImg1, sliderImg2, sliderImg3, aboutImportExport, testimonialImage1, Avatar1, Avatar2, Avatar3, Avatar4, Avatar5,
  DoubleQuote, productHero
};
