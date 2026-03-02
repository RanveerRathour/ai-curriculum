import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// MASTER AI CURRICULUM — 4 MONTHS TO HIGH-PAYING AI ENGINEER ($130K–$250K+)
// ═══════════════════════════════════════════════════════════════════════════════
// Schedule: 6–8 hours/day | ~720–960 total hours | 120 days
// Month 1: Python + ML Foundations + Data Science
// Month 2: Deep Learning + LLMs + Prompt Engineering + Basic RAG
// Month 3: Advanced RAG + AI Agents + Fine-Tuning + MLOps
// Month 4: System Design + Portfolio Sprint + Interview Prep
// Parallel: DSA Track — 1h/day EVERY day (120 problems in 4 months)
// ═══════════════════════════════════════════════════════════════════════════════

// ─── CAREER PATHS & SALARY DATA (2026 Market Research) ─────────────────────
const careerPaths = [
  {
    role: "LLM / AI Engineer",
    salary: "$150K–$250K+",
    demand: "Extremely High",
    description: "Build LLM-powered apps, RAG systems, AI agents, fine-tune models",
    keySkills: ["LLMs (GPT/Claude/Llama)", "RAG", "LangChain/LangGraph", "Vector DBs", "Agents", "Evaluation"],
    yourEdge: "Hottest role in 2026 — avg salary jumped $50K in one year",
  },
  {
    role: "AI/ML Engineer",
    salary: "$130K–$200K",
    demand: "Very High",
    description: "Build and deploy ML models, design training pipelines, optimize inference",
    keySkills: ["Python", "PyTorch", "Scikit-learn", "MLOps", "Cloud (AWS/GCP)", "System Design"],
    yourEdge: "Flutter + AI = rare combo for mobile AI apps",
  },
  {
    role: "MLOps Engineer",
    salary: "$140K–$200K",
    demand: "High",
    description: "Productionize ML models, build pipelines, monitor drift, scale inference",
    keySkills: ["Docker", "Kubernetes", "MLflow", "W&B", "CI/CD", "Model Serving"],
    yourEdge: "Bridge between ML research and production — always in demand",
  },
  {
    role: "AI Solutions Architect",
    salary: "$160K–$250K",
    demand: "High",
    description: "Design end-to-end AI systems, advise clients, integrate AI into products",
    keySkills: ["System Design", "Cloud", "LLMs", "RAG", "Business Acumen", "Communication"],
    yourEdge: "Requires breadth + depth — this curriculum covers both",
  },
];

// ─── HOW MUCH IS ENOUGH — EXACT NUMBERS ────────────────────────────────────
const howMuchIsEnough = [
  {
    category: "DSA / LeetCode",
    exact: "120 problems in 4 months",
    daily: "1h/day — 1 problem/day",
    breakdown: "NeetCode 150 (skip 30 hardest). Patterns > random grinding.",
    done: "Solve any Medium in <25 min and explain your approach clearly",
    overkill: "500+ problems. After 120–150, diminishing returns if you know patterns.",
  },
  {
    category: "Python",
    exact: "30 scripts + 2 projects in 2 weeks",
    daily: "3h/day for 14 days",
    breakdown: "You know Dart — Python is just syntax translation. Speed run it.",
    done: "Write Pythonic code without Googling. Think in Python.",
    overkill: "Spending 2 months on Python alone. You already know OOP + async.",
  },
  {
    category: "Machine Learning",
    exact: "8 algorithms deep + 2 Kaggle submissions",
    daily: "3h/day for 4 weeks",
    breakdown: "Linear/Logistic Reg, Trees, Random Forest, XGBoost, KNN, K-Means, PCA, SVM.",
    done: "Explain bias-variance, pick the right model, tune hyperparameters.",
    overkill: "Learning 20+ algorithms shallowly. Depth > breadth.",
  },
  {
    category: "Deep Learning",
    exact: "4 models from scratch + 2 transfer learning projects",
    daily: "3h/day for 3 weeks",
    breakdown: "MLP → CNN → RNN/LSTM → Transformer. Fine-tune ResNet + BERT.",
    done: "Build training loop from scratch, debug loss curves, explain backprop.",
    overkill: "Reading every paper. Implement, don't just theorize.",
  },
  {
    category: "LLMs + Prompt Engineering",
    exact: "3 APIs mastered + 15 prompt patterns",
    daily: "3h/day for 2 weeks",
    breakdown: "OpenAI + Anthropic + Ollama. Zero-shot, few-shot, CoT, ReAct, function calling.",
    done: "Design prompt systems that reliably produce structured outputs.",
    overkill: "Endless prompt tweaking. Learn patterns, then build real systems.",
  },
  {
    category: "RAG Systems",
    exact: "3 RAG apps (basic → advanced → production)",
    daily: "3h/day for 3 weeks",
    breakdown: "Basic PDF Q&A → Hybrid search + reranking → Production with eval metrics.",
    done: "Design RAG pipeline, explain chunking, measure retrieval quality with RAGAS.",
    overkill: "Trying every vector DB. Master ChromaDB + Pinecone deeply.",
  },
  {
    category: "AI Agents",
    exact: "3 agent systems + 2 frameworks (LangGraph + CrewAI)",
    daily: "3h/day for 2.5 weeks",
    breakdown: "Tool-use agent → Multi-agent team → Stateful production workflow.",
    done: "Design agent with tools, memory, error handling, human-in-the-loop.",
    overkill: "Every framework. LangGraph + CrewAI = 90% of job requirements.",
  },
  {
    category: "Fine-Tuning",
    exact: "2 models (1 classification + 1 instruction-following)",
    daily: "3h/day for 1.5 weeks",
    breakdown: "LoRA/QLoRA on Llama/Mistral. Dataset prep → train → eval → deploy.",
    done: "Explain when to fine-tune vs RAG vs prompting. Execute end-to-end.",
    overkill: "Training from scratch. LoRA/QLoRA is the industry standard.",
  },
  {
    category: "MLOps / Production",
    exact: "Deploy 3 models + 1 full CI/CD pipeline",
    daily: "3h/day for 2 weeks",
    breakdown: "Docker → FastAPI → CI/CD → monitoring. Tools: MLflow, W&B, GitHub Actions.",
    done: "Take model from notebook to production API with monitoring.",
    overkill: "Deep Kubernetes mastery. Docker + managed services is enough to start.",
  },
  {
    category: "AI System Design",
    exact: "10 problems prepared",
    daily: "1.5h/day for 2 weeks",
    breakdown: "Rec system, search, chatbot, moderation, fraud, RAG at scale, model serving.",
    done: "Whiteboard end-to-end ML system with trade-offs in 35 minutes.",
    overkill: "Memorizing solutions. Understand PATTERNS — same building blocks.",
  },
  {
    category: "Portfolio",
    exact: "5 polished projects on GitHub",
    daily: "Built during learning — dedicated 2 weeks to polish",
    breakdown: "EDA, ML pipeline, RAG chatbot, AI agent system, Flutter + AI app.",
    done: "Each has: README, clean code, deployment, demo link, quantified results.",
    overkill: "10+ half-finished projects. 5 polished > 15 incomplete.",
  },
  {
    category: "Job Applications",
    exact: "15 mock interviews + 150 targeted applications",
    daily: "Final 2 weeks: full-time hunting",
    breakdown: "8 DSA mocks + 4 system design + 3 behavioral. Target AI startups, YC companies.",
    done: "Pass a 4-round loop: screen → coding → system design → behavioral.",
    overkill: "1000 blind applications. Targeted > volume.",
  },
];

// ─── DSA PARALLEL TRACK (1h/day EVERY day for 4 months) ────────────────────
// "DSA is the gatekeeper. No DSA = No high-paying offer. Period."
const dsaTrack = {
  totalProblems: 120,
  dailyTime: "1h/day (first thing in morning — non-negotiable)",
  strategy: "Pattern-based: solve by category → then mixed practice → then timed contests",
  months: [
    {
      month: "Month 1", focus: "Arrays, Strings, Hash Maps, Two Pointers, Sliding Window",
      problems: 30, patterns: [
        { name: "Two Pointers", count: 6, examples: "Two Sum, 3Sum, Container With Most Water, Valid Palindrome" },
        { name: "Sliding Window", count: 6, examples: "Best Time Buy/Sell, Longest Substring No Repeat, Min Window Substring" },
        { name: "Hash Map", count: 8, examples: "Group Anagrams, Top K Frequent, Valid Anagram, Longest Consecutive" },
        { name: "Arrays", count: 5, examples: "Product Except Self, Max Subarray, Contains Duplicate" },
        { name: "Binary Search", count: 5, examples: "Search Rotated Array, Find Min Rotated, Koko Eating Bananas" },
      ],
    },
    {
      month: "Month 2", focus: "Stacks, Linked Lists, Trees, Heaps",
      problems: 30, patterns: [
        { name: "Stack", count: 5, examples: "Valid Parentheses, Min Stack, Daily Temperatures, Largest Rectangle" },
        { name: "Linked List", count: 6, examples: "Reverse LL, Merge Two Sorted, Reorder List, Detect Cycle, LRU Cache" },
        { name: "Trees (DFS)", count: 10, examples: "Max Depth, Invert, Validate BST, Kth Smallest, LCA, Serialize/Deserialize" },
        { name: "Trees (BFS)", count: 4, examples: "Level Order Traversal, Right Side View, Zigzag Level Order" },
        { name: "Heap", count: 5, examples: "Kth Largest, Task Scheduler, Merge K Sorted Lists, Find Median" },
      ],
    },
    {
      month: "Month 3", focus: "Graphs, Dynamic Programming, Backtracking",
      problems: 30, patterns: [
        { name: "Graphs", count: 8, examples: "Number of Islands, Clone Graph, Course Schedule, Word Ladder, Alien Dict" },
        { name: "DP (1D)", count: 8, examples: "Climbing Stairs, House Robber, Coin Change, Word Break, Decode Ways" },
        { name: "DP (2D)", count: 6, examples: "Unique Paths, LCS, Edit Distance, Target Sum" },
        { name: "Backtracking", count: 4, examples: "Subsets, Permutations, Combination Sum, N-Queens" },
        { name: "Greedy", count: 4, examples: "Jump Game, Gas Station, Partition Labels" },
      ],
    },
    {
      month: "Month 4", focus: "Mixed Review + Timed Practice + Contests",
      problems: 30, patterns: [
        { name: "Intervals", count: 4, examples: "Insert Interval, Merge Intervals, Non-Overlapping, Meeting Rooms II" },
        { name: "Tries", count: 3, examples: "Implement Trie, Word Search II, Design Add/Search Word" },
        { name: "Bit Manipulation", count: 3, examples: "Single Number, Counting Bits, Reverse Bits" },
        { name: "Hardest Review", count: 12, examples: "Redo 12 hardest problems. 25min max each." },
        { name: "Contests", count: 8, examples: "2 LeetCode contests/week — builds speed under pressure" },
      ],
    },
  ],
  resource: "NeetCode.io (free roadmap) + LeetCode Premium (company-tagged problems)",
};

