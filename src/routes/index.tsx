import { createFileRoute } from "@tanstack/react-router";

import sportsVideo from "@/assets/qvzrlywi6vlviaanxvpg.mp4";
import cvAsset from "@/assets/Muhammad_Hammad_Bashir_CV.pdf";
import portrait from "@/assets/my_image.png";
import projMovers from "@/assets/image_original.png";
import projDrone from "@/assets/image_original2.png";
import projNeuro from "@/assets/image_original3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Hammad Bashir — portfolio" },
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
    body: "Hammad has consistently demonstrated exceptional expertise in ML, Computer Vision and AI deployment. He handled complex image/video datasets and delivered ad-scoring, video emotion and recommendation pipelines — while significantly reducing our GPU infrastructure cost. I confidently recommend him for any AI engineering role.",
    site: "https://www.creativescore.ai",
    linkedin: "https://www.linkedin.com/in/garrydoel/",
  },
  {
    name: "Vincent",
    role: "Founder, Sportunity",
    body: "Hammad played a critical role in our sports analytics: player & ball detection, automated match reports, serve & volley event detection. Strong technical expertise and the ability to transform research into production-ready solutions.",
    site: "https://sportunity.com/",
  },
  {
    name: "Zlatica",
    role: "Team Lead, TMG Dronity",
    body: "Muhammad managed the full lifecycle of our drone & satellite AI platform — annotation, training, optimization, deployment and support. Deep technical expertise, professionalism and excellent communication.",
    site: "https://app.tmgdronity.com",
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
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
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
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed flex-1">{t.body}</blockquote>
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
              Have a problem worth <span className="text-gradient">solving?</span>
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
