import { createFileRoute } from "@tanstack/react-router";

import soopaVideo from "@/assets/ABC_trajectory_web.mp4";
import sportsVideo from "@/assets/qvzrlywi6vlviaanxvpg.mp4";
import cvAsset from "@/assets/Muhammad_Hammad_Bashir_CV.pdf";
import portrait from "@/assets/hammad_pic.jpg";
import projMovers from "@/assets/image_original.png";
import projDrone from "@/assets/image_original2.png";
import projNeuro from "@/assets/image_original3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Hammad Bashir — Computer Vision & Sports AI Engineer" },
      { name: "description", content: "Computer Vision Engineer (5+ yrs) building real-time sports AI, multi-camera video intelligence, and multimodal LLM systems. Available for consulting." },
      { property: "og:title", content: "Muhammad Hammad Bashir — Computer Vision & Sports AI" },
      { property: "og:description", content: "Real-time vision systems, multi-camera sports analytics, and multimodal AI." },
    ],
  }),
  component: Portfolio,
});

const LINKS = {
  email: "mailto:hammad.compsci@gmail.com",
  phone: "tel:+923143092165",
  linkedin: "https://www.linkedin.com/in/muhammad-hammad-bashir-6aaab7178/",
  github: "https://github.com/MuhammadHammadBashir",
  upwork: "https://www.upwork.com/freelancers/hammad535",
  fiverr: "https://www.fiverr.com/mumtaz535/",
  cv: cvAsset,
};

const SERVICES = [
  { title: "Computer Vision", body: "YOLOv8, SAM, CLIP, MediaPipe, ByteTrack, DeepSORT, TrackNet. Detection, tracking, pose, segmentation." },
  { title: "Sports & Video Analytics", body: "Real-time RTSP pipelines, multi-camera sync, event detection, bounce / trajectory / biomechanics." },
  { title: "Generative & Multimodal AI", body: "LLaMA 3.2, LLaVA, Florence, multimodal RAG, Stable Diffusion + LoRA/QLoRA fine-tuning, ComfyUI." },
  { title: "LLMs & Agents", body: "GPT, Claude, DeepSeek, LangChain, CrewAI. RAG systems, fine-tuning, prompt engineering." },
  { title: "Geospatial AI", body: "Satellite + drone imagery (RGB / multispectral / hyperspectral), QGIS, GDAL, rasterio, UNet segmentation." },
  { title: "MLOps & Deployment", body: "ONNX, TensorRT, FastAPI, Docker, MLflow, DVC, AWS / Azure / Runpod, serverless GPU." },
];