// ─── MONTH 1: PYTHON + ML FOUNDATIONS (Days 1–30, ~180h) ───────────────────
// "You already know programming. This month is about TRANSLATING skills + ML fundamentals."
const month1Data = [
  {
    phase: "Phase 1", title: "Python for Dart Devs (Speed Run)", duration: "Days 1–7", hours: "42h (6h/day)", emoji: "⚡",
    note: "You know OOP, async, types from Dart. Python is just different syntax. GO FAST.",
    topics: [
      {
        day: "Days 1–2", hours: "12h", title: "Core Python + Data Structures",
        subtopics: [
          { name: "Setup: Python 3.11+, VS Code + Pylance, virtual environments", time: "1h", note: "pip = pub, venv = dart pub get" },
          { name: "Variables, types, f-strings, if/elif/else, loops, range()", time: "2h", note: "Almost identical to Dart" },
          { name: "Functions: def, *args, **kwargs, default params, lambda", time: "1.5h", note: "**kwargs = named params" },
          { name: "Lists, Tuples, Dicts, Sets + comprehensions", time: "2h", note: "Comprehensions = Python's superpower" },
          { name: "OOP: classes, __init__, self, inheritance, dunder methods", time: "2h", note: "self = this, __str__ = toString()" },
          { name: "Dataclasses, Enums, @property decorator", time: "1.5h", note: "@dataclass = auto copyWith" },
          { name: "Practice: CLI todo app with file persistence", time: "2h", note: null },
        ],
        resource: "Kaggle Learn Python (free) + Real Python",
        milestone: "Python feels familiar, not foreign",
      },
      {
        day: "Days 3–4", hours: "12h", title: "Advanced Python + Async + Ecosystem",
        subtopics: [
          { name: "File I/O, JSON, CSV, context managers (with statement)", time: "1.5h", note: "More ergonomic than dart:io" },
          { name: "Modules, packages, pip, requirements.txt", time: "1h", note: "Like pubspec.yaml" },
          { name: "Error handling: try/except/finally, custom exceptions", time: "1h", note: "try/catch in Dart" },
          { name: "Generators (yield), decorators (@), itertools", time: "2h", note: "Decorators EVERYWHERE in AI libs" },
          { name: "Async: asyncio, async def, await, gather(), aiohttp", time: "2h", note: "Future = coroutine, gather() = Future.wait()" },
          { name: "Type hints: typing, Optional, Union, Pydantic v2", time: "1.5h", note: "Pydantic = freezed for Python" },
          { name: "Testing: pytest basics, assertions, fixtures", time: "1.5h", note: "Like flutter_test" },
          { name: "Practice: Async API client + Pydantic models", time: "1.5h", note: null },
        ],
        resource: "Real Python — Async IO, Decorators, Pydantic docs",
        milestone: "Production-quality Python with types and tests",
      },
      {
        day: "Days 5–7", hours: "18h", title: "NumPy, Pandas, Visualization & EDA",
        subtopics: [
          { name: "NumPy: arrays, shape, indexing, slicing, broadcasting", time: "2h", note: "Typed List<List<num>> on steroids" },
          { name: "NumPy: vectorized ops, linear algebra (dot, matmul)", time: "2h", note: "ALL ML math runs on NumPy" },
          { name: "Pandas: DataFrame, read_csv, head, describe, info", time: "2h", note: "Spreadsheet in code" },
          { name: "Pandas: filtering, groupby, merge, join, pivot, apply", time: "2.5h", note: "80% of data science = Pandas wrangling" },
          { name: "Pandas: missing data, cleaning, feature creation", time: "1.5h", note: "Real data is MESSY" },
          { name: "Matplotlib + Seaborn: all major plot types", time: "3h", note: "Heatmaps, pair plots, distributions" },
          { name: "Jupyter/Colab: notebooks, cells, markdown", time: "1.5h", note: "The IDE of data science" },
          { name: "PROJECT: Full EDA on real dataset → GitHub", time: "3.5h", note: "Portfolio piece #1" },
        ],
        resource: "Kaggle Learn (Pandas, Data Viz)",
        milestone: "Load any CSV → extract insights → visualize → present",
      },
    ],
  },
  {
    phase: "Phase 2", title: "Math for ML (Just Enough)", duration: "Days 8–11", hours: "24h", emoji: "📐",
    note: "You need INTUITION, not a math degree. Learn what the math DOES, not proofs.",
    topics: [
      {
        day: "Days 8–9", hours: "12h", title: "Linear Algebra + Calculus for ML",
        subtopics: [
          { name: "Vectors: dot product, cosine similarity, magnitude", time: "1.5h", note: "Cosine similarity = how embeddings work" },
          { name: "Matrices: multiplication, transpose, inverse, eigenvalues", time: "2h", note: "Every ML model = matrix multiplication" },
          { name: "NumPy matrix operations: np.dot, @, np.linalg", time: "1.5h", note: "Practice math WITH code" },
          { name: "Derivatives: concept, chain rule, partial derivatives", time: "2h", note: "Chain rule = backpropagation" },
          { name: "Gradient descent: intuition, learning rate, convergence", time: "2h", note: "THE core algorithm of ALL ML" },
          { name: "Loss functions: MSE, cross-entropy, why they work", time: "1.5h", note: "Loss = how wrong the model is" },
          { name: "Practice: Gradient descent from scratch in NumPy", time: "1.5h", note: "BEST exercise to understand training" },
        ],
        resource: "3Blue1Brown: Linear Algebra + Calculus (YouTube — free, brilliant)",
        milestone: "Understand WHY gradient descent works",
      },
      {
        day: "Days 10–11", hours: "12h", title: "Probability & Statistics",
        subtopics: [
          { name: "Bayes theorem, conditional probability", time: "2h", note: "Foundation of many ML algorithms" },
          { name: "Distributions: normal, binomial, Poisson", time: "1.5h", note: "Normal distribution is everywhere" },
          { name: "Descriptive stats: mean, median, std, variance", time: "1h", note: "For EDA and features" },
          { name: "Hypothesis testing, p-values, A/B testing", time: "2h", note: "Asked in interviews + production ML" },
          { name: "Entropy, cross-entropy, KL divergence", time: "2h", note: "Cross-entropy = THE classification loss" },
          { name: "MLE, MAP estimation basics", time: "1.5h", note: "How models 'learn' mathematically" },
          { name: "Practice: Statistical analysis notebook", time: "2h", note: null },
        ],
        resource: "StatQuest (YouTube) — BEST for intuitive stats",
        milestone: "Explain Bayes theorem, cross-entropy, p-values clearly",
      },
    ],
  },
  {
    phase: "Phase 3", title: "Classical ML with Scikit-Learn", duration: "Days 12–22", hours: "66h", emoji: "🤖",
    note: "Every AI interview tests ML fundamentals. This is non-negotiable knowledge.",
    topics: [
      {
        day: "Days 12–15", hours: "24h", title: "Supervised Learning — All Core Algorithms",
        subtopics: [
          { name: "Train/test/val splits, k-fold cross-validation", time: "2h", note: "NEVER evaluate on training data" },
          { name: "Linear Regression: from scratch + sklearn", time: "2.5h", note: "Hello world of ML" },
          { name: "Logistic Regression: sigmoid, decision boundary", time: "2.5h", note: "For CLASSIFICATION despite the name" },
          { name: "Metrics: accuracy, precision, recall, F1, AUC-ROC, confusion matrix", time: "2h", note: "INTERVIEW FAVORITE" },
          { name: "Decision Trees: splits, Gini vs entropy, pruning", time: "2h", note: "Intuitive and interpretable" },
          { name: "Random Forest: bagging, feature importance, OOB", time: "2h", note: "Go-to first model" },
          { name: "XGBoost/LightGBM: boosting, hyperparameters", time: "3h", note: "Wins Kaggle competitions" },
          { name: "KNN + SVM: distance metrics, kernel trick", time: "2h", note: "Less used but interview-relevant" },
          { name: "Feature scaling, encoding, missing data imputation", time: "2h", note: "Preprocessing = 50% of ML" },
          { name: "Sklearn Pipelines: preprocessing + model in one object", time: "2h", note: "Professional ML — no data leakage" },
          { name: "Hyperparameter tuning: GridSearch, RandomSearch, Optuna", time: "2h", note: "Squeeze last % performance" },
        ],
        resource: "Hands-On ML (Géron) ch 1–7 + StatQuest",
        milestone: "Train, evaluate, compare 5+ models on any tabular data",
      },
      {
        day: "Days 16–18", hours: "18h", title: "Unsupervised Learning + Feature Engineering",
        subtopics: [
          { name: "K-Means: elbow method, silhouette score, use cases", time: "3h", note: "Customer segmentation, anomaly detection" },
          { name: "PCA: dimensionality reduction, explained variance", time: "2.5h", note: "When too many features" },
          { name: "t-SNE / UMAP: high-dimensional visualization", time: "2h", note: "For visualizing embeddings" },
          { name: "Feature selection: correlation, mutual info, RFE", time: "2h", note: "Fewer features = less overfitting" },
          { name: "SHAP values: model interpretation and explainability", time: "2.5h", note: "Critical for business stakeholders" },
          { name: "Experiment tracking with W&B (Weights & Biases)", time: "2h", note: "Track experiments like a pro" },
          { name: "Ensemble methods: voting, stacking, blending", time: "2h", note: "Combining models = better results" },
          { name: "Practice: Full pipeline on messy real-world data", time: "2h", note: null },
        ],
        resource: "Sklearn docs + W&B docs + SHAP library",
        milestone: "End-to-end sklearn Pipeline with feature engineering",
      },
      {
        day: "Days 19–22", hours: "24h", title: "Kaggle Projects + ML Portfolio",
        subtopics: [
          { name: "KAGGLE #1 (Titanic): full pipeline, 5+ models, submit", time: "8h", note: "Classic — focus on process, not score" },
          { name: "KAGGLE #2 (House Prices or Tabular Playground): advanced", time: "10h", note: "Portfolio piece #2 — show depth" },
          { name: "Document approach: write-up with results + learnings", time: "3h", note: "Portfolio narrative matters" },
          { name: "Polish GitHub repos: README, clean code, visualizations", time: "3h", note: "Recruiters check GitHub first" },
        ],
        resource: "Kaggle.com competitions + W&B for tracking",
        milestone: "2 Kaggle submissions documented. Portfolio pieces #1 + #2 done.",
      },
    ],
  },
];

