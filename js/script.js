// DATA
const services = [
  {
    id: 1,
    title: "Analisis Data",
    desc: "Analisis Data Deskriptif dan Inferensia",
    icon: "analyze",
    price: "199",
    detail:
      "Analisis data deskriptif dan inferensia membantu anda untuk menyelesaikan masalah berkaitan penelitian dengan metode analisis yang praktis, akurat, dan presisi.",
  },
  {
    id: 2,
    title: "Time Series & Forecasting",
    desc: "Analisis Runtun Waktu dan Prediksi",
    icon: "timeseries",
    price: "399",
    detail:
      "Analisis runtun waktu dapat membantu anda dalam memprediksi data-data di masa depan dengan metode dan asumsi ilmiah sehingga ramalan dapat dipertanggungjawabkan dalam penelitian Seperti Smoothing methods, ARIMA, ARCH-GARCH",
  },
  {
    id: 3,
    title: "Analisis Multivariate",
    desc: "Analisis Peubah Ganda",
    icon: "multivariate",
    price: "399",
    detail:
      "Structural Equation Modelling (SEM), Partial Least Square (PLS), Analisis Regresi Berganda, Regresi Moderasi, dll",
  },
  {
    id: 4,
    title: "Desain Infografis",
    desc: "Infografis, Desain, Interactive Power Point, dan Videografis",
    icon: "visualization",
    price: "299",
    detail:
      "Layanan ini dapat membantu anda dalam mengerjakan tugas kantor, kuliah, ataupun bahan presentasi yang lebih interaktif dan menarik lagi.",
  },
  {
    id: 5,
    title: "Sentiment Analysis & ML",
    desc: "Analisis Sentimen dan Pembangunan Model Machine Learning",
    icon: "machine",
    price: "499",
    detail:
      "Analisis sentimen berupa natural language processing (NLP) membantu anda untuk melihat sebuah teks dalam bentuk pandangan publik bernilai positif dan negatif. Pembangunan machine learning dapat berupa klasifikasi (Naïve Bayes, Decision Tree J48, SVM, dll) dan clustering (KNN, Agglomerative, dll).",
  },
  {
    id: 6,
    title: "Ambil Data Twitter",
    desc: "Ambil Data Twitter dan Google Maps (Review, Rating, dll)",
    icon: "twitter",
    price: "499",
    detail:
      "Data yang diambil dari twitter dapat digunakan untuk melihat pandangan publik tentang fenomena yang terjadi. Untuk data google maps dapat digunakan bagi penelitian ataupun untuk para pebisnis menganalisis pandangan publik tentang objek bisnis yang dipunyai seperti restoran, hotel, cafe, butik, apartemen dll. Sehingga dapat menaikkan daya tarik lebih serta minat pengunjung yang dapat menaikkan profit usaha.",
  },
  {
    id: 7,
    title: "Cleaning Data",
    desc: "Cleaning Data dan Preprocessing",
    icon: "cleaning",
    price: "199",
    detail:
      "Cleaning data dapat berupa imputasi data, transformasi data, membuat data dapat dianalisis lebih lanjut, menghilangkan data yang tidak perlu, jika machine learning dan natural language processing untuk sentimen analysis dan lain lain maka text preprocessing lanjut akan dilakukan.",
  },
];

// SERVICE CARDS
const serviceContainer = document.getElementById("service-card-container");
let serviceContainerContent = "";
services.forEach((service) => {
  serviceContainerContent += `
    <div class="col-md-6 col-lg-3 animate" data-anim="slide-fb">
        <div class="card service-card" id="${service.id}">
            <div class="card-body text-center row">
                <div class="row justify-content-center col m-auto w-100 p-0">
                    <div class="col-md-6 col-3 card-avatar mb-md-4 m-auto">
                        <img src="img/icons/${service.icon}.svg" alt="${service.title}"/>
                    </div>
                    <div class="col-md-12 col-9 m-auto">
                      <h4>${service.title}</h4>
                      <p class="mb-0">${service.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});
serviceContainer.innerHTML = serviceContainerContent;

/** NAVIGATION */
const nav = document.getElementById("navbar");
window.onscroll = () => {
  if (window.scrollY > 350) {
    if (!nav.classList.contains("fixed")) {
      nav.classList.add("fixed");
    }
  } else if (window.scrollY <= 0) {
    if (nav.classList.contains("fixed")) {
      nav.classList.remove("fixed");
    }
  }
};

// MODAL
const modal = new bootstrap.Modal(document.getElementById("service-modal"), {
  keyboard: false,
});
const serviceCard = document.querySelectorAll(".service-card");
serviceCard.forEach((sc) => {
  sc.addEventListener("click", () => {
    document.querySelector(
      "#service-modal-content"
    ).innerHTML = getServiceModalContent(sc.id);
    modal.show();
  });
});

const getServiceModalContent = (id) => {
  const service = services.filter((service) => service.id === parseInt(id))[0];
  return `
    <div class="row">
      <div class="col col-auto">
          <div class="card-avatar">
              <img src="img/icons/${service.icon}.svg" alt="${service.icon}">
          </div>
      </div>
      <div class="col my-auto">
          <h4>${service.title}</h4>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
          <p>${service.detail}</p>
          <p class="text-start-from text-center">Mulai dari</p>
          <p class="text-center"><span class="rp-badge">Rp</span><span class="price-badge">${service.price}</span> <span class="text-thousand">ribu</span></p>
      </div>
    </div>
  `;
};

// SECTION NAVIGATION
const links = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;
  const safe = 100;

  while (--index && window.scrollY + safe < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));

  if (window.scrollY + safe < sections[0].offsetTop) {
    return;
  }
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

//ANIMATION
const animate = document.querySelectorAll(".animate");

const doAnimation = () => {
  animate.forEach((el) => {
    if (isScrolledIntoView(el)) {
      const className = el.getAttribute("data-anim");
      el.classList.add(className);
    }
  });
};

window.addEventListener("scroll", doAnimation);
window.addEventListener("load", doAnimation);

const isScrolledIntoView = (elem) => {
  const position = elem.getBoundingClientRect();
  return position.top < window.innerHeight && position.bottom >= 0;
};

// NAVIGATION
const navCollapse = document.querySelector(".navbar-collapse");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// SCROLL TO TOP
const scrollToTopBtn = document.querySelector(".scroll-top");
const rootElement = document.documentElement;
const timeToLeave = 1500;
var isShowButton = false;
var timeout;

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  isShowButton = rootElement.scrollTop / scrollTotal > 0.1;
  if (isShowButton) {
    clearTimeout(timeout);
    scrollToTopBtn.style.opacity = 1;
    timeout = setTimeout(() => {
      scrollToTopBtn.style.opacity = 0;
    }, timeToLeave);
  } else {
    scrollToTopBtn.style.opacity = 0;
  }
}

function showButton() {
  if (isShowButton) {
    clearTimeout(timeout);
    scrollToTopBtn.style.opacity = 1;
    timeout = setTimeout(() => {
      scrollToTopBtn.style.opacity = 0;
    }, timeToLeave);
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
scrollToTopBtn.addEventListener("mouseover", showButton);
document.addEventListener("scroll", handleScroll);

// SUBSCRIBE
const subscribeBtn = document.querySelector(".subscribe");

function handleScrollSubscribe() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    subscribeBtn.style.display = "block";
    subscribeBtn.style.opacity = 1;
  } else {
    subscribeBtn.style.display = "none";
    subscribeBtn.style.opacity = 0;
  }
}

document.addEventListener("scroll", handleScrollSubscribe);