const PROJECTS = [
  {
    video: sportsVideo,
    title: "Real-Time Multi-Camera Sports Vision System",
    tag: "Sports AI · Production",
    role: "Computer Vision Engineer",
    body: "Real-time sports CV system on live HIKvision RTSP feeds: detect, track and analyze players, balls and game events. YOLOv8m + ByteTrack + TrackNet for low-latency detection and tracking, optimized via ONNX and TensorRT. Custom algorithms handle ball interpolation, bounce detection, speed/angle/acceleration estimation, polygon-based basket/goal validation and net movement analysis. Multi-camera sync enables accurate event logging, player identification and automatic highlight generation — an AI coach for match analysis.",
    stack: ["YOLOv8", "ByteTrack", "TrackNet", "ONNX", "TensorRT"],
  },
  {
    video: soopaVideo,
    title: "Soopa.ai — AI Tennis Analytics Platform",
    tag: "Sports AI · Tennis",
    role: "Computer Vision Engineer",
    body: "AI tennis analytics platform for amateur and semi-pro matches, producing production-grade match intelligence from a single consumer iPhone feed (1280×720, static camera, uncontrolled outdoor/indoor courts) — no expensive multi-camera stadium rig required.\n\nCourt calibration: migrated from a manual 14-point homography (skew, unstable depth) to a hybrid AI-assisted 20-keypoint layout — deep-learning keypoint proposals refined by human operators for exact geometric consistency across lens placements.\n\nPlayer tracking: custom YOLOv8m trained on 4,500 annotated images across varied courts, lighting and kits — >90% precision with strong temporal stability.\n\nBall tracking (core engine): TrackNetV5 with Motion Direction Decoupling (signed polarity fields preserving trajectory direction) and a Residual-Driven Spatio-Temporal Refinement Transformer head. F1 0.9859 / accuracy 0.9733 on the public TrackNetV2 benchmark, and ~96% ball-tracking accuracy at 45 FPS on commercial GPUs in real amateur footage — surviving deep racket occlusions, net transitions and motion blur where TrackNetV1–V4, ByteTrack and Kalman-based trackers drift.\n\nEvent analytics: release-point detection, bounce localization from vertical velocity inversions (millimeter tolerance), and stroke classification (topspin, slice, volley, serve, smash). 3D uplift converts monocular 2D coordinates into world (X, Y, Z) using court scale anchors — true ball speed, flight arcs, net clearance, launch/landing angles. Automated JSON/CSV telemetry export.",
    stack: ["TrackNetV5", "YOLOv8m", "MDD + R-STR", "3D Uplift", "45 FPS · 96%"],
  },
  {
    img: projMovers,
    title: "Movers AI — Vision-Based Automatic Invoice Generation",
    tag: "AI · SaaS",
    role: "AI Engineer",
    body: "A no-download, AI-powered web app that guides customers room-by-room to capture photos. Proprietary AI detects and catalogs items, calculates volume and instantly generates branded, professional moving quotes — cutting manual workload, improving accuracy and boosting conversion with a faster, tech-driven quoting system.",
    stack: ["Gemini", "Flask", "Prompt Engineering", "MySQL", "CI/CD"],
  },
  {
    img: projDrone,
    title: "Multimodal Drone & Satellite Imagery — Detection & Segmentation",
    tag: "Geospatial AI",
    role: "Remote Sensing & Registration",
    body: "Worked on TMGDronity, integrating satellite and drone imagery (RGB, multispectral, hyperspectral) with DCIM maps for detecting underground indicators and above-ground objects. Geospatial alignment with and without GCPs, pixel-to-cm estimates, QGIS + Python coregistration to remove offsets. Also UNet land-cover segmentation on Sentinel-2 and YOLO-based plant counting with tracking.",
    stack: ["Computer Vision", "Image Segmentation", "Object Detection & Tracking", "Drone"],
    link: "https://app.tmgdronity.com",
  },
  {
    img: projNeuro,
    title: "AI in Neuromarketing — CreativeScore",
    tag: "Machine Learning · Production",
    role: "Machine Learning Engineer",
    body: "Leveraged AI and ML to enhance behavioural-science analyses and design strategies at creativescore.ai — increasing user attraction for videos and images through attention prediction, scoring and creative optimization.",
    stack: ["Deep Learning", "Machine Learning", "Computer Vision", "AI App Development", "Model Deployment"],
    link: "https://www.creativescore.ai/",
  },
];