// ─── MONTH 2: DEEP LEARNING + LLMs + BASIC RAG (Days 31–60, ~180h) ────────
// "This is where AI gets exciting. From understanding neurons to talking to GPT-4."
const month2Data = [
  {
    phase: "Phase 1", title: "Deep Learning with PyTorch", duration: "Days 31–42", hours: "72h", emoji: "🧠",
    note: "PyTorch is the industry standard. TensorFlow is fading. Learn PyTorch ONLY.",
    topics: [
      {
        day: "Days 31–33", hours: "18h", title: "Neural Networks + PyTorch Fundamentals",
        subtopics: [
          { name: "Perceptron, activation functions (ReLU, sigmoid, tanh, softmax)", time: "2h", note: "Building blocks of ALL neural networks" },
          { name: "Multi-layer networks, forward pass, loss computation", time: "2h", note: "Data flows forward through layers" },
          { name: "Backpropagation: chain rule in action, gradient flow", time: "3h", note: "THE algorithm that makes learning possible" },
          { name: "Implement a neural network FROM SCRATCH in NumPy", time: "3h", note: "Best exercise ever — understand before using frameworks" },
          { name: "PyTorch tensors, autograd, computation graphs", time: "2h", note: "torch.Tensor = np.array + auto-differentiation" },
          { name: "nn.Module, nn.Linear, nn.Sequential, custom layers", time: "2h", note: "How to build any model in PyTorch" },
          { name: "Training loop: forward → loss → backward → optimizer.step()", time: "2h", note: "This loop is the same for ALL models" },
          { name: "DataLoader, Dataset, transforms, batching", time: "2h", note: "How to feed data to your model efficiently" },
        ],
        resource: "PyTorch official tutorials + Andrej Karpathy: Neural Networks Zero to Hero",
        milestone: "Build and train a neural network from scratch, then replicate in PyTorch",
      },
      {
        day: "Days 34–36", hours: "18h", title: "CNNs + Computer Vision + Transfer Learning",
        subtopics: [
          { name: "Convolutions: filters, stride, padding, feature maps", time: "2h", note: "How CNNs 'see' images — detect edges, shapes, objects" },
          { name: "Pooling layers, batch normalization, dropout", time: "2h", note: "Regularization techniques to prevent overfitting" },
          { name: "Classic architectures: LeNet, AlexNet, VGG, ResNet concepts", time: "2h", note: "Know ResNet — still the backbone of most vision models" },
          { name: "Build CNN from scratch for CIFAR-10 / MNIST", time: "3h", note: "Your first image classifier" },
          { name: "Transfer Learning: load pretrained ResNet/EfficientNet, freeze layers", time: "3h", note: "90% of real CV work = transfer learning, not training from scratch" },
          { name: "Fine-tune on custom dataset (your own images)", time: "3h", note: "This is what you'll actually do at work" },
          { name: "YOLO / object detection concepts (high-level)", time: "1.5h", note: "Know it exists, what it does — don't go deep yet" },
          { name: "Practice: Image classifier with transfer learning → deploy", time: "1.5h", note: null },
        ],
        resource: "Fast.ai Practical Deep Learning + PyTorch Vision tutorials",
        milestone: "Fine-tune a pretrained model on custom data with >90% accuracy",
      },
      {
        day: "Days 37–42", hours: "36h", title: "NLP + Transformers + Attention Mechanism",
        subtopics: [
          { name: "Text preprocessing: tokenization, stemming, lemmatization", time: "2h", note: "Convert text to numbers for ML" },
          { name: "Word embeddings: Word2Vec, GloVe — concept + usage", time: "2h", note: "Words as vectors — similar words = close vectors" },
          { name: "RNNs and LSTMs: sequential processing, vanishing gradients", time: "3h", note: "Know why they failed — Transformers replaced them" },
          { name: "ATTENTION MECHANISM deep dive: self-attention, multi-head", time: "4h", note: "THE breakthrough that created modern AI. Understand this cold." },
          { name: "Transformer architecture: encoder, decoder, positional encoding", time: "4h", note: "Read 'Attention Is All You Need' paper with code" },
          { name: "Implement simplified Transformer in PyTorch", time: "4h", note: "Andrej Karpathy's 'Let's build GPT' — do this!" },
          { name: "HuggingFace ecosystem: transformers, datasets, tokenizers", time: "3h", note: "THE library for NLP/LLMs — used everywhere" },
          { name: "BERT: masked language model, fine-tuning for classification", time: "3h", note: "Encoder model — great for classification, NER, etc." },
          { name: "GPT architecture: decoder-only, autoregressive generation", time: "3h", note: "This is how ChatGPT/Claude work" },
          { name: "Fine-tune BERT for text classification (sentiment/topic)", time: "3h", note: "Practical NLP project" },
          { name: "Text generation with GPT-2 (local)", time: "2h", note: "See how LLMs generate text" },
          { name: "PROJECT: Sentiment analysis system → deployed API", time: "3h", note: "Portfolio piece #3 (optional)" },
        ],
        resource: "Karpathy: Let's build GPT (YouTube) + HuggingFace Course (free)",
        milestone: "Understand Transformers deeply, fine-tune BERT, explain attention mechanism",
      },
    ],
  },
  {
    phase: "Phase 2", title: "LLMs, Prompt Engineering & Embeddings", duration: "Days 43–50", hours: "48h", emoji: "💬",
    note: "This is what 90% of AI jobs require RIGHT NOW. Master this section thoroughly.",
    topics: [
      {
        day: "Days 43–45", hours: "18h", title: "LLM Fundamentals + API Mastery",
        subtopics: [
          { name: "How LLMs work: next-token prediction, temperature, top_p, top_k", time: "2h", note: "Understand the generation process — asked in every interview" },
          { name: "Tokenization deep dive: BPE, SentencePiece, tiktoken", time: "1.5h", note: "Tokens ≠ words. This affects cost and context windows." },
          { name: "Context windows, token limits, pricing models", time: "1h", note: "GPT-4: 128K, Claude: 200K, Llama: varies" },
          { name: "OpenAI API: chat completions, streaming, function calling", time: "3h", note: "Master the most popular API" },
          { name: "Anthropic API: messages, system prompts, tool use", time: "3h", note: "Claude is gaining market share fast" },
          { name: "Ollama: run Llama/Mistral locally, API compatibility", time: "2h", note: "Free, private, great for development" },
          { name: "Structured outputs: JSON mode, response schemas, Pydantic", time: "2h", note: "Production apps need structured data, not free text" },
          { name: "Streaming responses: SSE, async generators", time: "1.5h", note: "ChatGPT-like typing effect" },
          { name: "Practice: Build a multi-provider LLM wrapper class", time: "2h", note: "Supports OpenAI + Anthropic + Ollama" },
        ],
        resource: "OpenAI docs + Anthropic docs + Ollama docs",
        milestone: "Call any LLM API, stream responses, get structured JSON outputs",
      },
      {
        day: "Days 46–48", hours: "18h", title: "Prompt Engineering Mastery",
        subtopics: [
          { name: "Zero-shot prompting: clear instructions, role setting", time: "1.5h", note: "Simplest pattern — works for many tasks" },
          { name: "Few-shot prompting: examples as context, format matching", time: "2h", note: "Give examples → model follows the pattern" },
          { name: "Chain-of-Thought (CoT): step-by-step reasoning", time: "2h", note: "Dramatically improves accuracy on complex tasks" },
          { name: "System prompts: persona, rules, constraints, output format", time: "2h", note: "The 'personality' and 'rules' of your AI" },
          { name: "ReAct pattern: Reasoning + Acting for tool use", time: "2h", note: "Foundation of AI agents — CRITICAL to understand" },
          { name: "Function calling / Tool use: define tools, parse responses", time: "3h", note: "How agents interact with the real world" },
          { name: "Prompt chaining: break complex tasks into steps", time: "2h", note: "Better than one massive prompt" },
          { name: "Guardrails: input validation, output filtering, safety", time: "1.5h", note: "Production requirement — prevent misuse" },
          { name: "Practice: Build a structured data extractor from unstructured text", time: "2h", note: "Resume parser, invoice extractor, etc." },
        ],
        resource: "Anthropic Prompt Engineering Guide + OpenAI Cookbook",
        milestone: "Design prompt systems that reliably produce accurate structured outputs",
      },
      {
        day: "Days 49–50", hours: "12h", title: "Embeddings + Vector Databases + Semantic Search",
        subtopics: [
          { name: "What are embeddings: text → dense vector, semantic meaning", time: "1.5h", note: "King - Man + Woman = Queen (approximately)" },
          { name: "Embedding models: OpenAI ada-002, sentence-transformers, Cohere", time: "2h", note: "Different models for different use cases" },
          { name: "Cosine similarity, euclidean distance, dot product", time: "1.5h", note: "How to measure 'similarity' between texts" },
          { name: "ChromaDB: setup, add documents, query, metadata filtering", time: "2h", note: "Best local/dev vector DB — simple API" },
          { name: "Pinecone: cloud vector DB, namespaces, scaling", time: "2h", note: "Best production vector DB — used by most companies" },
          { name: "Semantic search vs keyword search: when to use each", time: "1h", note: "Semantic understands meaning, keyword matches words" },
          { name: "Practice: Build semantic search over your own documents", time: "2h", note: "Search your notes/docs with natural language" },
        ],
        resource: "ChromaDB docs + Pinecone docs + OpenAI Embeddings guide",
        milestone: "Build semantic search that finds relevant info even without exact keyword matches",
      },
    ],
  },
  {
    phase: "Phase 3", title: "RAG Fundamentals", duration: "Days 51–60", hours: "60h", emoji: "📚",
    note: "RAG = Retrieval Augmented Generation. THE most hired-for skill in 2026 AI jobs.",
    topics: [
      {
        day: "Days 51–54", hours: "24h", title: "RAG Architecture + Basic Implementation",
        subtopics: [
          { name: "RAG concept: why LLMs need external knowledge", time: "1.5h", note: "LLMs hallucinate. RAG grounds them in real data." },
          { name: "Document loading: PDF, DOCX, HTML, Markdown parsers", time: "2h", note: "Unstructured library, PyPDF2, python-docx" },
          { name: "Chunking strategies: fixed-size, recursive, semantic, sentence", time: "3h", note: "CRITICAL — bad chunking = bad RAG. Experiment!" },
          { name: "Chunk overlap, metadata attachment, parent-child chunks", time: "2h", note: "Overlap prevents cutting important info" },
          { name: "Embedding pipeline: chunk → embed → store in vector DB", time: "2h", note: "The 'indexing' phase of RAG" },
          { name: "Retrieval: similarity search, MMR, top-k selection", time: "2h", note: "The 'query' phase — find relevant chunks" },
          { name: "Generation: context injection, answer synthesis", time: "2h", note: "Feed retrieved chunks to LLM with question" },
          { name: "LangChain for RAG: document loaders, text splitters, chains", time: "3h", note: "Most popular RAG framework" },
          { name: "LlamaIndex for RAG: indices, query engines, response synthesis", time: "3h", note: "Alternative to LangChain — more data-focused" },
          { name: "PROJECT: Basic PDF Q&A chatbot", time: "3.5h", note: "Upload PDF → ask questions → get answers with citations" },
        ],
        resource: "LangChain docs + LlamaIndex docs + Pinecone Learning Center",
        milestone: "Working RAG app that answers questions from your documents",
      },
      {
        day: "Days 55–60", hours: "36h", title: "Advanced RAG + Evaluation + Production Patterns",
        subtopics: [
          { name: "Hybrid search: combine vector search + BM25 keyword search", time: "3h", note: "Best of both worlds — most production RAGs use this" },
          { name: "Re-ranking: Cohere Reranker, cross-encoder models", time: "2.5h", note: "Retrieve many, re-rank to find the best" },
          { name: "Query transformation: HyDE, multi-query, step-back prompting", time: "3h", note: "Transform user query for better retrieval" },
          { name: "Metadata filtering: pre-filter by date, source, category", time: "2h", note: "Narrow search space before vector similarity" },
          { name: "Multi-document RAG: handle multiple PDFs, cross-referencing", time: "2.5h", note: "Real-world RAG = many documents" },
          { name: "Conversational RAG: chat history, follow-up questions", time: "2.5h", note: "Users don't ask one-shot questions" },
          { name: "Streaming RAG: stream answers while generating", time: "2h", note: "Better UX — show answer as it's generated" },
          { name: "RAG evaluation with RAGAS: faithfulness, relevance, recall", time: "3h", note: "How to MEASURE if your RAG is good" },
          { name: "RAG evaluation with DeepEval: custom metrics, automated testing", time: "2h", note: "CI/CD for RAG quality" },
          { name: "Failure analysis: when RAG fails and how to debug", time: "2h", note: "Retrieval failures, hallucinations, wrong chunks" },
          { name: "GraphRAG concept: knowledge graphs + RAG", time: "2h", note: "Cutting-edge — Microsoft's GraphRAG paper" },
          { name: "PROJECT: Production RAG chatbot with evaluation pipeline", time: "6h", note: "Portfolio piece #3 — deployed, with eval metrics" },
          { name: "FastAPI endpoint: serve your RAG as an API", time: "3.5h", note: "Productionize with streaming + error handling" },
        ],
        resource: "RAGAS docs + DeepEval docs + LangSmith for tracing",
        milestone: "Production RAG with hybrid search, re-ranking, eval metrics. Portfolio piece #3.",
      },
    ],
  },
];

