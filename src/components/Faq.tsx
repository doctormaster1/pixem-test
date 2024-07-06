"use client";
import React  from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div id="faq" className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Teknik destek sağlıyor musunuz?",
    answer:
      "Evet, teknik destek sağlıyoruz. Teknik destek taleplerinizi çalışma saatlerimiz içinde iletebilirsiniz. Destek talepleri, web sitemiz üzerinden veya telefonla alınmaktadır.",
  },
  {
    question: "SEO hizmetleri sunuyor musunuz?",
    answer:
      "Evet, SEO hizmetleri sunuyoruz. SEO iyileştirmeleri, anahtar kelime analizi, içerik optimizasyonu ve backlink stratejilerini içermektedir. SEO çalışmalarının sonuçları genellikle birkaç ay içinde görülmeye başlanır.",
  },
  {
    question: "Web sitesi bakım ve güncelleme hizmetleri var mı?",
    answer:
      "Evet, web sitesi bakım ve güncelleme hizmetleri sunuyoruz. Bu hizmetler, sitenizin güvenliğini, performansını ve güncelliğini korumak için düzenli olarak gerçekleştirilir.",
  },
  {
    question: "E-ticaret siteleri için hangi özellikleri sunuyorsunuz?",
    answer:
      "E-ticaret platformlarımız, çeşitli ödeme yöntemlerini destekler, kullanıcı dostu arayüzler sunar ve pazarlama araçları ile entegrasyon sağlar. Ayrıca, analitik ve raporlama özellikleri ile işletmenizin performansını takip edebilirsiniz.",
  },
  {
    question: "Hosting paketleriniz nelerdir?",
    answer:
      "Paylaşımlı hosting, VPS (Virtual Private Server) ve özel sunucu gibi çeşitli hosting seçeneklerimiz bulunmaktadır. Her bir paket, farklı ihtiyaçlara yönelik olarak özellikler ve fiyatlar sunar.",
  },
  {
    question: "Sunucularınızın uptime garantisi nedir?",
    answer:
      "Sunucularımız, yüksek uptime garantisi ile çalışmaktadır. Herhangi bir kesinti durumunda hızlı ve etkili bir teknik destek sunarak sorunların en kısa sürede çözülmesini sağlıyoruz.",
  },
  {
    question: "Özel yazılım geliştirme hizmetleriniz nelerdir?",
    answer:
      "Özel yazılım geliştirme hizmetlerimiz, müşteri ihtiyaçlarına özel çözümler sunmayı hedefler. Yazılım geliştirme sürecimiz, ihtiyaç analizi, tasarım, geliştirme, test ve teslimat aşamalarından oluşur. C#, .NET Core, Node.js, Go, Rust ve diğer dillerde yazılım geliştirme yapıyoruz.",
  },
  {
    question: "API geliştirme hizmetleri sunuyor musunuz?",
    answer:
      "Evet, API geliştirme hizmetleri sunuyoruz. API çözümlerimiz, farklı sistemler arasında veri alışverişini kolaylaştırır ve entegrasyon süreçlerini hızlandırır.",
  },
  {
    question: "Proje sonrası destek ve bakım hizmetleri sağlıyor musunuz?",
    answer:
      "Evet, proje tamamlandıktan sonra da destek ve bakım hizmetleri sağlıyoruz. Projenizin sorunsuz çalışmaya devam etmesi için düzenli bakım ve güncelleme hizmetleri sunmaktayız.",
  },
];
