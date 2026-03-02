import { useState } from "react";

// ─── MONTH 1 DATA ───────────────────────────────────────────────────────────
const dartVsPython = [
  { dart: "final String name = 'John';", python: "name: str = 'John'  # or just name = 'John'" },
  { dart: "List<int> nums = [1, 2, 3];", python: "nums: list[int] = [1, 2, 3]" },
  { dart: "Map<String, int> m = {};", python: "m: dict[str, int] = {}" },
  { dart: "void greet() { print('hi'); }", python: "def greet() -> None:\n    print('hi')" },
  { dart: "nums.where((n) => n > 2)", python: "[n for n in nums if n > 2]" },
  { dart: "Future<String> fetch()", python: "async def fetch() -> str:" },
];

const month1Phases = [
  {
    phase: "Phase 1", title: "Python Syntax for Dart Devs", duration: "Days 1–4", hours: "12h", emoji: "⚡",
    note: "You already know OOP, types, and async. This phase is just translation.",
    topics: [
      {
        day: "Day 1", hours: "3h", title: "Setup + Core Syntax",
        subtopics: [
          { name: "Install Python 3.11+, VS Code, Pylance extension", time: "20min", note: null },
          { name: "Variables, types, type hints (int, str, float, bool)", time: "25min", note: "Same as Dart but no explicit declaration needed" },
          { name: "String methods, f-strings", time: "20min", note: "f'Hello {name}' == 'Hello $name' in Dart" },
          { name: "if/elif/else, comparison operators", time: "20min", note: "Identical to Dart, just elif instead of else if" },
          { name: "for loops, while loops, range()", time: "25min", note: "for i in range(10) == for (int i=0; i<10; i++)" },
          { name: "Functions: def, return, default args, *args, **kwargs", time: "30min", note: "**kwargs == named params in Dart" },
          { name: "Practice: FizzBuzz + basic calculator", time: "40min", note: null },
        ],
        resource: "Kaggle Learn Python Course (free)",
        milestone: "Write a Python script that feels familiar",
      },
      {
        day: "Day 2", hours: "3h", title: "Data Structures",
        subtopics: [
          { name: "Lists — append, remove, slice, sort, len", time: "25min", note: "Same as Dart List<T>" },
          { name: "Tuples — immutable lists, unpacking", time: "15min", note: "Like Dart records but positional" },
          { name: "Dicts — get, update, keys(), values(), items()", time: "30min", note: "Same as Map<K,V> in Dart" },
          { name: "Sets — union, intersection, difference", time: "20min", note: "Same as Dart Set<T>" },
          { name: "List comprehensions [x for x in lst if cond]", time: "35min", note: "More powerful than Dart's .where().map()" },
          { name: "Dict comprehensions {k: v for k, v in d.items()}", time: "25min", note: "No direct Dart equivalent — very Python-specific" },
          { name: "Practice: word frequency counter, filter & transform lists", time: "30min", note: null },
        ],
        resource: "Python docs — Built-in Types",
        milestone: "Manipulate any list or dict with a one-liner",
      },
      {
        day: "Day 3", hours: "3h", title: "OOP, Modules & File I/O",
        subtopics: [
          { name: "Classes: __init__, self, methods, inheritance", time: "35min", note: "class syntax is similar, self == this" },
          { name: "Dunder methods: __str__, __repr__, __len__, __eq__", time: "25min", note: "Like overriding toString() in Dart" },
          { name: "Dataclasses — @dataclass decorator", time: "20min", note: "Like Dart's copyWith pattern, but auto-generated" },
          { name: "Modules: import, from X import Y, aliasing (as)", time: "20min", note: "Same as Dart imports" },
          { name: "Reading/writing files (open, with statement, csv module)", time: "30min", note: "More ergonomic than Dart's dart:io" },
          { name: "JSON: json.dumps(), json.loads()", time: "15min", note: "Same as jsonEncode/jsonDecode in Dart" },
          { name: "Practice: Build a Student class + save/load from JSON file", time: "35min", note: null },
        ],
        resource: "Real Python — Python Classes OOP",
        milestone: "Build a class-based mini-app with file persistence",
      },
      {
        day: "Day 4", hours: "3h", title: "Python-Specific Power Features",
        subtopics: [
          { name: "Lambda functions: lambda x: x * 2", time: "20min", note: "Same as Dart arrow functions (x) => x * 2" },
          { name: "map(), filter(), zip(), enumerate(), sorted()", time: "35min", note: "More concise than Dart's functional methods" },
          { name: "Generators & yield keyword", time: "30min", note: "Like Dart Streams but synchronous" },
          { name: "Decorators — @property, writing your own", time: "30min", note: "No Dart equivalent — unique Python feature" },
          { name: "Exception handling: try/except/finally", time: "25min", note: "Same as try/catch in Dart" },
          { name: "Virtual environments: python -m venv, pip install", time: "15min", note: "Like pub.dev but for Python" },
          { name: "Practice: Write a retry decorator + generator-based fibonacci", time: "25min", note: null },
        ],
        resource: "Real Python — Decorators · Python Docs — Generators",
        milestone: "Understand decorators & generators — everywhere in AI libs",
      },
    ],
  },
  {
    phase: "Phase 2", title: "Async, Types & Best Practices", duration: "Days 5–7", hours: "9h", emoji: "🔮",
    note: "Bridges your Dart async expertise into Python. More different than you'd expect.",
    topics: [
      {
        day: "Day 5", hours: "3h", title: "Async Python",
        subtopics: [
          { name: "asyncio basics: async def, await, event loop", time: "30min", note: "Dart Future == Python coroutine. await works the same." },
          { name: "asyncio.gather() — run tasks concurrently", time: "25min", note: "Like Future.wait() in Dart" },
          { name: "async for, async with (async context managers)", time: "25min", note: "No Dart equivalent — very useful for AI streaming" },
          { name: "aiohttp — async HTTP requests", time: "30min", note: "Like Dart's http or dio package" },
          { name: "asyncio.Queue — async producer-consumer", time: "20min", note: "Like Dart StreamController" },
          { name: "Practice: Async REST caller that fetches 10 URLs concurrently", time: "30min", note: null },
        ],
        resource: "Python asyncio docs · Real Python — Async IO",
        milestone: "Understand Python async — critical for AI API calls & streaming",
      },
      {
        day: "Day 6", hours: "3h", title: "Type System & Modern Python",
        subtopics: [
          { name: "typing module: Optional, Union, List, Dict, Any", time: "25min", note: "More verbose than Dart's built-in types" },
          { name: "TypeVar, Generic classes", time: "20min", note: "Same as Dart generics <T>" },
          { name: "Pydantic — data validation with type hints", time: "40min", note: "Like freezed in Dart but for Python. Used in FastAPI." },
          { name: "Python 3.10+ features: match/case, | union types", time: "20min", note: "match/case == Dart switch expressions" },
          { name: "Protocol (structural typing) — like interfaces", time: "20min", note: "Like Dart abstract classes / implements" },
          { name: "Practice: Build a Pydantic model for a User API response", time: "35min", note: null },
        ],
        resource: "Pydantic docs · mypy docs",
        milestone: "Write type-safe Python that passes mypy checks",
      },
      {
        day: "Day 7", hours: "3h", title: "Pythonic Patterns & Code Quality",
        subtopics: [
          { name: "Context managers: with statement, __enter__ / __exit__", time: "25min", note: "No Dart equivalent" },
          { name: "SOLID in Python, dependency injection patterns", time: "25min", note: "Same principles as in Dart/Riverpod" },
          { name: "Logging module (not print())", time: "20min", note: "Like Dart's developer.log" },
          { name: "Testing: pytest, fixtures, parametrize decorator", time: "35min", note: "Like flutter_test but simpler to set up" },
          { name: "Code formatting: black, isort, flake8", time: "15min", note: "Like dart format + dart analyze" },
          { name: "Practice: Write pytest tests for your Day 3 Student class", time: "40min", note: null },
        ],
        resource: "pytest docs · Real Python — Clean Code in Python",
        milestone: "Professional-grade Python with tests and auto-formatting",
      },
    ],
  },
  {
    phase: "Phase 3", title: "NumPy & Pandas", duration: "Days 8–11", hours: "12h", emoji: "📊",
    note: "The two most important libraries in AI. Almost every AI codebase uses both daily.",
    topics: [
      {
        day: "Days 8–9", hours: "6h", title: "NumPy Deep Dive",
        subtopics: [
          { name: "Arrays: np.array(), shape, dtype, ndim, reshape()", time: "35min", note: "Like typed Float64List but multi-dimensional" },
          { name: "Array creation: zeros, ones, arange, linspace, random", time: "25min", note: null },
          { name: "Indexing & slicing: arr[1:3], arr[::2], arr[arr > 5]", time: "35min", note: "More powerful than Dart List slicing" },
          { name: "Broadcasting — the core concept of NumPy math", time: "40min", note: "No Dart equivalent — must truly understand this" },
          { name: "Vectorized operations (avoid for loops with arrays)", time: "30min", note: "Like SIMD but automatic" },
          { name: "Matrix ops: dot(), matmul (@), transpose, inverse", time: "35min", note: "Foundation of all neural networks" },
          { name: "Aggregations: sum, mean, std, min, max along axes", time: "25min", note: null },
          { name: "np.where(), np.concatenate(), np.stack(), np.split()", time: "25min", note: null },
          { name: "Practice: Implement linear regression math with pure NumPy", time: "50min", note: null },
        ],
        resource: "NumPy official docs — Quickstart + Broadcasting guide",
        milestone: "Understand broadcasting — if you get this, neural network math clicks",
      },
      {
        day: "Days 10–11", hours: "6h", title: "Pandas — Data Wrangling",
        subtopics: [
          { name: "Series and DataFrame — the two core data structures", time: "30min", note: "Like a typed spreadsheet in code" },
          { name: "Loading: read_csv(), read_json(), read_excel()", time: "20min", note: null },
          { name: "Exploring: head(), info(), describe(), shape, dtypes", time: "20min", note: null },
          { name: "Selecting: df['col'], loc[], iloc[]", time: "35min", note: "loc = label-based, iloc = index-based" },
          { name: "Filtering: boolean indexing, query(), isin()", time: "30min", note: "Like Dart's .where() but on steroids" },
          { name: "Cleaning: dropna(), fillna(), drop_duplicates(), astype()", time: "30min", note: "Real datasets are messy — this is 60% of ML work" },
          { name: "GroupBy + aggregations: groupby().agg(), pivot_table()", time: "35min", note: "Like SQL GROUP BY in Python" },
          { name: "Merging: merge(), concat(), join()", time: "25min", note: "Like SQL JOINs" },
          { name: "Apply, map for transformations", time: "25min", note: "Like Dart .map() but on DataFrames" },
          { name: "Practice: Clean & analyze Titanic dataset from Kaggle", time: "60min", note: null },
        ],
        resource: "Kaggle Learn — Pandas course (free) · Pandas docs",
        milestone: "Take a messy CSV and produce clean, insights-ready data",
      },
    ],
  },
  {
    phase: "Phase 4", title: "Visualization & Jupyter", duration: "Days 12–13", hours: "6h", emoji: "📈",
    note: "AI notebooks are your new IDE. Learn to visualize data to understand it.",
    topics: [
      {
        day: "Day 12", hours: "3h", title: "Matplotlib & Seaborn",
        subtopics: [
          { name: "Matplotlib basics: plot, scatter, bar, hist, subplots", time: "35min", note: "Like fl_chart but in Python" },
          { name: "Customizing: titles, labels, legends, colors, figsize", time: "20min", note: null },
          { name: "Seaborn: heatmap(), pairplot(), boxplot(), violinplot()", time: "35min", note: "Higher-level, more beautiful by default" },
          { name: "Correlation heatmaps — essential for feature analysis", time: "20min", note: null },
          { name: "Practice: Full EDA on Titanic — 5+ charts telling a story", time: "50min", note: null },
        ],
        resource: "Matplotlib docs · Seaborn gallery",
        milestone: "Full EDA notebook with 5+ charts telling a data story",
      },
      {
        day: "Day 13", hours: "3h", title: "Jupyter Mastery",
        subtopics: [
          { name: "Jupyter Lab setup, keyboard shortcuts, cell modes", time: "20min", note: "Your new main IDE for AI/data work" },
          { name: "Magic commands: %timeit, %matplotlib inline, %%bash", time: "20min", note: null },
          { name: "Google Colab — free GPU for ML training", time: "25min", note: "Critical — you'll use Colab for Month 2 deep learning" },
          { name: "Structuring a professional ML notebook", time: "20min", note: null },
          { name: "Practice: Port all previous work into a clean Jupyter notebook", time: "60min", note: null },
        ],
        resource: "Jupyter docs · Google Colab quickstart",
        milestone: "Clean shareable Jupyter notebook = first portfolio piece",
      },
    ],
  },
  {
    phase: "Phase 5", title: "Capstone Project", duration: "Day 14", hours: "4h", emoji: "🎯",
    note: "Ship something real. This goes on GitHub today.",
    topics: [
      {
        day: "Day 14", hours: "4h", title: "End-to-End Data Project",
        subtopics: [
          { name: "Pick a Kaggle dataset you find interesting", time: "15min", note: null },
          { name: "EDA: 5+ charts, written observations in markdown cells", time: "60min", note: null },
          { name: "Data cleaning pipeline using Pandas", time: "45min", note: null },
          { name: "3 NumPy-powered statistical calculations", time: "30min", note: null },
          { name: "Key insights summary (pretend reporting to a team)", time: "30min", note: null },
          { name: "Push to GitHub with a proper README", time: "20min", note: null },
        ],
        resource: "Kaggle Datasets · GitHub",
        milestone: "GitHub repo live — first AI portfolio piece ✓",
      },
    ],
  },
];

