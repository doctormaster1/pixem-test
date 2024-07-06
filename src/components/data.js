import {
  GlobeAltIcon,
  ComputerDesktopIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  PresentationChartLineIcon,
  AdjustmentsHorizontalIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  CodeBracketSquareIcon,
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

import apiuyygluma from "../../public/img/apiuyygluma-01.png";
import b2b from "../../public/img/b2b-01.png";
import seo from "../../public/img/seo-01.png";
import webtasarm from "../../public/img/webtasarm-01.png";

const benefitWeb = {
  title: "Web Tasarım & Hosting",
  desc: "Modern ve kullanıcı dostu web siteleri tasarlıyor, güvenilir ve hızlı hosting çözümleri sunuyoruz.",
  image: webtasarm,
  bullets: [
    {
      title: "Özel Tasarımlar",
      desc: "Kullanıcı deneyimini ön planda tutan özel web tasarımları yapıyoruz.",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Responsive Tasarım",
      desc: "Tüm cihazlarda mükemmel görünen responsive web siteleri tasarlıyoruz.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Güvenilir Hosting",
      desc: "Hızlı, güvenli ve kesintisiz hosting hizmetleri sağlıyoruz.",
      icon: <ServerStackIcon />,
    },
  ],
};

const benefitB2b = {
  title: "B2B & E-Ticaret",
  desc: "İşletmeler arası (B2B) çözümler ve e-ticaret platformları ile satışlarınızı artırıyoruz.",
  image: b2b,
  bullets: [
    {
      title: "B2B Çözümleri",
      desc: "İşletmeler arası süreçleri optimize eden B2B platformları geliştiriyoruz.",
      icon: <BuildingOfficeIcon />,
    },
    {
      title: "E-Ticaret Siteleri",
      desc: "Kullanıcı dostu ve güvenli e-ticaret siteleri tasarlıyoruz.",
      icon: <ShoppingBagIcon />,
    },
    {
      title: "Ödeme Entegrasyonları",
      desc: "Güvenilir ve çeşitli ödeme yöntemleri ile entegre e-ticaret çözümleri sunuyoruz.",
      icon: <CreditCardIcon />,
    },
  ],
};

const benefitApi = {
  title: "API & Web Uygulama",
  desc: "Güçlü API çözümleri ve web uygulamaları ile iş süreçlerinizi dijitalleştiriyoruz.",
  image: apiuyygluma,
  bullets: [
    {
      title: "Özel API Geliştirme",
      desc: "İş ihtiyaçlarınıza özel API çözümleri geliştiriyoruz.",
      icon: <CodeBracketSquareIcon />,
    },
    {
      title: "Web Uygulamaları",
      desc: "Performanslı ve kullanıcı dostu web uygulamaları geliştiriyoruz.",
      icon: <ComputerDesktopIcon />,
    },
    {
      title: "Entegrasyon Hizmetleri",
      desc: "Mevcut sistemlerinize sorunsuz entegrasyonlar sağlıyoruz.",
      icon: <PuzzlePieceIcon />,
    },
  ],
};

const benefitSeo = {
  title: "SEO & Teknik Destek",
  desc: "Web sitenizin arama motorlarında üst sıralarda yer almasını sağlıyor ve 7/24 teknik destek sunuyoruz.",
  image: seo,
  bullets: [
    {
      title: "SEO Optimizasyonu",
      desc: "Web sitenizi arama motorları için optimize ediyor, görünürlüğünü artırıyoruz.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Analiz ve Raporlama",
      desc: "Detaylı SEO analizleri ve raporlamalar ile performansınızı takip ediyoruz.",
      icon: <PresentationChartLineIcon />,
    },
    {
      title: "24/7 Teknik Destek",
      desc: "Her türlü teknik sorununuza anında çözüm sunan 7/24 destek hizmeti veriyoruz.",
      icon: <WrenchScrewdriverIcon />,
    },
  ],
};


export {benefitApi, benefitB2b, benefitSeo, benefitWeb};