// ─── MONTH 3: AI AGENTS + FINE-TUNING + MLOPS (Days 61–90, ~180h) ─────────
// "This month separates junior from senior AI engineers. Agents are the future."
const month3Data = [
  {
    phase: "Phase 1", title: "AI Agents & Agentic Systems", duration: "Days 61–75", hours: "90h", emoji: "🤖",
    note: "Agents are the #1 hiring trend in 2026. Companies want engineers who can build autonomous AI systems.",
    topics: [
      {
        day: "Days 61–64", hours: "24h", title: "Agent Fundamentals + LangGraph",
        subtopics: [
          { name: "What are AI agents: perception → reasoning → action loop", time: "2h", note: "Agents = LLMs that can DO things, not just chat" },
          { name: "ReAct pattern deep dive: Thought → Action → Observation", time: "2h", note: "The foundation of all agent architectures" },
          { name: "Tool use: defining tools, schemas, parsing LLM tool calls", time: "3h", note: "Agents interact with APIs, databases, files via tools" },
          { name: "Memory types: short-term (conversation), long-term (persistent), episodic", time: "2h", note: "How agents remember past interactions" },
          { name: "LangGraph fundamentals: StateGraph, nodes, edges, conditions", time: "3h", note: "Graph-based agent orchestration — most production-ready" },
          { name: "LangGraph: state management, checkpointing, persistence", time: "3h", note: "Resume agents from any state — critical for production" },
          { name: "LangGraph: human-in-the-loop, interrupts, approval flows", time: "2.5h", note: "Humans approve critical actions — required by enterprises" },
          { name: "LangGraph: streaming, real-time updates, event handling", time: "2h", note: "Stream agent progress to the user" },
          { name: "PROJECT: Research agent that searches web + summarizes findings", time: "4.5h", note: "Takes a question → searches → analyzes → produces report" },
        ],
        resource: "LangGraph docs (excellent) + LangChain Academy (free course)",
        milestone: "Build a stateful agent with tools, memory, and human-in-the-loop",
      },
      {
        day: "Days 65–68", hours: "24h", title: "Multi-Agent Systems + CrewAI",
        subtopics: [
          { name: "Multi-agent architectures: supervisor, hierarchical, collaborative", time: "2.5h", note: "Different patterns for different use cases" },
          { name: "CrewAI fundamentals: Agents, Tasks, Crews, Processes", time: "3h", note: "Role-based multi-agent framework — easiest to learn" },
          { name: "CrewAI: defining agent roles, goals, backstories, tools", time: "2.5h", note: "Each agent = specialist with clear responsibilities" },
          { name: "CrewAI: sequential vs hierarchical process flows", time: "2h", note: "Sequential = assembly line, hierarchical = manager + workers" },
          { name: "CrewAI: memory, delegation, inter-agent communication", time: "2h", note: "Agents can delegate tasks to each other" },
          { name: "LangGraph multi-agent: supervisor pattern implementation", time: "3h", note: "More control than CrewAI, more code required" },
          { name: "Agent evaluation: how to test agent behavior, success metrics", time: "2h", note: "Harder than testing normal code — non-deterministic" },
          { name: "Error handling: retries, fallbacks, graceful degradation", time: "2h", note: "Production agents MUST handle failures" },
          { name: "PROJECT: Multi-agent content creation team (researcher + writer + editor)", time: "5h", note: "3 agents collaborating on a task" },
        ],
        resource: "CrewAI docs + LangGraph multi-agent tutorial",
        milestone: "Build a multi-agent system where agents collaborate and delegate",
      },
      {
        day: "Days 69–72", hours: "24h", title: "MCP Protocol + Advanced Agent Patterns",
        subtopics: [
          { name: "Model Context Protocol (MCP): what, why, architecture", time: "2h", note: "Anthropic's standard for connecting AI to tools — rapidly adopted" },
          { name: "MCP servers: building custom tool servers", time: "3h", note: "Expose any API/DB as an MCP server for agents" },
          { name: "MCP clients: connecting agents to MCP servers", time: "2.5h", note: "Standard protocol = plug any tool into any agent" },
          { name: "A2A (Agent-to-Agent) protocol concepts", time: "1.5h", note: "Google's protocol for agents talking to each other" },
          { name: "Agentic RAG: agents that decide WHEN and HOW to retrieve", time: "3h", note: "Agent decides: do I need to search? What query? Which source?" },
          { name: "Planning agents: break complex tasks into subtasks", time: "2.5h", note: "Agent creates its own plan, then executes step by step" },
          { name: "Code generation agents: write, test, iterate on code", time: "2.5h", note: "Like GitHub Copilot but autonomous" },
          { name: "Agent observability: LangSmith, Langfuse for tracing", time: "2.5h", note: "See exactly what your agent did and why — debug production" },
          { name: "PROJECT: MCP-powered agent that connects to your tools", time: "4h", note: "Agent uses MCP to access calendar, email, databases" },
        ],
        resource: "MCP spec (modelcontextprotocol.io) + LangSmith docs + Langfuse docs",
        milestone: "Build agents with MCP integration and full observability",
      },
      {
        day: "Days 73–75", hours: "18h", title: "Production Agent Patterns + Deployment",
        subtopics: [
          { name: "Cost optimization: token budgets, caching, model routing", time: "2.5h", note: "Agents can be EXPENSIVE — optimize or go broke" },
          { name: "Latency optimization: parallel tool calls, streaming, async", time: "2h", note: "Users hate waiting — agents must be fast" },
          { name: "Safety: input validation, output filtering, rate limiting", time: "2h", note: "Agents can do dangerous things — guardrails required" },
          { name: "NeMo Guardrails: define safety rails for agent behavior", time: "2h", note: "NVIDIA's framework for AI safety" },
          { name: "Testing agents: unit tests for tools, integration tests for flows", time: "2.5h", note: "Test tools deterministically, test flows probabilistically" },
          { name: "Deployment: FastAPI + WebSockets for agent communication", time: "2.5h", note: "Agents need persistent connections, not just REST" },
          { name: "PROJECT: Deploy production agent with safety rails + monitoring", time: "4.5h", note: "Portfolio piece #4 — the agent project" },
        ],
        resource: "NeMo Guardrails docs + FastAPI WebSocket docs",
        milestone: "Production-ready agent system: safe, observable, cost-effective. Portfolio piece #4.",
      },
    ],
  },
  {
    phase: "Phase 2", title: "Fine-Tuning + Multimodal AI", duration: "Days 76–82", hours: "42h", emoji: "🔧",
    note: "Fine-tuning specialists earn 30-50% more than generalists. Multimodal is the next frontier.",
    topics: [
      {
        day: "Days 76–79", hours: "24h", title: "Fine-Tuning LLMs (LoRA/QLoRA)",
        subtopics: [
          { name: "When to fine-tune: vs prompt engineering vs RAG decision tree", time: "2h", note: "INTERVIEW QUESTION — know the trade-offs cold" },
          { name: "Dataset preparation: format, cleaning, quality, synthetic data gen", time: "3h", note: "Garbage in = garbage out. Dataset quality > quantity." },
          { name: "LoRA: Low-Rank Adaptation concept, why it works", time: "2h", note: "Train 0.1% of parameters, get 90% of full fine-tune quality" },
          { name: "QLoRA: quantized LoRA for consumer GPUs", time: "2h", note: "Fine-tune 7B models on a single GPU" },
          { name: "HuggingFace PEFT library: LoraConfig, training setup", time: "2.5h", note: "Industry-standard library for parameter-efficient fine-tuning" },
          { name: "Fine-tune Llama/Mistral for classification task", time: "3.5h", note: "Hands-on: sentiment analysis or topic classification" },
          { name: "Fine-tune instruction-following model with custom dataset", time: "3.5h", note: "Make a model follow YOUR format and rules" },
          { name: "Evaluation: perplexity, BLEU, ROUGE, human eval, LLM-as-judge", time: "2.5h", note: "How to measure if fine-tuning actually improved things" },
          { name: "DPO (Direct Preference Optimization) concept", time: "1.5h", note: "Simpler alternative to RLHF — align models to preferences" },
          { name: "RLHF high-level: reward models, PPO, why companies use it", time: "1.5h", note: "How ChatGPT was trained to be helpful — know the concept" },
        ],
        resource: "HuggingFace PEFT docs + Sebastian Raschka: Build LLM From Scratch (book)",
        milestone: "Fine-tune 2 models end-to-end. Know when fine-tuning beats RAG/prompting.",
      },
      {
        day: "Days 80–82", hours: "18h", title: "Multimodal AI + Vision-Language Models",
        subtopics: [
          { name: "Multimodal landscape: text + image + audio + video models", time: "2h", note: "GPT-4V, Claude Vision, Gemini, LLaVA — all multimodal" },
          { name: "Vision-Language Models: how they combine vision + text", time: "2h", note: "CLIP, LLaVA, Qwen-VL architecture concepts" },
          { name: "Image understanding: using GPT-4V/Claude for image analysis", time: "2.5h", note: "Extract info from screenshots, diagrams, photos" },
          { name: "Document AI: OCR + LLM for invoice/receipt/form processing", time: "3h", note: "Huge business use case — every company has documents" },
          { name: "Speech-to-Text: Whisper model, transcription pipeline", time: "2.5h", note: "OpenAI's Whisper — best open-source STT model" },
          { name: "Text-to-Speech: edge TTS, Bark, Coqui concepts", time: "1.5h", note: "Know the landscape, don't go deep" },
          { name: "Multimodal RAG: indexing images + text together", time: "2.5h", note: "Cutting-edge — search over documents with images" },
          { name: "Practice: Build a multimodal chatbot (text + image input)", time: "2h", note: "Accept text AND images, process both" },
        ],
        resource: "OpenAI Vision docs + HuggingFace multimodal models + Whisper docs",
        milestone: "Build multimodal apps that handle text, images, and audio",
      },
    ],
  },
  {
    phase: "Phase 3", title: "MLOps & Production AI", duration: "Days 83–90", hours: "48h", emoji: "🚀",
    note: "Knowing ML means nothing if you can't deploy it. This section makes you hire-able.",
    topics: [
      {
        day: "Days 83–85", hours: "18h", title: "Docker + FastAPI for AI",
        subtopics: [
          { name: "Docker fundamentals: images, containers, Dockerfile, layers", time: "2.5h", note: "Container = your app + all dependencies in a box" },
          { name: "Docker for ML: multi-stage builds, CUDA support, .dockerignore", time: "2h", note: "ML Docker images can be HUGE — optimize them" },
          { name: "docker-compose: multi-service apps (API + DB + Redis)", time: "2h", note: "Run your entire stack locally" },
          { name: "FastAPI deep dive: routes, Pydantic models, async endpoints", time: "2.5h", note: "THE framework for AI APIs — used everywhere" },
          { name: "FastAPI: streaming responses (ServerSentEvents), file uploads", time: "2h", note: "Stream LLM responses like ChatGPT" },
          { name: "FastAPI: authentication, rate limiting, CORS, middleware", time: "2h", note: "Production requirements" },
          { name: "FastAPI: WebSockets for agent communication", time: "2h", note: "Agents need bidirectional communication" },
          { name: "Practice: Dockerized FastAPI serving your RAG + agent", time: "3h", note: null },
        ],
        resource: "FastAPI docs (excellent) + Docker docs + TestDriven.io tutorials",
        milestone: "Dockerized AI API with streaming, auth, and WebSockets",
      },
      {
        day: "Days 86–88", hours: "18h", title: "MLOps: Experiment Tracking + CI/CD + Monitoring",
        subtopics: [
          { name: "MLflow: experiment tracking, model registry, model versioning", time: "3h", note: "Track every experiment, compare runs, register best models" },
          { name: "W&B advanced: sweeps (hyperparameter tuning), reports, artifacts", time: "2.5h", note: "More polished than MLflow for experiment tracking" },
          { name: "CI/CD for ML: GitHub Actions for testing + deployment", time: "2.5h", note: "Auto-test and deploy models on git push" },
          { name: "Model monitoring: data drift, concept drift, performance decay", time: "2.5h", note: "Models degrade over time — you MUST monitor" },
          { name: "Inference optimization: batching, caching, model quantization", time: "2.5h", note: "Make inference faster and cheaper" },
          { name: "Model serving: vLLM for LLM serving (high-throughput)", time: "2h", note: "Serve LLMs 10-24x faster than naive HuggingFace" },
          { name: "Cost monitoring: track API costs, token usage, alerts", time: "1.5h", note: "AI apps can rack up $$$$ fast" },
          { name: "Logging + observability: structured logging, Langfuse traces", time: "1.5h", note: "Debug production issues quickly" },
        ],
        resource: "MLflow docs + W&B docs + vLLM docs + GitHub Actions docs",
        milestone: "Full MLOps pipeline: track → train → test → deploy → monitor",
      },
      {
        day: "Days 89–90", hours: "12h", title: "Cloud Deployment + Scaling",
        subtopics: [
          { name: "AWS basics: EC2, S3, RDS, Lambda, IAM — for ML workloads", time: "3h", note: "Know enough to deploy. Don't become a cloud expert yet." },
          { name: "Deployment options: Railway, HuggingFace Spaces, Modal, Render", time: "2h", note: "Simpler than AWS — great for portfolio projects" },
          { name: "HuggingFace Spaces: deploy Gradio/Streamlit apps for free", time: "1.5h", note: "Instant deployment for ML demos" },
          { name: "Modal: serverless GPU compute for inference + training", time: "2h", note: "Pay-per-use GPU — great for fine-tuning" },
          { name: "Kubernetes concepts (high-level): pods, services, scaling", time: "1.5h", note: "Know concepts — don't master. 'K8s' appears in 17.6% of AI jobs." },
          { name: "Practice: Deploy your portfolio projects to cloud", time: "2h", note: "Every project should be LIVE and accessible" },
        ],
        resource: "AWS Free Tier + Modal docs + HuggingFace Spaces docs",
        milestone: "All portfolio projects deployed and accessible via live URLs",
      },
    ],
  },
];