const TESTIMONIALS = [
  {
    name: "Garry Doel",
    role: "Co-Founder, CreativeScore AI",
    body: "Muhammad Hammad Bashir has been working with us for approximately three years. Throughout this time, he has consistently demonstrated exceptional expertise in Machine Learning, Computer Vision, and AI deployment.\n\nHammad successfully handled complex image and video datasets and delivered advanced AI pipelines for advertisement scoring, video emotion analysis, and intelligent recommendation systems. One of his strongest qualities is his ability to balance performance and cost, helping us significantly reduce infrastructure expenses by identifying and implementing efficient GPU solutions.\n\nHis technical knowledge, problem-solving skills, and commitment to delivering high-quality results make him a valuable asset to any AI-focused organization. I would confidently recommend Hammad for any Machine Learning, Computer Vision, or AI Engineering role.",
    site: "https://www.creativescore.ai",
    linkedin: "https://www.linkedin.com/in/garrydoel/",
  },
  {
    name: "Dr. Azad Kabir",
    role: "Founder, Doctor AI",
    body: "Bashir is one of the best professionals I have worked with. He is extremely friendly, collaborative, and a true team player.\n\nWhat stands out most is his initiative and adaptability. Despite his primary specialization being Computer Vision, he proactively learned PHP when assigned tasks outside his core domain and delivered them with ownership and commitment.\n\nHe contributed significantly to our AI healthcare initiatives, including LLM-powered disease diagnosis systems, patient fall-alert detection, and remote patient monitoring solutions. His willingness to learn new technologies and consistently deliver results made him an invaluable contributor to our team.\n\nI highly recommend Muhammad Hammad Bashir for AI, Machine Learning, Computer Vision, and Healthcare AI projects.",
    site: "https://www.ddxrx.net/",
    linkedin: "https://www.linkedin.com/in/azadkabir/",
  },
  {
    name: "Vincent",
    role: "Founder, Sportunity",
    body: "Muhammad Hammad Bashir played a critical role in the development of multiple sports analytics and computer vision solutions for Sportunity.\n\nHis work included player detection, player tracking, ball detection, automated match report generation, serve and volley event detection, and extensive research and experimentation to improve model performance and accuracy.\n\nHammad consistently demonstrated strong technical expertise, attention to detail, and the ability to transform research concepts into production-ready solutions. His contributions significantly advanced our sports analytics capabilities.\n\nI would highly recommend him for any Computer Vision, Sports Analytics, or AI Engineering project.",
    site: "https://sportunity.com/",
  },
  {
    name: "Hassan Karim",
    role: "Vice President, Comerica Bank",
    body: "Muhammad Hammad Bashir assisted me with a startup initiative focused on Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and custom knowledge systems built on extensive datasets from the oil and gas industry.\n\nHe demonstrated strong expertise in AI architecture, data processing, model deployment, and enterprise AI solutions. His ability to understand complex business requirements and translate them into practical AI applications was instrumental to the project's success.\n\nI highly recommend Hammad for AI, LLM, RAG, and enterprise-scale machine learning initiatives.",
    linkedin: "https://www.linkedin.com/in/hassankarimcissp/",
  },
  {
    name: "Zlatica",
    role: "Team Lead",
    body: "We had the opportunity to work with Muhammad on the development of a comprehensive AI platform and toolset. He managed the entire lifecycle of the project, including data annotation, model training, optimization, deployment, and production support.\n\nMuhammad consistently demonstrated deep technical expertise, professionalism, and excellent communication skills. He proactively identified challenges and proposed effective solutions that resulted in outstanding outcomes.\n\nHis ability to manage end-to-end AI projects makes him an excellent choice for organizations seeking a highly capable Machine Learning and Computer Vision Engineer.\n\nI highly recommend Muhammad Hammad Bashir for any AI, Machine Learning, Computer Vision, or Generative AI project.",
  },
];