// ─── MONTHS 2–4 DATA ────────────────────────────────────────────────────────
const months234 = [
  {
    id: 2, title: "Machine Learning Core", duration: "Month 2 · Days 15–44",
    totalHours: "~90h", color: "#B388FF", emoji: "🧠",
    tagline: "Understand HOW machines learn. Not just how to call sklearn.",
    phases: [
      {
        phase: "Phase 1", title: "Math for ML — Applied, Not Academic",
        duration: "Days 15–18", hours: "12h", color: "#B388FF", emoji: "📐",
        note: "You don't need to derive proofs. You need intuition. 4 days max.",
        topics: [
          {
            day: "Day 15", hours: "3h", title: "Linear Algebra That Actually Matters",
            subtopics: [
              { name: "Vectors: dot product, cosine similarity", time: "30min", note: "Cosine similarity powers embedding search in LLMs" },
              { name: "Matrices: multiplication, why order matters (AB ≠ BA)", time: "35min", note: "Every neural network layer is a matrix multiply" },
              { name: "Transpose, inverse — when and why used in ML", time: "25min", note: null },
              { name: "Eigenvalues/eigenvectors — intuition only (PCA uses this)", time: "25min", note: "Watch 3Blue1Brown video, don't derive by hand" },
              { name: "NumPy implementation of all the above", time: "25min", note: null },
              { name: "Practice: Implement cosine similarity from scratch", time: "20min", note: null },
            ],
            resource: "3Blue1Brown — Essence of Linear Algebra (ch.1–9)",
            milestone: "Explain what a matrix multiply means geometrically",
          },
          {
            day: "Day 16", hours: "3h", title: "Calculus — Just Gradients",
            subtopics: [
              { name: "Derivatives: rate of change, slope of a curve", time: "25min", note: "You only need this one concept from calculus" },
              { name: "Partial derivatives: how does f change when only x changes?", time: "25min", note: "Critical for understanding backpropagation" },
              { name: "Gradient: vector of all partial derivatives", time: "30min", note: "The gradient tells a net which direction to improve" },
              { name: "Chain rule: derivative of nested functions", time: "30min", note: "Backprop is just chain rule applied recursively" },
              { name: "Gradient descent visualized: ball rolling downhill analogy", time: "20min", note: null },
              { name: "Practice: Implement gradient descent on y = x² from scratch", time: "30min", note: null },
            ],
            resource: "3Blue1Brown — What is backpropagation really doing?",
            milestone: "Implement gradient descent in 15 lines of NumPy",
          },
          {
            day: "Day 17", hours: "3h", title: "Probability & Statistics",
            subtopics: [
              { name: "Probability basics: events, conditional probability, Bayes", time: "30min", note: "Bayes theorem underpins naive Bayes classifiers" },
              { name: "Distributions: normal, Bernoulli, uniform — when each applies", time: "25min", note: null },
              { name: "Mean, variance, standard deviation, covariance", time: "20min", note: "These show up in every single ML evaluation" },
              { name: "Central Limit Theorem intuition", time: "20min", note: null },
              { name: "Maximum Likelihood Estimation (MLE) concept", time: "25min", note: "This is what 'training' a model actually does" },
              { name: "Practice: Calculate statistics on a dataset with NumPy", time: "40min", note: null },
            ],
            resource: "StatQuest with Josh Starmer — Statistics Fundamentals playlist",
            milestone: "Explain what MLE means without looking it up",
          },
          {
            day: "Day 18", hours: "3h", title: "Information Theory & Loss Functions",
            subtopics: [
              { name: "Entropy — measure of uncertainty/randomness", time: "25min", note: "Used in decision trees (information gain)" },
              { name: "Cross-entropy loss — the loss function for classification", time: "35min", note: "Most important loss function you'll use" },
              { name: "MSE (Mean Squared Error) — regression loss", time: "20min", note: null },
              { name: "KL Divergence — difference between two distributions", time: "25min", note: "Used in VAEs and RLHF" },
              { name: "Why loss functions matter: connecting math to training", time: "20min", note: null },
              { name: "Practice: Implement cross-entropy and MSE from scratch", time: "35min", note: null },
            ],
            resource: "StatQuest — Cross Entropy · Aurélien Géron book ch.4",
            milestone: "Implement 3 loss functions from scratch in NumPy",
          },
        ],
      },
      {
        phase: "Phase 2", title: "Classical ML with Scikit-Learn",
        duration: "Days 19–26", hours: "24h", color: "#9C27B0", emoji: "⚙️",
        note: "Ship a Kaggle submission by end of this phase. Real models, real data.",
        topics: [
          {
            day: "Days 19–20", hours: "6h", title: "Supervised Learning Algorithms",
            subtopics: [
              { name: "Linear Regression: fit, predict, coefficients, R² score", time: "45min", note: null },
              { name: "Logistic Regression: sigmoid, binary classification", time: "45min", note: "Despite name, it's for classification not regression" },
              { name: "Decision Trees: splitting, depth, overfitting vs underfitting", time: "40min", note: null },
              { name: "Random Forest: bagging, feature importance, OOB score", time: "40min", note: "Workhorse algorithm — great first model always" },
              { name: "XGBoost / LightGBM — state of art for tabular data", time: "50min", note: "Most Kaggle winners on tabular data use this" },
              { name: "K-Nearest Neighbors: distance metrics, choosing K", time: "25min", note: null },
              { name: "Practice: Train all models on same dataset, compare results", time: "60min", note: null },
            ],
            resource: "Hands-On ML book (Géron) ch.3–7 · Kaggle Intro to ML",
            milestone: "Compare 5 different models on one dataset in a single notebook",
          },
          {
            day: "Days 21–22", hours: "6h", title: "Model Evaluation & Validation",
            subtopics: [
              { name: "Train/validation/test split — why 3 splits, not 2", time: "30min", note: "Leaking test set = the biggest mistake beginners make" },
              { name: "Cross-validation: K-Fold, Stratified K-Fold", time: "35min", note: null },
              { name: "Classification metrics: precision, recall, F1, AUC-ROC", time: "45min", note: "Accuracy is almost always the wrong metric to optimize" },
              { name: "Confusion matrix — reading and interpreting", time: "25min", note: null },
              { name: "Regression metrics: MAE, MSE, RMSE, R²", time: "25min", note: null },
              { name: "Bias-variance tradeoff: diagnosing with learning curves", time: "35min", note: null },
              { name: "Hyperparameter tuning: GridSearchCV, RandomizedSearchCV", time: "35min", note: null },
            ],
            resource: "Scikit-Learn User Guide — Model Evaluation section",
            milestone: "Evaluate a model properly — not just by accuracy",
          },
          {
            day: "Days 23–24", hours: "6h", title: "Feature Engineering & Pipelines",
            subtopics: [
              { name: "Scaling: StandardScaler, MinMaxScaler, RobustScaler", time: "30min", note: "Neural nets always need scaled data" },
              { name: "Encoding categoricals: OneHot, Ordinal, Target encoding", time: "35min", note: null },
              { name: "Handling missing data: imputation strategies", time: "25min", note: null },
              { name: "Feature selection: correlation, mutual info, RFE", time: "30min", note: null },
              { name: "sklearn Pipelines: chain preprocessing + model in one object", time: "45min", note: "Industry standard — never preprocess outside a Pipeline" },
              { name: "ColumnTransformer: different transforms for different columns", time: "30min", note: null },
              { name: "Practice: Full preprocessing Pipeline for a messy dataset", time: "60min", note: null },
            ],
            resource: "Kaggle Feature Engineering course (free)",
            milestone: "Production-ready sklearn Pipeline with preprocessing + model",
          },
          {
            day: "Days 25–26", hours: "6h", title: "Unsupervised Learning + Kaggle Project",
            subtopics: [
              { name: "K-Means clustering: choosing K, elbow method", time: "35min", note: null },
              { name: "PCA: dimensionality reduction, explained variance", time: "40min", note: "Reduces noise, speeds training, enables 2D visualization" },
              { name: "t-SNE & UMAP: visualizing high-dimensional data", time: "30min", note: "Used constantly in NLP and embedding visualization" },
              { name: "KAGGLE PROJECT: Titanic or House Prices end-to-end", time: "120min", note: "EDA → cleaning → feature eng → model → submission" },
            ],
            resource: "Kaggle competitions: Titanic (start here), House Prices",
            milestone: "Live Kaggle leaderboard submission — public score on record",
          },
        ],
      },
      {
        phase: "Phase 3", title: "Deep Learning with PyTorch",
        duration: "Days 27–44", hours: "54h", color: "#7C4DFF", emoji: "🔥",
        note: "The hardest phase. Slow down here. Build from scratch before using high-level APIs.",
        topics: [
          {
            day: "Days 27–28", hours: "6h", title: "Neural Networks from Scratch",
            subtopics: [
              { name: "Perceptron: weights, bias, activation, single neuron", time: "35min", note: null },
              { name: "Multi-layer perceptron: hidden layers, forward pass", time: "40min", note: null },
              { name: "Activation functions: ReLU, sigmoid, tanh, softmax", time: "35min", note: "ReLU for hidden layers, softmax for output classification" },
              { name: "Backpropagation: chain rule applied to layers", time: "50min", note: "Don't skip this — understanding backprop = understanding LLMs" },
              { name: "Implement a neural net using ONLY NumPy (no frameworks)", time: "90min", note: "The most important 90 minutes in this entire curriculum" },
            ],
            resource: "Andrej Karpathy — micrograd from scratch (YouTube)",
            milestone: "Neural network trained on XOR problem with zero libraries",
          },
          {
            day: "Days 29–31", hours: "9h", title: "PyTorch Fundamentals",
            subtopics: [
              { name: "Tensors vs NumPy arrays: GPU support, autograd", time: "30min", note: null },
              { name: "torch.autograd: how PyTorch tracks gradients automatically", time: "35min", note: null },
              { name: "nn.Module: building models as classes", time: "40min", note: "Like Flutter widgets — compose small parts into big models" },
              { name: "Optimizers: SGD, Adam, AdamW — when to use each", time: "30min", note: "Adam is default; AdamW for transformers" },
              { name: "Training loop: forward → loss → backward → step", time: "45min", note: "Memorize this loop — it never changes" },
              { name: "DataLoader, Dataset: batching and shuffling", time: "35min", note: null },
              { name: "GPU training: .to(device), cuda vs cpu", time: "25min", note: "Use Google Colab free GPU" },
              { name: "Practice: Build and train MLP on MNIST digit recognition", time: "90min", note: null },
            ],
            resource: "PyTorch official 60 Minute Blitz · fast.ai Lesson 1",
            milestone: ">97% accuracy on MNIST — standard benchmark",
          },
          {
            day: "Days 32–35", hours: "12h", title: "Convolutional Neural Networks (CNNs)",
            subtopics: [
              { name: "Convolutions: kernel, stride, padding, feature maps", time: "45min", note: "Filters detect edges → shapes → objects" },
              { name: "Pooling layers: MaxPool, AvgPool", time: "25min", note: null },
              { name: "Transfer learning: use pretrained ResNet, EfficientNet", time: "50min", note: "Industry standard — never train image models from scratch" },
              { name: "Batch normalization: why it speeds training dramatically", time: "25min", note: null },
              { name: "Dropout: regularization, preventing overfitting", time: "20min", note: null },
              { name: "Data augmentation: flips, rotations, crops", time: "30min", note: null },
              { name: "Practice: CIFAR-10 image classifier with ResNet transfer learning", time: "120min", note: "Target: >90% accuracy" },
            ],
            resource: "CS231n Stanford (free online) · fast.ai Lesson 2",
            milestone: "CIFAR-10 classifier >90% accuracy with transfer learning",
          },
          {
            day: "Days 36–40", hours: "15h", title: "NLP & Transformers",
            subtopics: [
              { name: "Text preprocessing: tokenization, vocab, embeddings", time: "40min", note: null },
              { name: "Word embeddings: Word2Vec, GloVe — semantic meaning as vectors", time: "40min", note: "Words become numbers — foundation of all modern NLP" },
              { name: "RNNs: sequential processing, hidden state, vanishing gradients", time: "45min", note: null },
              { name: "LSTMs: forget/input/output gates — solving vanishing gradient", time: "45min", note: null },
              { name: "Attention mechanism: 'what should I focus on?'", time: "60min", note: "THE breakthrough that led to transformers and GPT" },
              { name: "Transformer architecture: self-attention, positional encoding", time: "90min", note: "Spend real time here — this is what ChatGPT is built on" },
              { name: "HuggingFace basics: from_pretrained, Tokenizer, pipeline API", time: "60min", note: "HuggingFace is your npm for AI models" },
              { name: "BERT fine-tuning for text classification", time: "90min", note: null },
              { name: "Practice: Sentiment classifier using HuggingFace + PyTorch", time: "120min", note: null },
            ],
            resource: "Karpathy — Let's build GPT · HuggingFace Course ch.1–3",
            milestone: "Fine-tuned BERT model on HuggingFace Hub with eval scores",
          },
          {
            day: "Days 41–44", hours: "12h", title: "Month 2 Capstone Project",
            subtopics: [
              { name: "Choose: image classification, text classification, or tabular prediction", time: "1h", note: null },
              { name: "Full EDA and data preparation", time: "3h", note: null },
              { name: "Baseline (classical ML) vs deep learning model comparison", time: "3h", note: null },
              { name: "Hyperparameter tuning and model selection", time: "2h", note: null },
              { name: "Clean notebook + push to GitHub with demo GIF in README", time: "3h", note: "Portfolio piece #2" },
            ],
            resource: "Kaggle datasets · Papers with Code",
            milestone: "GitHub project: model beats a published baseline",
          },
        ],
      },
    ],
  },
  {
    id: 3, title: "LLMs & Modern AI Stack", duration: "Month 3 · Days 45–74",
    totalHours: "~80h", color: "#69FF47", emoji: "🤖",
    tagline: "This is where the jobs are. Every day here is a day closer to hireable.",
    phases: [
      {
        phase: "Phase 1", title: "LLM Fundamentals & API Mastery",
        duration: "Days 45–52", hours: "24h", color: "#69FF47", emoji: "💬",
        note: "From calling APIs to understanding what actually happens inside them.",
        topics: [
          {
            day: "Days 45–46", hours: "6h", title: "How LLMs Actually Work",
            subtopics: [
              { name: "Transformer deep dive: Q, K, V matrices, scaled dot-product attention", time: "50min", note: "Watch Karpathy's GPT video — best explanation that exists" },
              { name: "Tokenization: BPE, WordPiece — how text becomes numbers", time: "30min", note: "Try tiktoken to count tokens of any text" },
              { name: "Context windows: why they matter, what happens when exceeded", time: "25min", note: null },
              { name: "Temperature, top-p, top-k sampling — how randomness is controlled", time: "30min", note: null },
              { name: "Pre-training vs fine-tuning vs RLHF", time: "35min", note: "This explains WHY ChatGPT doesn't just say harmful things" },
              { name: "Open vs closed models: GPT-4o vs Llama 3 vs Gemini trade-offs", time: "25min", note: null },
            ],
            resource: "Karpathy — Let's build GPT · Illustrated Transformer (Jay Alammar)",
            milestone: "Explain transformer attention to someone in plain language",
          },
          {
            day: "Days 47–49", hours: "9h", title: "Prompt Engineering Mastery",
            subtopics: [
              { name: "Zero-shot, one-shot, few-shot prompting — when each works", time: "30min", note: null },
              { name: "Chain-of-thought (CoT): 'think step by step' and why it works", time: "30min", note: null },
              { name: "System prompts: role setting, constraints, output format control", time: "35min", note: null },
              { name: "Structured outputs: JSON mode, function calling, tool use", time: "50min", note: "Critical for production apps — makes LLM output reliable" },
              { name: "Prompt chaining: breaking complex tasks into steps", time: "35min", note: null },
              { name: "Anthropic API: messages, system, multi-turn, streaming", time: "40min", note: null },
              { name: "OpenAI API: chat completions, vision, embeddings endpoints", time: "40min", note: null },
              { name: "Practice: CLI AI coding assistant with conversation memory", time: "120min", note: null },
            ],
            resource: "Anthropic Prompt Engineering Guide · OpenAI Cookbook (GitHub)",
            milestone: "CLI chatbot with system prompt, memory, and streaming output",
          },
          {
            day: "Days 50–52", hours: "9h", title: "Embeddings & Semantic Search",
            subtopics: [
              { name: "What embeddings are: text → vector of numbers", time: "35min", note: "One paragraph becomes one point in 1536-dimensional space" },
              { name: "OpenAI text-embedding-3 models", time: "20min", note: null },
              { name: "Sentence Transformers: open-source embedding models", time: "30min", note: null },
              { name: "Cosine similarity: measuring semantic closeness", time: "25min", note: null },
              { name: "Building a semantic search engine from scratch", time: "60min", note: null },
              { name: "FAISS: fast similarity search library", time: "45min", note: null },
              { name: "Chroma DB: simplest vector database, zero-config setup", time: "45min", note: null },
              { name: "Practice: Semantic search over a library of 500+ articles", time: "120min", note: null },
            ],
            resource: "OpenAI Embeddings guide · Chroma docs · FAISS GitHub",
            milestone: "Semantic search engine — finds docs by meaning, not keywords",
          },
        ],
      },
      {
        phase: "Phase 2", title: "RAG Systems & Agentic AI",
        duration: "Days 53–64", hours: "36h", color: "#00C853", emoji: "🔗",
        note: "The most in-demand AI engineering skill right now. Master this = hireable.",
        topics: [
          {
            day: "Days 53–56", hours: "12h", title: "RAG Architecture",
            subtopics: [
              { name: "RAG fundamentals: why LLMs hallucinate, how RAG fixes it", time: "30min", note: null },
              { name: "Document loading: PDF, DOCX, HTML, Markdown parsers", time: "35min", note: null },
              { name: "Chunking strategies: fixed, semantic, recursive character splitting", time: "45min", note: "Bad chunking = bad retrieval. Matters more than model choice." },
              { name: "Embedding + indexing: document → chunks → embed → store", time: "45min", note: null },
              { name: "Retrieval: similarity search, MMR (max marginal relevance)", time: "35min", note: null },
              { name: "LangChain LCEL: chains, runnables, piping components", time: "50min", note: null },
              { name: "LlamaIndex: indexing, query engines, response synthesis", time: "50min", note: null },
              { name: "Evaluation: RAGAS metrics — faithfulness, answer relevancy", time: "40min", note: null },
              { name: "Practice: RAG chatbot over your own PDF library", time: "150min", note: "Portfolio piece #3" },
            ],
            resource: "LangChain docs · LlamaIndex docs · RAGAS GitHub",
            milestone: "RAG app that answers questions over 50+ page PDF with citations",
          },
          {
            day: "Days 57–60", hours: "12h", title: "Advanced RAG & Production Patterns",
            subtopics: [
              { name: "Hybrid search: combining vector + keyword (BM25) search", time: "40min", note: "Pure semantic search fails on names/codes — hybrid fixes this" },
              { name: "Re-ranking: Cohere reranker, cross-encoders", time: "35min", note: null },
              { name: "Query expansion and HyDE (Hypothetical Document Embeddings)", time: "35min", note: null },
              { name: "Metadata filtering: pre-filter before vector search", time: "30min", note: null },
              { name: "Pinecone: production vector DB, namespaces, filters", time: "45min", note: null },
              { name: "Streaming responses: SSE, async generators", time: "35min", note: "Connects directly to your Flutter streaming UI skills" },
              { name: "Semantic caching to reduce API costs", time: "30min", note: null },
              { name: "Practice: Production RAG with hybrid search + re-ranking", time: "120min", note: null },
            ],
            resource: "Pinecone Learning Center · LangChain Advanced RAG cookbook",
            milestone: "RAG system with hybrid search that outperforms naive RAG",
          },
          {
            day: "Days 61–64", hours: "12h", title: "AI Agents & Tool Use",
            subtopics: [
              { name: "What agents are: LLM + tools + observation loop (ReAct)", time: "35min", note: null },
              { name: "Tool definitions: function calling schema, descriptions matter", time: "40min", note: null },
              { name: "LangChain agents: AgentExecutor, tool integration", time: "45min", note: null },
              { name: "Custom tools: wrap any Python function as an LLM tool", time: "40min", note: null },
              { name: "LangGraph: stateful agent workflows as graphs", time: "60min", note: "Most important agentic framework right now" },
              { name: "Memory types: conversation buffer, summary, entity memory", time: "35min", note: null },
              { name: "Practice: Autonomous research agent that searches web + summarizes", time: "120min", note: null },
            ],
            resource: "LangGraph docs · Anthropic tool use cookbook",
            milestone: "Agent that uses 3+ tools to complete a multi-step task autonomously",
          },
        ],
      },
      {
        phase: "Phase 3", title: "Fine-Tuning & Local Models",
        duration: "Days 65–74", hours: "20h", color: "#1B5E20", emoji: "🔧",
        note: "Fine-tuning makes you senior-level. Local models make you cost-efficient.",
        topics: [
          {
            day: "Days 65–68", hours: "12h", title: "Fine-Tuning Fundamentals",
            subtopics: [
              { name: "When to fine-tune vs RAG vs prompt engineering", time: "30min", note: "Most of the time, RAG wins. Know the exceptions." },
              { name: "LoRA: Low-Rank Adaptation — fine-tune with 0.1% of parameters", time: "50min", note: null },
              { name: "QLoRA: quantized LoRA — fine-tune 7B models on free Colab GPU", time: "45min", note: null },
              { name: "HuggingFace PEFT library: apply LoRA in 10 lines", time: "40min", note: null },
              { name: "Dataset preparation: instruction tuning format", time: "35min", note: null },
              { name: "Practice: Fine-tune Mistral-7B or Llama 3 8B on a custom task", time: "150min", note: "Use Google Colab A100 (~$3) or free T4" },
            ],
            resource: "HuggingFace PEFT docs · Unsloth (faster fine-tuning) · Axolotl",
            milestone: "Fine-tuned model on HuggingFace Hub with eval scores",
          },
          {
            day: "Days 69–74", hours: "8h", title: "Running Local Models with Ollama",
            subtopics: [
              { name: "Ollama: run Llama 3, Mistral, Phi-3 locally — one command", time: "25min", note: null },
              { name: "OpenAI-compatible APIs: drop-in replacement for OpenAI calls", time: "25min", note: null },
              { name: "When to use local vs cloud models (cost, privacy, latency)", time: "20min", note: "Local = free + private. Cloud = smarter + easier." },
              { name: "Multimodal models: LLaVA for vision, Whisper for audio", time: "40min", note: null },
              { name: "Practice: Port your RAG app to run 100% locally with Ollama", time: "120min", note: "Portfolio: 'privacy-first, zero cloud cost AI app'" },
            ],
            resource: "Ollama docs · LM Studio · Jan.ai",
            milestone: "Full RAG pipeline with zero API calls — 100% local",
          },
        ],
      },
    ],
  },
  {
    id: 4, title: "Build, Deploy & Get Hired", duration: "Month 4 · Days 75–120",
    totalHours: "~80h", color: "#FFD740", emoji: "🚀",
    tagline: "Your Flutter skills are your secret weapon. No AI dev can build mobile like you.",
    phases: [
      {
        phase: "Phase 1", title: "AI Backend Development",
        duration: "Days 75–90", hours: "40h", color: "#FFD740", emoji: "⚙️",
        note: "Connect everything into real, deployable APIs.",
        topics: [
          {
            day: "Days 75–79", hours: "15h", title: "FastAPI for AI Backends",
            subtopics: [
              { name: "FastAPI setup: routes, request/response models with Pydantic", time: "40min", note: "FastAPI + Pydantic = type-safe Python backend. Very Dart-like." },
              { name: "Async endpoints: async def route handlers", time: "30min", note: "Handles concurrent AI API calls without blocking" },
              { name: "Streaming responses: StreamingResponse for LLM token streaming", time: "45min", note: "Flutter side: listen to HTTP stream with Dio" },
              { name: "File upload endpoints: accept PDFs for RAG ingestion", time: "35min", note: null },
              { name: "Auth: JWT tokens, API key middleware", time: "35min", note: null },
              { name: "WebSockets: real-time bidirectional for chat apps", time: "40min", note: "Flutter web_socket_channel connects to FastAPI WebSocket" },
              { name: "Practice: Build the backend for your RAG app with streaming", time: "180min", note: null },
            ],
            resource: "FastAPI official tutorial · Tiangolo GitHub examples",
            milestone: "Streaming RAG API with file upload — tested with Swagger UI",
          },
          {
            day: "Days 80–85", hours: "15h", title: "Docker & Deployment",
            subtopics: [
              { name: "Docker basics: images, containers, Dockerfile, layers", time: "40min", note: null },
              { name: "Dockerfile for Python/FastAPI: multi-stage builds", time: "35min", note: null },
              { name: "docker-compose: spin up API + vector DB + Redis together", time: "35min", note: null },
              { name: "Railway: deploy FastAPI with one command — free tier available", time: "30min", note: "Best for beginners — no YAML hell" },
              { name: "Hugging Face Spaces: deploy Gradio/Streamlit demos for free", time: "30min", note: "Great for AI portfolio demos" },
              { name: "Modal.com: GPU serverless — run PyTorch inference serverlessly", time: "45min", note: "Most interesting deployment option for ML models" },
              { name: "Practice: Deploy your RAG backend live with public URL", time: "120min", note: null },
            ],
            resource: "Railway docs · Docker in 100 Seconds (Fireship) · Modal docs",
            milestone: "Live public API URL — works from your Flutter app",
          },
          {
            day: "Days 86–90", hours: "10h", title: "Flutter + AI Integration (Your Superpower)",
            subtopics: [
              { name: "Dio + streaming: receive LLM token streams in Flutter", time: "45min", note: "Listen to chunks, display progressively like ChatGPT" },
              { name: "Riverpod StreamProvider for AI response state", time: "40min", note: "Your Riverpod knowledge maps directly here" },
              { name: "Chat UI: bubble layout, typing indicator, streaming text animation", time: "60min", note: null },
              { name: "File picker + upload: send PDFs to RAG backend", time: "35min", note: null },
              { name: "On-device AI: Google ML Kit, TensorFlow Lite in Flutter", time: "50min", note: "Edge AI — no network needed" },
              { name: "Gemini API in Flutter: google_generative_ai package", time: "40min", note: "Google's official Flutter AI SDK — growing fast" },
              { name: "Practice: Full Flutter app connecting to your deployed AI backend", time: "150min", note: "Portfolio piece #4 — Full stack AI mobile app" },
            ],
            resource: "google_generative_ai pub.dev · Gemini Flutter cookbook",
            milestone: "Flutter app with streaming AI chat + PDF upload — show-off worthy",
          },
        ],
      },
      {
        phase: "Phase 2", title: "Portfolio Sprint",
        duration: "Days 91–105", hours: "25h", color: "#FF6D00", emoji: "🎨",
        note: "Three projects. Each targeted at a different type of AI job.",
        topics: [
          {
            day: "Days 91–96", hours: "10h", title: "Flagship: AI-Powered Mobile App",
            subtopics: [
              { name: "Concept: AI app solving a real problem you care about", time: null, note: "Examples: study assistant, code reviewer, journal with AI insights" },
              { name: "Flutter frontend: polished, production-quality UI", time: null, note: "Your edge — AI devs can't build UIs like you" },
              { name: "FastAPI backend: RAG + LLM + proper auth", time: null, note: null },
              { name: "Deployed: backend on Railway/Render, APK available", time: null, note: null },
              { name: "GitHub README: problem statement, architecture diagram, demo GIF", time: null, note: null },
            ],
            resource: "Excalidraw for architecture diagrams · Loom for demo videos",
            milestone: "App live + deployed + demo video recorded",
          },
          {
            day: "Days 97–101", hours: "8h", title: "Technical: ML Model + API",
            subtopics: [
              { name: "Pick a Kaggle problem in a domain you find interesting", time: null, note: null },
              { name: "Clean notebook: EDA → model → evaluation → interpretation", time: null, note: null },
              { name: "Serve model via FastAPI: /predict endpoint", time: null, note: null },
              { name: "Simple Gradio demo UI deployed on HuggingFace Spaces", time: null, note: "Free, indexed by Google" },
            ],
            resource: "Gradio docs · HuggingFace Spaces",
            milestone: "Live model demo accessible from any browser",
          },
          {
            day: "Days 102–105", hours: "7h", title: "Open Source Contribution + Writing",
            subtopics: [
              { name: "Find a LangChain / LlamaIndex / HuggingFace good first issue", time: null, note: null },
              { name: "Fix a bug or add a small feature with tests + submit PR", time: null, note: "Even a docs fix counts — shows you engage with the community" },
              { name: "Write a dev.to or Medium post about what you built/learned", time: null, note: "Technical writing = instant credibility signal" },
            ],
            resource: "GitHub good-first-issue labels · dev.to",
            milestone: "Merged PR or published technical article",
          },
        ],
      },
      {
        phase: "Phase 3", title: "Job Hunt Execution",
        duration: "Days 106–120", hours: "15h", color: "#E65100", emoji: "🎯",
        note: "Strategy > volume. 5 targeted applications beat 50 spray-and-pray.",
        topics: [
          {
            day: "Days 106–110", hours: "5h", title: "Resume & LinkedIn Positioning",
            subtopics: [
              { name: "Resume: 1 page, lead with skills not job titles", time: null, note: "Skills: Python, PyTorch, LangChain, RAG, FastAPI, Flutter, LLM APIs" },
              { name: "LinkedIn headline: 'AI Engineer | Flutter & Python | LLMs + RAG'", time: null, note: null },
              { name: "LinkedIn featured: pin your 3 portfolio projects with screenshots", time: null, note: null },
              { name: "GitHub profile README: projects, tech stack, contact", time: null, note: null },
              { name: "Cold DMs: message 5 AI engineers per day, ask for 15min chats", time: null, note: "Most hireable AI devs got jobs through network, not applications" },
            ],
            resource: "Levels.fyi · LinkedIn Sales Navigator free trial",
            milestone: "Resume done, LinkedIn revamped, 3 projects pinned",
          },
          {
            day: "Days 111–115", hours: "5h", title: "Interview Preparation",
            subtopics: [
              { name: "ML fundamentals: bias-variance, loss functions, evaluation metrics", time: null, note: null },
              { name: "LLM questions: how transformers work, RAG vs fine-tuning", time: null, note: null },
              { name: "System design: design a RAG chatbot for 10M document corpus", time: null, note: null },
              { name: "Python coding: LeetCode easy/medium, arrays and strings", time: null, note: "AI startups rarely ask hard LeetCode — system design matters more" },
              { name: "Behavioral: STAR format stories from your project work", time: null, note: null },
            ],
            resource: "ML interviews book (Chip Huyen) · Interview Kickstart AI track",
            milestone: "30 STAR stories written · 5 system design walkthroughs practiced",
          },
          {
            day: "Days 116–120", hours: "5h", title: "Apply & Network",
            subtopics: [
              { name: "Target: AI-first startups (Series A–C), not FAANG", time: null, note: "YC companies, a16z portfolio — they hire for velocity, not pedigree" },
              { name: "Job boards: LinkedIn, Otta, Wellfound (AngelList)", time: null, note: null },
              { name: "Twitter/X: follow AI researchers, comment on their posts", time: null, note: null },
              { name: "Apply 5 targeted per day, track in Notion", time: null, note: null },
              { name: "Follow up: email 5 days after, again after 10 days", time: null, note: null },
            ],
            resource: "Wellfound.com · YC job board · a16z portfolio companies",
            milestone: "50 applications, 5+ conversations active, 1+ interviews booked",
          },
        ],
      },
    ],
  },
];