// ─── MONTH 4: SYSTEM DESIGN + PORTFOLIO + GET HIRED (Days 91–120, ~180h) ───
// "Everything you've built means nothing if you can't GET THE JOB. This month closes the deal."
const month4Data = [
  {
    phase: "Phase 1", title: "AI System Design", duration: "Days 91–100", hours: "60h", emoji: "🏗️",
    note: "AI system design interviews are now standard. Companies pay $150K+ for engineers who can design at scale.",
    topics: [
      {
        day: "Days 91–94", hours: "24h", title: "ML System Design Fundamentals",
        subtopics: [
          { name: "ML system design framework: requirements → data → model → serving → monitoring", time: "3h", note: "Use this framework for EVERY design question" },
          { name: "Data pipeline design: ingestion, validation, feature stores", time: "3h", note: "Bad data = bad models. Design data quality in." },
          { name: "Feature engineering at scale: batch vs real-time features", time: "2h", note: "Batch = computed daily, real-time = computed per-request" },
          { name: "Model selection trade-offs: accuracy vs latency vs cost", time: "2h", note: "The classic ML trade-off triangle" },
          { name: "Serving patterns: batch, online, streaming, embedded", time: "2.5h", note: "Different use cases need different serving patterns" },
          { name: "A/B testing for ML: experiment design, statistical significance", time: "2.5h", note: "How to prove your model is better than the current one" },
          { name: "Scaling ML systems: horizontal scaling, load balancing, caching", time: "2.5h", note: "What happens when 1M users hit your model?" },
          { name: "Cost estimation: compute costs, API costs, storage costs", time: "2h", note: "LLM API calls = expensive. Calculate before designing." },
          { name: "Practice: Design a recommendation system (e-commerce)", time: "2.5h", note: "Classic interview question" },
          { name: "Practice: Design a search engine with ML ranking", time: "2h", note: "Combine keyword + semantic + ML re-ranking" },
        ],
        resource: "Chip Huyen: Designing ML Systems (book) + ByteByteGo ML System Design",
        milestone: "Framework for approaching any ML system design question",
      },
      {
        day: "Days 95–98", hours: "24h", title: "LLM System Design (2026 Interview Focus)",
        subtopics: [
          { name: "Design: RAG system at scale (millions of documents)", time: "3h", note: "Sharding vector DBs, caching, async indexing" },
          { name: "Design: AI chatbot for customer support (enterprise)", time: "3h", note: "Routing, escalation, safety, knowledge management" },
          { name: "Design: Content moderation system with LLMs", time: "2.5h", note: "Classify harmful content, handle edge cases, latency" },
          { name: "Design: Multi-agent system for complex workflows", time: "3h", note: "Agent orchestration, error recovery, state management" },
          { name: "Design: Real-time fraud detection with ML", time: "2.5h", note: "Streaming data, low latency, high accuracy requirements" },
          { name: "Design: LLM-powered code review assistant", time: "2h", note: "Parse code, provide suggestions, integrate with Git" },
          { name: "Design: Document processing pipeline (invoices, contracts)", time: "2.5h", note: "OCR + LLM + structured extraction at scale" },
          { name: "Agentic system design interviews: what to expect", time: "2.5h", note: "Design agents that handle real money and data" },
          { name: "Practice: Mock system design with 35-minute timer", time: "3h", note: "Simulate real interview conditions" },
        ],
        resource: "Exponent System Design + interviewing.io guides",
        milestone: "Solve 10 AI system design problems with clear trade-off analysis",
      },
      {
        day: "Days 99–100", hours: "12h", title: "Flutter + AI Integration (Your Secret Weapon)",
        subtopics: [
          { name: "Flutter + FastAPI: connect mobile app to AI backend", time: "2h", note: "Your Flutter skills + AI = unique differentiator" },
          { name: "Streaming in Flutter: Dio streaming, SSE, WebSockets", time: "2h", note: "ChatGPT-like streaming in your mobile app" },
          { name: "State management for AI: Riverpod for chat + streaming", time: "2h", note: "Manage conversation state, loading, errors with flutter_riverpod" },
          { name: "On-device AI: TFLite, ONNX Runtime, CoreML basics", time: "2h", note: "Run small models directly on phone — no internet needed" },
          { name: "Gemini API in Flutter: Google's multimodal AI", time: "2h", note: "Alternative to OpenAI for mobile apps" },
          { name: "Practice: Flutter AI chat app with streaming + image input", time: "2h", note: "Part of Portfolio piece #5" },
        ],
        resource: "Flutter docs + Dio docs + Riverpod docs (use flutter_riverpod, not riverpod_annotation)",
        milestone: "Flutter app connected to AI backend with streaming responses",
      },
    ],
  },
  {
    phase: "Phase 2", title: "Portfolio Sprint", duration: "Days 101–112", hours: "72h", emoji: "💼",
    note: "5 polished projects > 15 half-finished ones. Each project must be DEPLOYED with a live demo.",
    topics: [
      {
        day: "Days 101–104", hours: "24h", title: "Polish Existing + Build Flagship Projects",
        subtopics: [
          { name: "PROJECT #1: EDA + ML Pipeline (from Month 1 Kaggle work)", time: "4h", note: "Polish README, add visualizations, deploy notebook" },
          { name: "PROJECT #2: Production RAG Chatbot (from Month 2)", time: "6h", note: "Polish UI, add eval metrics, deploy to HuggingFace/Railway" },
          { name: "PROJECT #3: AI Agent System (from Month 3)", time: "6h", note: "Add demo video, clean code, document architecture" },
          { name: "PROJECT #4: Flutter + AI Mobile App (your unique differentiator)", time: "8h", note: "Full-stack: Flutter frontend + FastAPI + LLM + streaming" },
        ],
        resource: "Vercel, Railway, HuggingFace Spaces for deployment",
        milestone: "4 projects deployed with live URLs and polished READMEs",
      },
      {
        day: "Days 105–108", hours: "24h", title: "Flagship Project: End-to-End AI SaaS",
        subtopics: [
          { name: "PROJECT #5: AI SaaS Application (combines everything)", time: "24h", note: "This is your MAGNUM OPUS — the project that gets you hired" },
          { name: "  → Frontend: Streamlit or Gradio (fast) or React (impressive)", time: "4h", note: "Choose based on your comfort — Streamlit is fastest" },
          { name: "  → Backend: FastAPI + RAG + Agent capabilities", time: "6h", note: "Your agent that retrieves knowledge and takes actions" },
          { name: "  → Database: PostgreSQL + ChromaDB/Pinecone", time: "3h", note: "SQL for users/state, vector DB for knowledge" },
          { name: "  → Auth: simple API key or OAuth", time: "2h", note: "Don't over-engineer — keep it simple" },
          { name: "  → Evaluation: RAGAS scores, latency metrics, cost tracking", time: "3h", note: "Show you measure quality, not just build" },
          { name: "  → Deployment: Docker + Railway/HuggingFace + CI/CD", time: "3h", note: "One-click deploy with GitHub Actions" },
          { name: "  → Documentation: architecture diagram, API docs, demo video", time: "3h", note: "Recruiters spend 30 seconds — make it count" },
        ],
        resource: "Choose a REAL problem to solve — not a toy demo",
        milestone: "Deployed AI SaaS with documentation, demo video, and live URL",
      },
      {
        day: "Days 109–112", hours: "24h", title: "Open Source + GitHub Profile + Online Presence",
        subtopics: [
          { name: "Open Source contribution: find a good first issue in LangChain/HuggingFace/CrewAI", time: "8h", note: "1 merged PR = proves you can work with real codebases" },
          { name: "GitHub profile: pinned repos, profile README, contribution graph", time: "3h", note: "Make your GitHub look professional and active" },
          { name: "Write 2-3 technical blog posts (dev.to, Medium, or personal blog)", time: "6h", note: "Writing about what you built = proof of understanding" },
          { name: "LinkedIn optimization: headline, about, experience, projects", time: "3h", note: "'AI Engineer | Building LLM apps, RAG systems, AI agents'" },
          { name: "Twitter/X presence: share learnings, engage with AI community", time: "2h", note: "Many AI jobs come through Twitter networking" },
          { name: "Demo videos for each project (2-3 min each)", time: "2h", note: "Loom or screen recording — recruiters love video demos" },
        ],
        resource: "dev.to + Medium + LinkedIn + GitHub profile guide",
        milestone: "Professional online presence: GitHub, LinkedIn, blog posts, demo videos",
      },
    ],
  },
  {
    phase: "Phase 3", title: "Interview Prep & Job Hunt", duration: "Days 113–120", hours: "48h", emoji: "🎯",
    note: "You've built the skills. Now close the deal. Strategic > desperate.",
    topics: [
      {
        day: "Days 113–116", hours: "24h", title: "Interview Preparation Deep Dive",
        subtopics: [
          { name: "ML Fundamentals Questions (30 questions prepared)", time: "4h", note: "Bias-variance, overfitting, regularization, metrics, cross-val" },
          { name: "Deep Learning Questions (20 questions prepared)", time: "3h", note: "Backprop, vanishing gradients, batch norm, transformers, attention" },
          { name: "LLM Questions (25 questions prepared)", time: "4h", note: "Tokenization, context windows, fine-tuning vs RAG, hallucination" },
          { name: "RAG Questions (15 questions prepared)", time: "2.5h", note: "Chunking, hybrid search, evaluation, failure modes" },
          { name: "Agent Questions (15 questions prepared)", time: "2.5h", note: "ReAct, tool use, memory, multi-agent, production patterns" },
          { name: "Python Coding Questions (20 questions)", time: "3h", note: "Data manipulation, API calls, OOP, async — live coding" },
          { name: "Behavioral: STAR method, 15 stories prepared", time: "3h", note: "Technical challenge, teamwork, failure, leadership stories" },
          { name: "Mock interview practice (2-3 full mock sessions)", time: "2h", note: "Practice with friends or Pramp.com (free)" },
        ],
        resource: "DataCamp LLM interview guide + Exponent + Pramp (free mocks)",
        milestone: "Can answer 100+ technical questions confidently",
      },
      {
        day: "Days 117–120", hours: "24h", title: "Job Hunt Execution",
        subtopics: [
          { name: "Resume: ATS-optimized, 1 page, quantified achievements", time: "3h", note: "'Built RAG system serving 10K queries/day with 95% accuracy'" },
          { name: "Target list: 50 AI startups (Series A-C) + 30 YC companies + 20 enterprise", time: "3h", note: "AI startups hire faster, pay well, less bureaucracy" },
          { name: "Job boards: LinkedIn, Wellfound, Y Combinator, ai-jobs.net", time: "2h", note: "Wellfound and YC Work at a Startup are goldmines" },
          { name: "Cold outreach: DM hiring managers and AI team leads on LinkedIn", time: "3h", note: "Personalized message + link to your portfolio" },
          { name: "Referrals: ask your network, attend AI meetups, Discord communities", time: "2h", note: "Referrals = 10x higher response rate" },
          { name: "Apply strategically: customize resume per role, write cover letters", time: "5h", note: "Quality applications > mass applications" },
          { name: "Follow-up: track applications, follow up after 1 week", time: "2h", note: "Use a spreadsheet — don't lose track" },
          { name: "Negotiate: research market rates, have a number in mind", time: "2h", note: "AI engineers: $130K–$250K+. Don't undersell yourself." },
          { name: "Continue applying: job hunting doesn't stop until offer signed", time: "2h", note: "Keep pipeline full — momentum matters" },
        ],
        resource: "levels.fyi (salaries) + Wellfound + YC Work at a Startup",
        milestone: "100+ applications sent, 10+ interviews scheduled, offers incoming",
      },
    ],
  },
];