function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />

      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  const items = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["Testimonials", "#testimonials"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight">
          <span className="text-gradient">MHB</span>
          <span className="text-muted-foreground text-sm ml-2 font-mono hidden sm:inline">// computer vision</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {items.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">{label}</a>
          ))}
        </nav>
        <a href={LINKS.cv} download className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition">
          <DownloadIcon /> Download CV
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for work
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.02]">
            Muhammad <span className="text-gradient">Hammad</span><br />Bashir
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl">
            Computer Vision Engineer building real-time sports AI, multi-camera video intelligence and multimodal LLM systems. 5+ years from research to production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              View projects <ArrowIcon />
            </a>
            <a href={LINKS.cv} download className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-surface-2 transition">
              <DownloadIcon /> Download CV
            </a>
            <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-surface-2 transition">
              Get in touch
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[["5+", "Years experience"], ["30+", "Production projects"], ["4", "Global teams"]].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-gradient font-semibold">{n}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-3xl" />
          <div className="relative glass-card rounded-2xl overflow-hidden glow-ring">
            <img src={portrait} alt="Muhammad Hammad Bashir — Computer Vision Engineer" width={896} height={1120} className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
              <div className="font-mono text-xs text-primary">$ ./detect --realtime</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">Sports AI · Multimodal · MLOps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel num="01" title="About" />
        <p className="mt-8 text-xl md:text-2xl leading-relaxed text-foreground/90 font-display">
          I build <span className="text-gradient">real-time AI systems</span> that ship — across sports analytics, neuromarketing, agriculture, healthcare and multimodal AI.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
          <p>
            Specialized in end-to-end video intelligence: object detection, tracking, pose estimation and event recognition with YOLO, MediaPipe, ByteTrack and modern deep-learning pipelines. Strong focus on low-latency production, multi-camera streaming analytics and scalable MLOps.
          </p>
          <p>
            I take ownership of the full stack — from data pipelines and model fine-tuning through ONNX/TensorRT optimization to FastAPI services on AWS, Azure and serverless GPU. The goal is always the same: a system that holds up under real load, on real video.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel num="02" title="What I do" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform">
              <div className="font-mono text-xs text-primary">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel num="03" title="Selected projects" />
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A sample of production systems shipped for clients on Upwork, Fiverr and direct engagements.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                {p.video ? (
                  <video src={p.video} muted loop playsInline autoPlay controls preload="metadata" className="w-full h-full object-cover" />
                ) : (
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                )}
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-background/70 backdrop-blur border border-border rounded-full px-3 py-1 text-primary pointer-events-none">{p.tag}</div>
              </div>
              <div className="p-6">
                <div className="font-mono text-xs text-accent">{p.role}</div>
                <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{p.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] rounded-md bg-surface-2 border border-border px-2 py-1 text-muted-foreground">{s}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition">
                    Visit live project <ArrowIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href={LINKS.upwork} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm hover:bg-surface-2 transition">
            See full Upwork portfolio <ArrowIcon />
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm hover:bg-surface-2 transition">
            GitHub <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel num="04" title="Client testimonials" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="glass-card rounded-2xl p-6 flex flex-col">
              <QuoteIcon />
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed flex-1 whitespace-pre-line">{t.body}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/60">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
                <div className="mt-3 flex gap-3 text-xs">
                  {t.linkedin && <a href={t.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:text-accent">LinkedIn ↗</a>}
                  {t.site && <a href={t.site} target="_blank" rel="noreferrer" className="text-primary hover:text-accent">Website ↗</a>}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const channels = [
    { label: "Email", value: "hammad.compsci@gmail.com", href: LINKS.email },
    { label: "Phone", value: "+92 314 3092165", href: LINKS.phone },
    { label: "LinkedIn", value: "/in/muhammad-hammad-bashir", href: LINKS.linkedin },
    { label: "GitHub", value: "@MuhammadHammadBashir", href: LINKS.github },
    { label: "Upwork", value: "/freelancers/hammad535", href: LINKS.upwork },
    { label: "Fiverr", value: "/mumtaz535", href: LINKS.fiverr },
  ];
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <SectionLabel num="05" title="Let's build" />
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
              Have a vision problem worth <span className="text-gradient">solving?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              From a quick consult to a full production system — based in Punjab, Pakistan, working with teams worldwide.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {channels.map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                   className="group flex items-center justify-between rounded-xl border border-border bg-surface/60 px-5 py-4 hover:border-primary/60 hover:bg-surface-2 transition">
                  <div>
                    <div className="text-xs font-mono text-primary uppercase tracking-wider">{c.label}</div>
                    <div className="text-sm mt-1">{c.value}</div>
                  </div>
                  <ArrowIcon />
                </a>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={LINKS.cv} download className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                <DownloadIcon /> Download CV (PDF)
              </a>
              <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm hover:bg-surface-2 transition">
                Email me directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
        <div className="font-mono">© {new Date().getFullYear()} Muhammad Hammad Bashir</div>
        <div className="flex gap-5">
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
          <a href={LINKS.upwork} target="_blank" rel="noreferrer" className="hover:text-primary">Upwork</a>
          <a href={LINKS.fiverr} target="_blank" rel="noreferrer" className="hover:text-primary">Fiverr</a>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{num}</span>
      <span className="h-px w-12 bg-primary/50" />
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">{title}</span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary/50" aria-hidden>
      <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5a1.67 1.67 0 0 1 1.67-1.67V6zm10 0a5.17 5.17 0 0 0-5.17 5.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
    </svg>
  );
}