const portfolioPieces = [
  { num: "01", title: "Data Analysis Notebook", when: "Day 14", color: "#00E5FF", tag: "Pandas + NumPy + Matplotlib" },
  { num: "02", title: "ML Model + Kaggle Submission", when: "Month 2", color: "#B388FF", tag: "scikit-learn + PyTorch + HuggingFace" },
  { num: "03", title: "RAG Chatbot over PDFs", when: "Month 3", color: "#69FF47", tag: "LangChain + Chroma + LLM API" },
  { num: "04", title: "Flutter AI Mobile App", when: "Month 4", color: "#FFD740", tag: "FastAPI + Flutter — your unique edge" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function FullAICurriculum() {
  const [activeMonth, setActiveMonth] = useState(0); // 0=month1, 1=month2, 2=month3, 3=month4
  const [activePhase, setActivePhase] = useState(0);
  const [expandedTopic, setExpandedTopic] = useState(0);
  const [showDartMap, setShowDartMap] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const monthMeta = [
    { id: 1, label: "Python", hours: "~43h", color: "#00E5FF", emoji: "⚡" },
    { id: 2, label: "ML Core", hours: "~90h", color: "#B388FF", emoji: "🧠" },
    { id: 3, label: "LLMs & RAG", hours: "~80h", color: "#69FF47", emoji: "🤖" },
    { id: 4, label: "Ship & Hire", hours: "~80h", color: "#FFD740", emoji: "🚀" },
  ];

  // Get current phases
  const getCurrentPhases = () => {
    if (activeMonth === 0) return month1Phases;
    return months234[activeMonth - 1].phases;
  };

  const currentPhases = getCurrentPhases();
  const currentPhase = currentPhases[activePhase] || currentPhases[0];
  const currentColor = activeMonth === 0 ? "#00E5FF" : months234[activeMonth - 1].color;
  const currentPhaseColor = currentPhase.color || currentColor;

  const handleMonthChange = (i) => {
    setActiveMonth(i);
    setActivePhase(0);
    setExpandedTopic(0);
  };

  const handlePhaseChange = (i) => {
    setActivePhase(i);
    setExpandedTopic(0);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#07090F",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      color: "#D4D8E8",
      overflowX: "hidden",
    }}>
      {/* ── HEADER ── */}
      <div style={{
        padding: "36px 24px 24px",
        background: "#0A0D14",
        borderBottom: "1px solid #161B27",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "radial-gradient(circle at 10% 60%, rgba(0,229,255,0.07) 0%, transparent 45%), " +
            "radial-gradient(circle at 90% 20%, rgba(255,215,64,0.05) 0%, transparent 45%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#0D1117", border: "1px solid #1E2433",
            borderRadius: 6, padding: "4px 12px", marginBottom: 16,
            fontSize: 10, color: "#69FF47", letterSpacing: 3, textTransform: "uppercase",
          }}>
            Flutter Dev → AI Engineer · Complete 4-Month Curriculum
          </div>
          <h1 style={{
            margin: "0 0 8px",
            fontSize: "clamp(22px, 4vw, 40px)",
            fontWeight: 700, letterSpacing: -1, lineHeight: 1.1,
          }}>
            The Full Roadmap —
            <span style={{
              background: "linear-gradient(90deg, #00E5FF 0%, #B388FF 35%, #69FF47 65%, #FFD740 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}> All 4 Months</span>
          </h1>
          <p style={{ margin: "0 0 20px", color: "#4B5563", fontSize: 12, maxWidth: 500, lineHeight: 1.6 }}>
            ~293 hours · 120 days · 4 portfolio projects · every topic with resources & milestones.
            Every Dart parallel tagged where relevant.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { v: "120", l: "days" }, { v: "~293h", l: "total" },
              { v: "4", l: "projects" }, { v: "$157K", l: "avg salary" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: ["#00E5FF","#B388FF","#69FF47","#FFD740"][i] }}>{s.v}</span>
                <span style={{ fontSize: 10, color: "#4B5563", letterSpacing: 1 }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px" }}>

        {/* ── MONTH TABS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 20 }}>
          {monthMeta.map((m, i) => (
            <button
              key={i}
              onClick={() => handleMonthChange(i)}
              style={{
                padding: "12px 8px",
                borderRadius: 8,
                border: `1px solid ${activeMonth === i ? m.color : "#1A1F2E"}`,
                background: activeMonth === i ? `${m.color}12` : "#0C0F1A",
                color: activeMonth === i ? m.color : "#4B5563",
                cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: 22 }}>{m.emoji}</span>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.5 }}>Month {m.id}</span>
              <span style={{ fontSize: 9, color: activeMonth === i ? m.color : "#2D3348" }}>{m.label}</span>
              <span style={{ fontSize: 9, color: activeMonth === i ? `${m.color}99` : "#1E2433" }}>{m.hours}</span>
            </button>
          ))}
        </div>

        {/* ── DART CHEAT SHEET (Month 1 only) ── */}
        {activeMonth === 0 && (
          <div style={{ border: "1px solid #1A1F2E", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
            <button
              onClick={() => setShowDartMap(!showDartMap)}
              style={{
                width: "100%", padding: "13px 18px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "#0C0F1A", border: "none", cursor: "pointer", color: "#9CA3AF",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span>🔄</span>
                <span style={{ fontSize: 12, letterSpacing: 0.5 }}>Dart → Python Cheat Sheet</span>
                <span style={{ fontSize: 9, background: "#00E5FF15", color: "#00E5FF", padding: "2px 8px", borderRadius: 4, letterSpacing: 2 }}>QUICK REF</span>
              </div>
              <span style={{ color: "#00E5FF" }}>{showDartMap ? "−" : "+"}</span>
            </button>
            {showDartMap && (
              <div style={{ padding: "14px 18px", background: "#0D1117", display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 4 }}>
                  <div style={{ fontSize: 9, color: "#1E3A8A", letterSpacing: 2, textAlign: "center" }}>DART</div>
                  <div style={{ fontSize: 9, color: "#14532D", letterSpacing: 2, textAlign: "center" }}>PYTHON</div>
                </div>
                {dartVsPython.map((row, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <div style={{ padding: "7px 11px", background: "#09122A", border: "1px solid #1E2E5A", borderRadius: 5, fontSize: 10, color: "#90CAF9", whiteSpace: "pre", overflow: "auto" }}>{row.dart}</div>
                    <div style={{ padding: "7px 11px", background: "#0A1A0C", border: "1px solid #1B3520", borderRadius: 5, fontSize: 10, color: "#A5D6A7", whiteSpace: "pre", overflow: "auto" }}>{row.python}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── PHASE TABS ── */}
        <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }}>
          {currentPhases.map((p, i) => (
            <button
              key={i}
              onClick={() => handlePhaseChange(i)}
              style={{
                flexShrink: 0, padding: "7px 13px",
                borderRadius: 6,
                border: `1px solid ${activePhase === i ? currentPhaseColor : "#1A1F2E"}`,
                background: activePhase === i ? `${currentPhaseColor}12` : "transparent",
                color: activePhase === i ? currentPhaseColor : "#4B5563",
                fontSize: 11, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 6,
                transition: "all 0.15s", whiteSpace: "nowrap",
              }}
            >
              <span>{p.emoji}</span>
              <span>{p.phase}</span>
              <span style={{ fontSize: 9, opacity: 0.6 }}>({p.hours})</span>
            </button>
          ))}
        </div>

        {/* ── PHASE INFO ── */}
        <div style={{
          padding: "16px 20px", borderRadius: 8,
          border: `1px solid ${currentPhaseColor}20`,
          background: "#0C0F1A", marginBottom: 14,
          display: "flex", gap: 14, alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 22, flexShrink: 0 }}>{currentPhase.emoji}</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>{currentPhase.title}</div>
            <div style={{ fontSize: 10, color: currentPhaseColor, letterSpacing: 1.5, marginBottom: 4 }}>
              {currentPhase.duration} · {currentPhase.hours}
            </div>
            <div style={{ fontSize: 11, color: "#6B7280", fontStyle: "italic" }}>{currentPhase.note}</div>
          </div>
        </div>

        {/* ── TOPICS ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {currentPhase.topics.map((topic, ti) => {
            const isOpen = expandedTopic === ti;
            return (
              <div key={ti} style={{
                border: `1px solid ${isOpen ? currentPhaseColor + "45" : "#1A1F2E"}`,
                borderRadius: 10, overflow: "hidden",
                transition: "border-color 0.2s",
              }}>
                <button
                  onClick={() => setExpandedTopic(isOpen ? null : ti)}
                  style={{
                    width: "100%", padding: "14px 18px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: isOpen ? `${currentPhaseColor}08` : "#0C0F1A",
                    border: "none", cursor: "pointer", color: "#D4D8E8",
                    transition: "background 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, textAlign: "left" }}>
                    <div style={{
                      padding: "5px 9px", borderRadius: 5,
                      background: `${currentPhaseColor}12`,
                      border: `1px solid ${currentPhaseColor}25`,
                      fontSize: 9, color: currentPhaseColor, letterSpacing: 1, whiteSpace: "nowrap",
                    }}>{topic.day}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: -0.2 }}>{topic.title}</div>
                      <div style={{ fontSize: 10, color: "#374151", marginTop: 2 }}>
                        {topic.hours && `${topic.hours} · `}{topic.subtopics.length} topics
                      </div>
                    </div>
                  </div>
                  <span style={{ color: currentPhaseColor, fontSize: 18, flexShrink: 0, marginLeft: 10 }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ background: "#09090F", borderTop: `1px solid ${currentPhaseColor}20` }}>
                    <div style={{ padding: "14px 18px" }}>
                      {/* Topics table */}
                      <div style={{ border: "1px solid #161B27", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
                        <div style={{
                          display: "grid", gridTemplateColumns: "1fr auto",
                          background: "#0D1117", padding: "7px 13px",
                        }}>
                          <div style={{ fontSize: 9, color: "#2D3348", letterSpacing: 2 }}>TOPIC</div>
                          <div style={{ fontSize: 9, color: "#2D3348", letterSpacing: 2 }}>TIME</div>
                        </div>
                        {topic.subtopics.map((sub, si) => (
                          <div key={si} style={{
                            display: "grid", gridTemplateColumns: "1fr auto",
                            borderTop: "1px solid #161B27",
                            background: si % 2 === 0 ? "#0A0C14" : "#09090F",
                          }}>
                            <div style={{ padding: "9px 13px" }}>
                              <div style={{ fontSize: 12, color: "#C5CAD4", lineHeight: 1.4 }}>{sub.name}</div>
                              {sub.note && (
                                <div style={{ fontSize: 10, color: "#3D6B4B", marginTop: 3, display: "flex", gap: 5, alignItems: "flex-start" }}>
                                  <span style={{ flexShrink: 0 }}>→</span>
                                  <span style={{ fontStyle: "italic" }}>{sub.note}</span>
                                </div>
                              )}
                            </div>
                            <div style={{
                              padding: "9px 13px",
                              fontSize: 11, color: sub.time ? currentPhaseColor : "#2D3348",
                              whiteSpace: "nowrap", display: "flex", alignItems: "flex-start",
                            }}>{sub.time || "—"}</div>
                          </div>
                        ))}
                      </div>

                      {/* Resource + Milestone */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        <div style={{ padding: "10px 13px", borderRadius: 7, background: "#0D1117", border: "1px solid #1A1F2E" }}>
                          <div style={{ fontSize: 9, color: "#374151", letterSpacing: 2, marginBottom: 5 }}>📚 RESOURCE</div>
                          <div style={{ fontSize: 11, color: "#6B7280", lineHeight: 1.5 }}>{topic.resource}</div>
                        </div>
                        <div style={{ padding: "10px 13px", borderRadius: 7, background: `${currentPhaseColor}0A`, border: `1px dashed ${currentPhaseColor}35` }}>
                          <div style={{ fontSize: 9, color: currentPhaseColor, letterSpacing: 2, marginBottom: 5 }}>✓ MILESTONE</div>
                          <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.5 }}>{topic.milestone}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── PORTFOLIO TRACKER ── */}
        <div style={{ marginTop: 32 }}>
          <button
            onClick={() => setShowPortfolio(!showPortfolio)}
            style={{
              width: "100%", padding: "13px 18px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#0C0F1A", border: "1px solid #1A1F2E",
              borderRadius: 10, cursor: "pointer", color: "#9CA3AF",
              marginBottom: showPortfolio ? 0 : 0,
              borderBottomLeftRadius: showPortfolio ? 0 : 10,
              borderBottomRightRadius: showPortfolio ? 0 : 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span>🗂️</span>
              <span style={{ fontSize: 12 }}>Portfolio — 4 Projects You'll Build</span>
            </div>
            <span style={{ color: "#FFD740" }}>{showPortfolio ? "−" : "+"}</span>
          </button>
          {showPortfolio && (
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
              padding: "14px", background: "#0A0D14",
              border: "1px solid #1A1F2E", borderTop: "none",
              borderRadius: "0 0 10px 10px",
            }}>
              {portfolioPieces.map((p, i) => (
                <div key={i} style={{
                  padding: "13px 15px", borderRadius: 8,
                  border: `1px solid ${p.color}25`, background: "#0C0F1A",
                  display: "flex", gap: 11, alignItems: "flex-start",
                }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: `${p.color}40`, flexShrink: 0 }}>{p.num}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#D4D8E8", marginBottom: 3 }}>{p.title}</div>
                    <div style={{ fontSize: 10, color: p.color, marginBottom: 2 }}>{p.tag}</div>
                    <div style={{ fontSize: 10, color: "#374151" }}>{p.when}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── FOOTER ── */}
        <div style={{ marginTop: 32, textAlign: "center", fontSize: 10, color: "#1A1F2E", letterSpacing: 2, lineHeight: 2 }}>
          CLICK MONTHS → PHASES → EXPAND TOPICS<br />→ = INSIDER NOTE · 🔄 = DART PARALLEL (MONTH 1)
        </div>
      </div>
    </div>
  );
}