// ─── PORTFOLIO PROJECTS SPEC (5 projects, each deployed) ───────────────────
const portfolioProjects = [
  {
    num: 1, title: "EDA + ML Pipeline",
    tech: "Python, Pandas, Scikit-learn, W&B, Matplotlib",
    description: "End-to-end ML pipeline on real dataset. EDA → Feature Engineering → 5+ Models → Hyperparameter Tuning → Ensemble. Kaggle submission.",
    mustHave: ["Clean Jupyter notebook", "Visualizations", "Model comparison table", "W&B experiment tracking", "GitHub README with results"],
    builtDuring: "Month 1 (Days 19–22)",
    deployedOn: "Kaggle Notebook + GitHub",
  },
  {
    num: 2, title: "Production RAG Chatbot",
    tech: "Python, LangChain, ChromaDB/Pinecone, FastAPI, RAGAS, Streamlit",
    description: "Chat with your documents. Hybrid search + re-ranking + evaluation metrics. Deployed with live demo.",
    mustHave: ["Hybrid search (vector + keyword)", "Re-ranking", "RAGAS evaluation scores", "Streaming responses", "Deployed with live URL"],
    builtDuring: "Month 2 (Days 55–60)",
    deployedOn: "HuggingFace Spaces or Railway",
  },
  {
    num: 3, title: "AI Agent System",
    tech: "Python, LangGraph, CrewAI, MCP, LangSmith, FastAPI",
    description: "Multi-agent system with tools, memory, human-in-the-loop. Full observability with LangSmith traces.",
    mustHave: ["Multiple agents with clear roles", "Tool integration (APIs, search, etc.)", "Human-in-the-loop approval", "LangSmith tracing", "Error handling + retries"],
    builtDuring: "Month 3 (Days 61–75)",
    deployedOn: "Railway or custom server",
  },
  {
    num: 4, title: "Flutter + AI Mobile App (YOUR SECRET WEAPON)",
    tech: "Flutter, Dart, FastAPI, Riverpod (flutter_riverpod), Dio, LLM APIs",
    description: "Mobile AI app with streaming chat, image input, conversation history. Your unique differentiator — Flutter + AI engineers are RARE.",
    mustHave: ["Streaming responses (ChatGPT-like)", "Image input + processing", "Conversation history", "Offline caching", "Polished UI/UX"],
    builtDuring: "Month 4 (Days 99–104)",
    deployedOn: "App Store / Play Store or TestFlight + GitHub",
  },
  {
    num: 5, title: "AI SaaS Application (Magnum Opus)",
    tech: "FastAPI, RAG, Agents, PostgreSQL, ChromaDB, Docker, GitHub Actions",
    description: "Full AI SaaS that solves a REAL problem. Combines RAG + agents + evaluation + deployment + monitoring.",
    mustHave: ["Solves a real problem", "Authentication", "RAG + Agent capabilities", "Eval metrics + monitoring", "Docker + CI/CD", "Architecture diagram", "Demo video"],
    builtDuring: "Month 4 (Days 105–108)",
    deployedOn: "Railway/Render + custom domain",
  },
];

// ─── RESOURCES & TOOLS ─────────────────────────────────────────────────────
const resources = {
  books: [
    { name: "Hands-On ML with Scikit-Learn, Keras & TensorFlow (Géron)", use: "ML fundamentals — THE reference book", month: "1–2" },
    { name: "Deep Learning with Python (Chollet)", use: "DL concepts, intuitive explanations", month: "2" },
    { name: "Build a Large Language Model From Scratch (Raschka)", use: "Understand LLM internals", month: "2" },
    { name: "Designing Machine Learning Systems (Chip Huyen)", use: "ML system design — interview prep", month: "4" },
    { name: "AI Engineering (Chip Huyen)", use: "Production AI patterns — brand new 2025 book", month: "3–4" },
  ],
  youtube: [
    { name: "Andrej Karpathy", use: "Neural Networks Zero to Hero, Let's build GPT", month: "2" },
    { name: "3Blue1Brown", use: "Linear algebra, calculus, neural networks — visual intuition", month: "1" },
    { name: "StatQuest (Josh Starmer)", use: "ML/stats concepts explained simply", month: "1" },
    { name: "Sentdex", use: "Practical Python ML tutorials", month: "1–2" },
    { name: "Two Minute Papers", use: "Stay current on AI research", month: "All" },
    { name: "Yannic Kilcher", use: "Paper explanations for practitioners", month: "2–3" },
    { name: "Fireship", use: "Quick overviews of any tech", month: "All" },
  ],
  courses: [
    { name: "fast.ai Practical Deep Learning", use: "Top-down DL course — free, practical", month: "2" },
    { name: "HuggingFace NLP Course", use: "Transformers, fine-tuning — free", month: "2" },
    { name: "LangChain Academy", use: "LangGraph, agents — free", month: "3" },
    { name: "DeepLearning.AI Short Courses", use: "Bite-sized AI courses by Andrew Ng's team — free", month: "All" },
    { name: "Stanford CS229 (YouTube)", use: "ML theory — optional but excellent", month: "1" },
  ],
  communities: [
    { name: "HuggingFace Discord", use: "Models, datasets, transformers help" },
    { name: "LangChain Discord", use: "RAG, agents, LangGraph help" },
    { name: "MLOps Community Slack", use: "Production ML discussions" },
    { name: "Kaggle Forums", use: "Competition tips, learning resources" },
    { name: "r/MachineLearning (Reddit)", use: "Research papers, industry news" },
    { name: "AI Twitter/X", use: "Follow: @kaborofyi, @chiphuyen, @svpino, @_jasonwei" },
  ],
  newsletters: [
    { name: "The Batch (DeepLearning.AI)", use: "Weekly AI news digest" },
    { name: "TLDR AI", use: "Daily AI news — 5 min read" },
    { name: "Ahead of AI (Sebastian Raschka)", use: "Deep technical analysis" },
    { name: "The Neuron", use: "AI business + tech news" },
    { name: "Latent Space Podcast", use: "In-depth AI engineering discussions" },
  ],
  tools: [
    { name: "VS Code + Pylance + Jupyter", use: "Primary IDE" },
    { name: "Google Colab (free GPU)", use: "Training models when you don't have a GPU" },
    { name: "W&B (Weights & Biases)", use: "Experiment tracking — free tier" },
    { name: "LangSmith", use: "LLM/agent observability — free tier" },
    { name: "Ollama", use: "Run LLMs locally — free" },
    { name: "Docker Desktop", use: "Containerization — free" },
    { name: "Postman/HTTPie", use: "API testing" },
    { name: "NeetCode.io", use: "DSA roadmap and problems — free" },
  ],
};

// ─── DAILY SCHEDULE TEMPLATE ───────────────────────────────────────────────
const dailySchedule = {
  total: "7–8 hours/day (6 days/week, 1 rest day)",
  blocks: [
    { time: "Morning (1h)", activity: "DSA — 1 LeetCode problem", note: "Do this FIRST when your brain is freshest" },
    { time: "Morning (3h)", activity: "Main curriculum — theory + tutorials", note: "Watch, read, take notes" },
    { time: "Afternoon (3h)", activity: "Main curriculum — hands-on coding", note: "Build, experiment, break things" },
    { time: "Evening (30min)", activity: "Review: Anki cards, notes, reflection", note: "Spaced repetition for retention" },
    { time: "Evening (30min)", activity: "Community: Twitter, Discord, newsletter", note: "Stay connected, stay motivated" },
  ],
  weeklyCheckpoint: "Every Sunday: review week's progress, plan next week, update portfolio",
};

// ─── INTERVIEW QUESTION BANK (Top questions per category) ──────────────────
const interviewBank = [
  {
    category: "ML Fundamentals",
    questions: [
      "Explain bias-variance tradeoff. How do you diagnose each?",
      "What's the difference between L1 and L2 regularization? When use each?",
      "Explain precision, recall, F1. When is each metric most important?",
      "How does cross-validation work? Why k-fold over simple train/test?",
      "What causes overfitting? Name 5 techniques to prevent it.",
      "Explain gradient descent. What's the role of learning rate?",
      "Random Forest vs XGBoost — when would you choose each?",
      "How do you handle imbalanced datasets? Name 3 approaches.",
      "What's feature importance? How do you calculate it?",
      "Explain the curse of dimensionality. How does PCA help?",
    ],
  },
  {
    category: "Deep Learning",
    questions: [
      "Explain backpropagation step by step.",
      "What's the vanishing gradient problem? How do residual connections help?",
      "Why use batch normalization? Where does it go in the network?",
      "ReLU vs sigmoid vs tanh — trade-offs of each activation function?",
      "What's dropout and why does it work?",
      "Explain the attention mechanism. Why is it better than RNNs?",
      "What are the key components of the Transformer architecture?",
      "Transfer learning: when to freeze layers vs fine-tune all?",
      "Adam vs SGD — when would you use each optimizer?",
      "What's the difference between encoder, decoder, and encoder-decoder models?",
    ],
  },
  {
    category: "LLMs & Prompt Engineering",
    questions: [
      "How does GPT generate text? Explain autoregressive generation.",
      "What's the difference between GPT (decoder) and BERT (encoder)?",
      "Explain tokenization. What's BPE? Why does token count matter?",
      "What are temperature, top_p, top_k? How do they affect generation?",
      "Chain-of-thought prompting — what is it and why does it work?",
      "Function calling / tool use — how does it work technically?",
      "What causes hallucinations? How do you mitigate them?",
      "Fine-tuning vs RAG vs prompting — decision framework?",
      "What's RLHF? Why did it make ChatGPT better than base GPT?",
      "Explain context window limitations. How do you handle long documents?",
    ],
  },
  {
    category: "RAG Systems",
    questions: [
      "Walk me through a RAG pipeline end-to-end.",
      "What chunking strategies exist? How do you choose chunk size?",
      "Hybrid search: why combine vector + keyword search?",
      "What's re-ranking and why is it important?",
      "How do you evaluate RAG quality? What metrics do you use?",
      "Your RAG returns irrelevant results — how do you debug?",
      "How do you handle multi-turn conversations in RAG?",
      "What's the difference between ChromaDB, Pinecone, and Weaviate?",
      "How would you scale RAG to millions of documents?",
      "What's GraphRAG? When would you use it over standard RAG?",
    ],
  },
  {
    category: "AI Agents",
    questions: [
      "What is the ReAct pattern? Walk through an example.",
      "How do you handle agent errors and hallucinated tool calls?",
      "LangGraph vs CrewAI — when would you choose each?",
      "How do you implement human-in-the-loop for critical agent actions?",
      "What memory types do agents need? Short-term vs long-term?",
      "How do you prevent agents from going into infinite loops?",
      "What's MCP (Model Context Protocol)? Why does it matter?",
      "How do you test non-deterministic agent behavior?",
      "Design a multi-agent system for customer support.",
      "How do you optimize agent costs in production?",
    ],
  },
  {
    category: "MLOps & Production",
    questions: [
      "Walk me through taking a model from Jupyter notebook to production.",
      "What's model drift? How do you detect and handle it?",
      "How do you version ML models and datasets?",
      "Explain your CI/CD pipeline for an ML project.",
      "How do you monitor LLM-powered applications in production?",
      "Docker: why containerize ML models? Multi-stage builds?",
      "How do you handle model rollbacks if a new version fails?",
      "What's the difference between batch and real-time inference?",
      "How do you optimize LLM inference latency?",
      "What tools do you use for experiment tracking? Why?",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// REACT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const monthColors = { 1: "#00E5FF", 2: "#B388FF", 3: "#69FF47", 4: "#FFD740" };
const monthNames = { 1: "Python + ML Foundations", 2: "Deep Learning + LLMs + RAG", 3: "Agents + Fine-Tuning + MLOps", 4: "System Design + Portfolio + Get Hired" };
const allMonths = { 1: month1Data, 2: month2Data, 3: month3Data, 4: month4Data };

export default function MasterCurriculum() {
  const [activeTab, setActiveTab] = useState("overview"); // overview, month, dsa, howmuch, portfolio, interview, resources
  const [activeMonth, setActiveMonth] = useState(1);
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);

  // ── Overview Tab ─────────────────────────────────────────────────────────
  const renderOverview = () => (
    <div>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "40px 20px", background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)", borderRadius: 16, marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, color: "#fff", margin: 0 }}>4 Months to AI Engineer</h1>
        <p style={{ color: "#aaa", fontSize: 16, margin: "8px 0" }}>$130K–$250K+ | 720 hours | 120 days | 6–8h/day</p>
        <p style={{ color: "#666", fontSize: 13 }}>Built for Dart/Flutter developers transitioning to AI</p>
      </div>

      {/* Career Paths */}
      <h2 style={{ color: "#fff", marginBottom: 12 }}>Target Roles & Salaries (2026)</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {careerPaths.map((c, i) => (
          <div key={i} style={{ background: "#111", border: "1px solid #333", borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{c.role}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#00E5FF", margin: "4px 0" }}>{c.salary}</div>
            <div style={{ fontSize: 12, color: c.demand === "Extremely High" ? "#69FF47" : "#FFD740" }}>Demand: {c.demand}</div>
            <p style={{ fontSize: 13, color: "#aaa", margin: "8px 0" }}>{c.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
              {c.keySkills.map((s, j) => (
                <span key={j} style={{ background: "#222", color: "#ccc", padding: "2px 8px", borderRadius: 8, fontSize: 11 }}>{s}</span>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#B388FF", marginTop: 8, fontStyle: "italic" }}>{c.yourEdge}</p>
          </div>
        ))}
      </div>

      {/* Month Overview */}
      <h2 style={{ color: "#fff", marginBottom: 12 }}>4-Month Roadmap</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[1, 2, 3, 4].map(m => (
          <div key={m} onClick={() => { setActiveTab("month"); setActiveMonth(m); }}
            style={{ background: "#111", border: `2px solid ${monthColors[m]}`, borderRadius: 12, padding: 16, cursor: "pointer" }}>
            <div style={{ color: monthColors[m], fontSize: 14, fontWeight: 700 }}>Month {m} (Days {(m-1)*30+1}–{m*30})</div>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginTop: 4 }}>{monthNames[m]}</div>
            <div style={{ color: "#888", fontSize: 12, marginTop: 4 }}>~180 hours | 6h/day + 1h DSA</div>
          </div>
        ))}
      </div>

      {/* Daily Schedule */}
      <h2 style={{ color: "#fff", marginBottom: 12 }}>Daily Schedule</h2>
      <div style={{ background: "#111", borderRadius: 12, padding: 16, marginBottom: 24 }}>
        {dailySchedule.blocks.map((b, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #222" }}>
            <div>
              <span style={{ color: "#00E5FF", fontWeight: 600, fontSize: 13 }}>{b.time}</span>
              <span style={{ color: "#fff", marginLeft: 12, fontSize: 13 }}>{b.activity}</span>
            </div>
            <span style={{ color: "#666", fontSize: 12 }}>{b.note}</span>
          </div>
        ))}
        <p style={{ color: "#FFD740", fontSize: 12, marginTop: 8 }}>{dailySchedule.weeklyCheckpoint}</p>
      </div>

      {/* Quick Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {[
          { label: "Total Hours", value: "720+", color: "#00E5FF" },
          { label: "DSA Problems", value: "120", color: "#B388FF" },
          { label: "Portfolio Projects", value: "5", color: "#69FF47" },
          { label: "Applications", value: "150+", color: "#FFD740" },
        ].map((s, i) => (
          <div key={i} style={{ background: "#111", borderRadius: 12, padding: 16, textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#888" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── Month Detail Tab ─────────────────────────────────────────────────────
  const renderMonth = () => {
    const data = allMonths[activeMonth];
    const color = monthColors[activeMonth];
    return (
      <div>
        {/* Month Selector */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {[1, 2, 3, 4].map(m => (
            <button key={m} onClick={() => { setActiveMonth(m); setExpandedPhase(null); setExpandedTopic(null); }}
              style={{ flex: 1, padding: "10px", background: activeMonth === m ? monthColors[m] : "#111",
                color: activeMonth === m ? "#000" : "#888", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer", fontSize: 13 }}>
              Month {m}
            </button>
          ))}
        </div>

        <h2 style={{ color, margin: "0 0 4px" }}>Month {activeMonth}: {monthNames[activeMonth]}</h2>
        <p style={{ color: "#888", fontSize: 13, marginBottom: 16 }}>Days {(activeMonth-1)*30+1}–{activeMonth*30} | ~180 hours</p>

        {/* Phases */}
        {data.map((phase, pi) => (
          <div key={pi} style={{ marginBottom: 12 }}>
            <div onClick={() => setExpandedPhase(expandedPhase === pi ? null : pi)}
              style={{ background: "#111", border: `1px solid ${expandedPhase === pi ? color : "#333"}`, borderRadius: 12, padding: 16, cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ color, fontWeight: 700, fontSize: 14 }}>{phase.emoji} {phase.phase}: {phase.title}</span>
                  <span style={{ color: "#666", fontSize: 12, marginLeft: 8 }}>{phase.duration} | {phase.hours}</span>
                </div>
                <span style={{ color: "#666" }}>{expandedPhase === pi ? "▼" : "▶"}</span>
              </div>
              {phase.note && <p style={{ color: "#888", fontSize: 12, margin: "6px 0 0", fontStyle: "italic" }}>{phase.note}</p>}
            </div>

            {expandedPhase === pi && (
              <div style={{ marginTop: 8, marginLeft: 12 }}>
                {phase.topics.map((topic, ti) => (
                  <div key={ti} style={{ marginBottom: 8 }}>
                    <div onClick={() => setExpandedTopic(expandedTopic === `${pi}-${ti}` ? null : `${pi}-${ti}`)}
                      style={{ background: "#0a0a0a", border: "1px solid #222", borderRadius: 8, padding: 12, cursor: "pointer" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>{topic.day} — {topic.title} ({topic.hours})</span>
                        <span style={{ color: "#666", fontSize: 12 }}>{expandedTopic === `${pi}-${ti}` ? "▼" : "▶"}</span>
                      </div>
                    </div>

                    {expandedTopic === `${pi}-${ti}` && (
                      <div style={{ background: "#050505", borderRadius: 8, padding: 12, marginTop: 4 }}>
                        {topic.subtopics.map((st, si) => (
                          <div key={si} style={{ padding: "6px 0", borderBottom: "1px solid #111", display: "flex", justifyContent: "space-between" }}>
                            <div style={{ flex: 1 }}>
                              <span style={{ color: "#ddd", fontSize: 13 }}>{st.name}</span>
                              {st.note && <span style={{ color: "#666", fontSize: 11, display: "block", marginTop: 2 }}>{st.note}</span>}
                            </div>
                            <span style={{ color, fontSize: 12, minWidth: 50, textAlign: "right" }}>{st.time}</span>
                          </div>
                        ))}
                        <div style={{ marginTop: 8, padding: "8px", background: "#111", borderRadius: 6 }}>
                          <div style={{ color: "#888", fontSize: 11 }}>Resource: <span style={{ color: "#B388FF" }}>{topic.resource}</span></div>
                          <div style={{ color: "#888", fontSize: 11, marginTop: 4 }}>Milestone: <span style={{ color: "#69FF47" }}>{topic.milestone}</span></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // ── How Much Tab ─────────────────────────────────────────────────────────
  const renderHowMuch = () => (
    <div>
      <h2 style={{ color: "#fff", marginBottom: 4 }}>How Much Is Enough?</h2>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 16 }}>Learning never ends, but job-readiness has a finish line. These are your EXACT targets.</p>
      {howMuchIsEnough.map((h, i) => (
        <div key={i} style={{ background: "#111", borderRadius: 12, padding: 16, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{h.category}</span>
            <span style={{ color: "#00E5FF", fontWeight: 700, fontSize: 15 }}>{h.exact}</span>
          </div>
          <div style={{ fontSize: 12, color: "#aaa", marginBottom: 4 }}>Daily: {h.daily}</div>
          <div style={{ fontSize: 12, color: "#aaa", marginBottom: 4 }}>How: {h.breakdown}</div>
          <div style={{ fontSize: 12, color: "#69FF47", marginBottom: 4 }}>Done when: {h.done}</div>
          <div style={{ fontSize: 12, color: "#FF5252" }}>Overkill: {h.overkill}</div>
        </div>
      ))}
    </div>
  );

  // ── DSA Tab ──────────────────────────────────────────────────────────────
  const renderDSA = () => (
    <div>
      <h2 style={{ color: "#fff", marginBottom: 4 }}>DSA Parallel Track</h2>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 4 }}>{dsaTrack.totalProblems} problems | {dsaTrack.dailyTime}</p>
      <p style={{ color: "#B388FF", fontSize: 12, marginBottom: 16, fontStyle: "italic" }}>{dsaTrack.strategy}</p>
      {dsaTrack.months.map((m, mi) => (
        <div key={mi} style={{ background: "#111", borderRadius: 12, padding: 16, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: monthColors[mi + 1], fontWeight: 700, fontSize: 14 }}>{m.month}: {m.focus}</span>
            <span style={{ color: "#fff", fontWeight: 700 }}>{m.problems} problems</span>
          </div>
          {m.patterns.map((p, pi) => (
            <div key={pi} style={{ padding: "6px 0", borderBottom: "1px solid #222" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#ddd", fontSize: 13 }}>{p.name}</span>
                <span style={{ color: "#888", fontSize: 12 }}>{p.count} problems</span>
              </div>
              <span style={{ color: "#666", fontSize: 11 }}>{p.examples}</span>
            </div>
          ))}
        </div>
      ))}
      <div style={{ background: "#111", borderRadius: 8, padding: 12, marginTop: 8 }}>
        <span style={{ color: "#888", fontSize: 12 }}>Resource: </span>
        <span style={{ color: "#B388FF", fontSize: 12 }}>{dsaTrack.resource}</span>
      </div>
    </div>
  );

  // ── Portfolio Tab ────────────────────────────────────────────────────────
  const renderPortfolio = () => (
    <div>
      <h2 style={{ color: "#fff", marginBottom: 4 }}>Portfolio Projects (5 Total)</h2>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 16 }}>5 polished projects, all deployed, all on GitHub with live demos.</p>
      {portfolioProjects.map((p, i) => (
        <div key={i} style={{ background: "#111", border: "1px solid #333", borderRadius: 12, padding: 16, marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>#{p.num} {p.title}</span>
            <span style={{ color: "#888", fontSize: 12 }}>{p.builtDuring}</span>
          </div>
          <div style={{ color: "#B388FF", fontSize: 12, marginBottom: 8 }}>{p.tech}</div>
          <p style={{ color: "#aaa", fontSize: 13, margin: "0 0 8px" }}>{p.description}</p>
          <div style={{ marginBottom: 6, fontSize: 12, color: "#69FF47" }}>Must have:</div>
          {p.mustHave.map((m, j) => (
            <div key={j} style={{ color: "#ccc", fontSize: 12, paddingLeft: 12 }}>• {m}</div>
          ))}
          <div style={{ marginTop: 8, color: "#FFD740", fontSize: 12 }}>Deploy on: {p.deployedOn}</div>
        </div>
      ))}
    </div>
  );

  // ── Interview Tab ────────────────────────────────────────────────────────
  const renderInterview = () => (
    <div>
      <h2 style={{ color: "#fff", marginBottom: 4 }}>Interview Question Bank</h2>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 16 }}>Top questions per category. Practice until you can answer each in 2 minutes.</p>
      {interviewBank.map((cat, ci) => (
        <div key={ci} style={{ background: "#111", borderRadius: 12, padding: 16, marginBottom: 8 }}>
          <div style={{ color: "#00E5FF", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{cat.category} ({cat.questions.length} questions)</div>
          {cat.questions.map((q, qi) => (
            <div key={qi} style={{ color: "#ccc", fontSize: 13, padding: "4px 0", borderBottom: "1px solid #1a1a1a" }}>
              {qi + 1}. {q}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  // ── Resources Tab ────────────────────────────────────────────────────────
  const renderResources = () => (
    <div>
      <h2 style={{ color: "#fff", marginBottom: 16 }}>Resources & Tools</h2>
      {Object.entries(resources).map(([category, items]) => (
        <div key={category} style={{ marginBottom: 16 }}>
          <h3 style={{ color: "#00E5FF", fontSize: 14, textTransform: "capitalize", marginBottom: 8 }}>{category}</h3>
          {items.map((item, i) => (
            <div key={i} style={{ background: "#111", borderRadius: 8, padding: 10, marginBottom: 4, display: "flex", justifyContent: "space-between" }}>
              <div>
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{item.name}</span>
                <span style={{ color: "#888", fontSize: 12, marginLeft: 8 }}>{item.use}</span>
              </div>
              {item.month && <span style={{ color: "#666", fontSize: 11 }}>Month {item.month}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  // ── Main Layout ──────────────────────────────────────────────────────────
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "month", label: "Curriculum" },
    { id: "dsa", label: "DSA Track" },
    { id: "howmuch", label: "How Much?" },
    { id: "portfolio", label: "Portfolio" },
    { id: "interview", label: "Interview" },
    { id: "resources", label: "Resources" },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20, background: "#000", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Tab Navigation */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            style={{ padding: "8px 16px", background: activeTab === t.id ? "#00E5FF" : "#111",
              color: activeTab === t.id ? "#000" : "#888", border: "none", borderRadius: 8,
              fontWeight: 600, cursor: "pointer", fontSize: 13, whiteSpace: "nowrap" }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && renderOverview()}
      {activeTab === "month" && renderMonth()}
      {activeTab === "dsa" && renderDSA()}
      {activeTab === "howmuch" && renderHowMuch()}
      {activeTab === "portfolio" && renderPortfolio()}
      {activeTab === "interview" && renderInterview()}
      {activeTab === "resources" && renderResources()}

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "24px 0", marginTop: 24, borderTop: "1px solid #222" }}>
        <p style={{ color: "#666", fontSize: 12 }}>Master AI Curriculum — 4 Months to AI Engineer</p>
        <p style={{ color: "#444", fontSize: 11 }}>Built with market research from 2026 job data. Updated March 2026.</p>
      </div>
    </div>
  );
}
